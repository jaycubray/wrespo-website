import { NextRequest, NextResponse } from 'next/server'

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const DEFAULT_TIMEZONE = 'America/Chicago'

// This endpoint is designed for ElevenLabs agent webhook tool
// It handles appointment scheduling operations via voice AI

interface SchedulerRequest {
  operation: 'check_availability' | 'book_appointment' | 'get_next_available'
  // For check_availability
  date?: string // ISO date string or natural language like "tomorrow", "next Monday"
  // For book_appointment
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  startTime?: number // Unix timestamp in milliseconds
  duration?: number // Duration in milliseconds (default 30 min = 1800000)
  // General
  timezone?: string
}

// Get the meeting slug from HubSpot
async function getMeetingSlug(): Promise<string | null> {
  try {
    const response = await fetch(
      'https://api.hubapi.com/scheduler/v3/meetings/meeting-links?limit=1',
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) return null

    const data = await response.json()
    return data.results?.[0]?.slug || null
  } catch {
    return null
  }
}

// Parse natural language date to actual date
function parseDate(dateStr: string): Date {
  const now = new Date()
  const lower = dateStr.toLowerCase().trim()

  if (lower === 'today') {
    return now
  }

  if (lower === 'tomorrow') {
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
  }

  if (lower.startsWith('next ')) {
    const dayName = lower.replace('next ', '')
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const targetDay = days.indexOf(dayName)
    if (targetDay !== -1) {
      const result = new Date(now)
      const currentDay = result.getDay()
      let daysToAdd = targetDay - currentDay
      if (daysToAdd <= 0) daysToAdd += 7
      result.setDate(result.getDate() + daysToAdd)
      return result
    }
  }

  // Try parsing as ISO date or other formats
  const parsed = new Date(dateStr)
  if (!isNaN(parsed.getTime())) {
    return parsed
  }

  // Default to today if parsing fails
  return now
}

// Format availability response for voice AI
function formatAvailabilityForVoice(slots: Array<{ startTime: number; endTime: number }>, timezone: string): string {
  if (slots.length === 0) {
    return "I don't see any available times for that date. Would you like to try a different day?"
  }

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: timezone,
  })

  const times = slots.slice(0, 5).map(slot => formatter.format(new Date(slot.startTime)))

  if (times.length === 1) {
    return `I have ${times[0]} available. Would that work for you?`
  }

  const lastTime = times.pop()
  return `I have ${times.join(', ')}, and ${lastTime} available. Which time works best for you?`
}

export async function POST(request: NextRequest) {
  if (!HUBSPOT_API_KEY) {
    return NextResponse.json({
      success: false,
      message: "I'm sorry, our scheduling system is temporarily unavailable. Please call us directly at (952) 314-3814.",
    })
  }

  try {
    const body: SchedulerRequest = await request.json()
    const { operation, timezone = DEFAULT_TIMEZONE } = body

    const slug = await getMeetingSlug()
    if (!slug) {
      return NextResponse.json({
        success: false,
        message: "I'm having trouble accessing our calendar. Let me transfer you to Jacob who can help schedule your appointment.",
      })
    }

    // Check availability for a specific date
    if (operation === 'check_availability') {
      const { date } = body
      if (!date) {
        return NextResponse.json({
          success: false,
          message: "What date were you thinking? I can check our availability for you.",
        })
      }

      const targetDate = parseDate(date)
      const monthOffset = (targetDate.getFullYear() - new Date().getFullYear()) * 12 +
        (targetDate.getMonth() - new Date().getMonth())

      const response = await fetch(
        `https://api.hubapi.com/scheduler/v3/meetings/meeting-links/book/availability-page/${slug}?timezone=${encodeURIComponent(timezone)}&monthOffset=${Math.max(0, monthOffset)}`,
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        return NextResponse.json({
          success: false,
          message: "I'm having trouble checking availability. Would you like me to try a different date?",
        })
      }

      const data = await response.json()
      const duration = body.duration || 1800000 // 30 min default
      const allSlots = data.availableSlots?.[String(duration)] || []

      // Filter slots for the target date
      const slotsForDate = allSlots.filter((slot: { startTime: number }) => {
        const slotDate = new Date(slot.startTime)
        return (
          slotDate.getDate() === targetDate.getDate() &&
          slotDate.getMonth() === targetDate.getMonth() &&
          slotDate.getFullYear() === targetDate.getFullYear()
        )
      })

      const dateStr = targetDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })

      return NextResponse.json({
        success: true,
        date: dateStr,
        availableSlots: slotsForDate,
        message: formatAvailabilityForVoice(slotsForDate, timezone),
      })
    }

    // Get next available slots (no specific date)
    if (operation === 'get_next_available') {
      const response = await fetch(
        `https://api.hubapi.com/scheduler/v3/meetings/meeting-links/book/availability-page/${slug}?timezone=${encodeURIComponent(timezone)}`,
        {
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        return NextResponse.json({
          success: false,
          message: "I'm having trouble accessing our calendar. Please try again in a moment.",
        })
      }

      const data = await response.json()
      const duration = body.duration || 1800000
      const allSlots = data.availableSlots?.[String(duration)] || []

      // Get next 5 available slots
      const nextSlots = allSlots.slice(0, 5)

      if (nextSlots.length === 0) {
        return NextResponse.json({
          success: false,
          message: "I don't see any availability in the near future. Let me transfer you to Jacob to find a time that works.",
        })
      }

      // Format the first available date
      const firstSlot = new Date(nextSlots[0].startTime)
      const dateStr = firstSlot.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })

      return NextResponse.json({
        success: true,
        nextAvailableDate: dateStr,
        availableSlots: nextSlots,
        message: `Our next available appointment is ${dateStr}. ${formatAvailabilityForVoice(nextSlots, timezone)}`,
      })
    }

    // Book an appointment
    if (operation === 'book_appointment') {
      const { firstName, lastName, email, phone, startTime, duration = 1800000 } = body

      if (!firstName || !lastName || !email || !startTime) {
        const missing = []
        if (!firstName) missing.push('first name')
        if (!lastName) missing.push('last name')
        if (!email) missing.push('email address')
        if (!startTime) missing.push('appointment time')

        return NextResponse.json({
          success: false,
          message: `I just need your ${missing.join(' and ')} to complete the booking.`,
          missingFields: missing,
        })
      }

      // Book the meeting
      const bookingPayload = {
        slug,
        firstName,
        lastName,
        email,
        startTime: Number(startTime),
        duration: Number(duration),
        timezone,
        locale: 'en-us',
        guestEmails: [],
      }

      const response = await fetch(
        `https://api.hubapi.com/scheduler/v3/meetings/meeting-links/book?timezone=${encodeURIComponent(timezone)}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingPayload),
        }
      )

      if (!response.ok) {
        const error = await response.json()
        console.error('Booking failed:', error)

        // Check if the slot was taken
        if (error.message?.includes('conflict') || error.message?.includes('unavailable')) {
          return NextResponse.json({
            success: false,
            message: "I'm sorry, that time slot was just taken. Let me check what else is available.",
            error: 'slot_taken',
          })
        }

        return NextResponse.json({
          success: false,
          message: "I'm having trouble completing the booking. Let me transfer you to Jacob to finish scheduling.",
        })
      }

      const booking = await response.json()

      // Also create/update contact in HubSpot CRM
      try {
        await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            properties: {
              firstname: firstName,
              lastname: lastName,
              email,
              phone: phone || '',
            },
          }),
        })
      } catch {
        // Contact creation failure shouldn't fail the booking
      }

      // Format confirmation
      const appointmentDate = new Date(startTime)
      const dateStr = appointmentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
      const timeStr = appointmentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: timezone,
      })

      return NextResponse.json({
        success: true,
        booking: {
          id: booking.calendarEventId,
          date: dateStr,
          time: timeStr,
          email,
        },
        message: `You're all set, ${firstName}! I've booked your appointment for ${dateStr} at ${timeStr}. You'll receive a calendar invite at ${email}. Is there anything else I can help you with?`,
      })
    }

    return NextResponse.json({
      success: false,
      message: "I'm not sure what you'd like to do. Would you like to schedule an appointment?",
    })
  } catch (error) {
    console.error('Agent scheduler error:', error)
    return NextResponse.json({
      success: false,
      message: "I'm sorry, something went wrong. Let me transfer you to Jacob who can help.",
    })
  }
}

// GET endpoint for health check / testing
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'agent-scheduler',
    operations: ['check_availability', 'book_appointment', 'get_next_available'],
  })
}
