'use client'

import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useRouter } from 'next/navigation'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
}

interface TimeSlot {
  startTime: number
  endTime: number
}

interface AvailabilityData {
  availableSlots?: {
    [duration: string]: TimeSlot[]
  }
  busyTimes?: Array<{ start: number; end: number }>
}

interface MeetingLink {
  id: string
  slug: string
  name: string
  link: string
  isDefault?: boolean
}

export default function ContactPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Meeting data
  const [meetingLinks, setMeetingLinks] = useState<MeetingLink[]>([])
  const [selectedMeeting, setSelectedMeeting] = useState<MeetingLink | null>(null)
  const [availability, setAvailability] = useState<AvailabilityData | null>(null)

  // Selection state
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [selectedDuration, setSelectedDuration] = useState<number>(1800000) // 30 min default
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Chicago'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  // Fetch meeting links on mount
  useEffect(() => {
    async function fetchMeetingLinks() {
      try {
        const response = await fetch('/api/meetings?action=list-links')
        if (!response.ok) throw new Error('Failed to load meeting links')

        const data = await response.json()
        const links = data.results || []
        setMeetingLinks(links)

        // Auto-select first meeting link
        if (links.length > 0) {
          setSelectedMeeting(links[0])
        }
      } catch (err) {
        console.error('Error fetching meeting links:', err)
        setError('Unable to load scheduling options. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeetingLinks()
  }, [])

  // Fetch availability when meeting is selected
  const fetchAvailability = useCallback(async (monthOffset = 0) => {
    if (!selectedMeeting?.slug) return

    try {
      const response = await fetch(
        `/api/meetings?action=availability&slug=${selectedMeeting.slug}&timezone=${encodeURIComponent(timezone)}&monthOffset=${monthOffset}`
      )

      if (!response.ok) throw new Error('Failed to load availability')

      const data = await response.json()
      setAvailability(data)
    } catch (err) {
      console.error('Error fetching availability:', err)
    }
  }, [selectedMeeting?.slug, timezone])

  useEffect(() => {
    if (selectedMeeting) {
      const monthOffset = getMonthOffset(currentMonth)
      fetchAvailability(monthOffset)
    }
  }, [selectedMeeting, currentMonth, fetchAvailability])

  function getMonthOffset(date: Date): number {
    const now = new Date()
    return (date.getFullYear() - now.getFullYear()) * 12 + (date.getMonth() - now.getMonth())
  }

  // Get available slots for selected date
  function getSlotsForDate(date: Date): TimeSlot[] {
    if (!availability?.availableSlots) return []

    const durationKey = String(selectedDuration)
    const slots = availability.availableSlots[durationKey] || []

    return slots.filter(slot => {
      const slotDate = new Date(slot.startTime)
      return (
        slotDate.getDate() === date.getDate() &&
        slotDate.getMonth() === date.getMonth() &&
        slotDate.getFullYear() === date.getFullYear()
      )
    })
  }

  // Get dates that have available slots
  function getAvailableDates(): Set<string> {
    const dates = new Set<string>()
    if (!availability?.availableSlots) return dates

    const durationKey = String(selectedDuration)
    const slots = availability.availableSlots[durationKey] || []

    slots.forEach(slot => {
      const date = new Date(slot.startTime)
      dates.add(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
    })

    return dates
  }

  // Format time for display
  function formatTime(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: timezone,
    })
  }

  // Generate calendar days
  function generateCalendarDays(): (Date | null)[] {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const days: (Date | null)[] = []

    // Add empty cells for days before the first day
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null)
    }

    // Add all days in the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  // Handle booking submission
  const onSubmit = async (data: FormData) => {
    if (!selectedSlot || !selectedMeeting) {
      setError('Please select a time slot')
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: selectedMeeting.slug,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          startTime: selectedSlot.startTime,
          duration: selectedDuration,
          timezone,
          formFields: {
            company: data.company,
          },
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to book appointment')
      }

      router.push('/thank-you?booked=true')
    } catch (err) {
      console.error('Booking error:', err)
      setError(err instanceof Error ? err.message : 'Failed to book appointment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const availableDates = getAvailableDates()
  const slotsForSelectedDate = selectedDate ? getSlotsForDate(selectedDate) : []

  if (isLoading) {
    return (
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>
                <div className="bg-white rounded-2xl shadow-xl p-8 h-96"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-dark">
              Schedule Your Free Assessment
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Pick a time that works for you. We'll discuss how AI can transform your lead conversion.
            </p>

            {error && (
              <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                {error}
              </div>
            )}

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendar Section */}
              <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
                {/* Duration Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Duration
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDuration(900000)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDuration === 900000
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      15 min
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDuration(1800000)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDuration === 1800000
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      30 min
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDuration(3600000)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedDuration === 3600000
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      60 min
                    </button>
                  </div>
                </div>

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    type="button"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    disabled={getMonthOffset(currentMonth) <= 0}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-xl font-bold text-dark">
                    {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-6">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {generateCalendarDays().map((date, index) => {
                    if (!date) {
                      return <div key={`empty-${index}`} className="aspect-square" />
                    }

                    const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
                    const isAvailable = availableDates.has(dateKey)
                    const isSelected = selectedDate?.toDateString() === date.toDateString()
                    const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))

                    return (
                      <button
                        key={dateKey}
                        type="button"
                        disabled={!isAvailable || isPast}
                        onClick={() => {
                          setSelectedDate(date)
                          setSelectedSlot(null)
                        }}
                        className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                          isSelected
                            ? 'bg-primary text-white'
                            : isAvailable && !isPast
                            ? 'bg-primary/10 text-primary hover:bg-primary/20'
                            : 'text-gray-300 cursor-not-allowed'
                        }`}
                      >
                        {date.getDate()}
                      </button>
                    )
                  })}
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-dark">
                      Available Times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h3>
                    {slotsForSelectedDate.length > 0 ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                        {slotsForSelectedDate.map((slot, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                              selectedSlot?.startTime === slot.startTime
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-primary/10 hover:text-primary'
                            }`}
                          >
                            {formatTime(slot.startTime)}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-4">No available times for this date</p>
                    )}
                  </div>
                )}

                <p className="text-sm text-gray-500 mt-6 text-center">
                  Times shown in {timezone.replace('_', ' ')}
                </p>
              </div>

              {/* Booking Form */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-dark">Your Details</h3>

                {selectedSlot && selectedDate && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-gray-600">Selected Time</p>
                    <p className="font-semibold text-dark">
                      {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                    </p>
                    <p className="text-primary font-bold">
                      {formatTime(selectedSlot.startTime)} - {formatTime(selectedSlot.endTime)}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    label="First Name *"
                    {...register('firstName', { required: 'First name is required' })}
                    error={errors.firstName?.message}
                    placeholder="John"
                  />

                  <Input
                    label="Last Name *"
                    {...register('lastName', { required: 'Last name is required' })}
                    error={errors.lastName?.message}
                    placeholder="Doe"
                  />

                  <Input
                    label="Email *"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    error={errors.email?.message}
                    placeholder="john@example.com"
                  />

                  <Input
                    label="Phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(952) 314-3814"
                  />

                  <Input
                    label="Company Name"
                    {...register('company')}
                    placeholder="Your Company LLC"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-6"
                    disabled={isSubmitting || !selectedSlot}
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                  </Button>

                  {!selectedSlot && (
                    <p className="text-sm text-gray-500 text-center">
                      Please select a date and time to continue
                    </p>
                  )}
                </form>

                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-bold mb-3 text-dark">Contact Info</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Phone: (952) 314-3814</p>
                    <p>Email: hello@wrespo.ai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
