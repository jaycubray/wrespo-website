'use client'

import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const isBooked = searchParams.get('booked') === 'true'

  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">{isBooked ? '📅' : '✅'}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">
              {isBooked
                ? "You're All Set!"
                : "Thanks! We'll Be In Touch Soon."}
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              {isBooked
                ? "Your appointment has been scheduled. Check your email for a calendar invite and meeting details."
                : "We've received your message and will respond within 2 hours during business hours."}
            </p>

            {isBooked && (
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-3 text-dark">What's Next?</h2>
                <ul className="text-left space-y-2 text-gray-700 max-w-md mx-auto">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    Check your email for the calendar invite
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Add it to your calendar so you don't miss it
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    We'll call you at the scheduled time
                  </li>
                </ul>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 text-dark">
                While you wait, check out:
              </h2>

              <div className="space-y-4">
                <Link
                  href="/case-studies/peterson-hvac"
                  className="block p-4 bg-light rounded-lg hover:bg-gray-200 transition-colors text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">📄</span>
                    <div>
                      <p className="font-semibold text-dark">
                        Download our Case Study
                      </p>
                      <p className="text-sm text-gray-600">
                        How Peterson HVAC Added $127K/Month
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="block p-4 bg-light rounded-lg hover:bg-gray-200 transition-colors text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">🎥</span>
                    <div>
                      <p className="font-semibold text-dark">
                        Watch our 2-Minute Demo Video
                      </p>
                      <p className="text-sm text-gray-600">
                        See Wrespo AI in action
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="block p-4 bg-light rounded-lg hover:bg-gray-200 transition-colors text-left"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">📝</span>
                    <div>
                      <p className="font-semibold text-dark">
                        Read our Blog
                      </p>
                      <p className="text-sm text-gray-600">
                        5 Signs You're Losing Money to Slow Follow-Up
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/">
              <Button size="lg" variant="outline">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
