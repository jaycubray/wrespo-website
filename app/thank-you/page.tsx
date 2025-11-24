import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Thank You - Wrespo.ai',
  description: 'Thanks for contacting Wrespo.ai. We\'ll be in touch soon!',
}

export default function ThankYouPage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">
              Thanks! We'll Be In Touch Soon.
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We've received your message and will respond within 2 hours during business hours.
            </p>

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
