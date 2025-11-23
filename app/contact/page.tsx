'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useRouter } from 'next/navigation'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  leads: string
  message: string
}

export default function ContactPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Here you would normally send the data to your backend/API
    console.log('Form data:', data)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to thank you page
    router.push('/thank-you')
  }

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-dark">
              Let's Talk About Your Business
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Book a free 15-minute assessment or send us a message below.
            </p>

            <div className="grid md:grid-cols-5 gap-8">
              {/* Form */}
              <div className="md:col-span-3 bg-white rounded-2xl shadow-xl p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Input
                    label="Name *"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                    placeholder="John Doe"
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
                    label="Phone *"
                    type="tel"
                    {...register('phone', { required: 'Phone is required' })}
                    error={errors.phone?.message}
                    placeholder="(555) 123-4567"
                  />

                  <Input
                    label="Company Name"
                    {...register('company')}
                    placeholder="Your Company LLC"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How many leads per month?
                    </label>
                    <select
                      {...register('leads')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-h-[48px]"
                    >
                      <option value="">Select an option</option>
                      <option value="<50">Less than 50</option>
                      <option value="50-100">50-100</option>
                      <option value="100-200">100-200</option>
                      <option value="200+">200+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your business..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="md:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-dark">Contact Info</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">📞</div>
                      <div>
                        <p className="font-semibold text-dark">Phone</p>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">📧</div>
                      <div>
                        <p className="font-semibold text-dark">Email</p>
                        <p className="text-gray-600">hello@wrespo.ai</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-bold mb-3 text-dark">Office Hours</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Monday-Friday: 8am-6pm CST</p>
                      <p>Saturday: 9am-2pm CST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <p className="text-sm text-gray-600 mb-2">
                      We typically respond within 2 hours during business hours.
                    </p>
                    <p className="font-semibold text-primary">
                      Prefer to talk? Call us directly at (555) 123-4567
                    </p>
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
