import Link from 'next/link'
import Button from './ui/Button'

export default function GuaranteeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-4 border-primary rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              Our 90-Day Performance Promise
            </h2>

            <div className="bg-white rounded-xl p-8 mb-8">
              <p className="text-2xl font-bold text-dark mb-4">
                IF YOUR BOOKING RATE DOESN'T IMPROVE BY AT LEAST 30% WITHIN 90 DAYS, WE'LL REFUND YOUR 2ND & 3RD MONTH.
              </p>
              <p className="text-lg text-gray-600">
                You only risk ONE month of service fees to see if AI transforms your business.
              </p>
            </div>

            <div className="text-left mb-8">
              <h3 className="font-bold text-xl mb-4 text-dark">How It Works:</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <p className="text-gray-700">
                    We set clear baseline metrics in Week 1 (your current booking rate)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <p className="text-gray-700">
                    We track improvement weekly with full transparency
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <p className="text-gray-700">
                    After 90 days, if you didn't hit 30% improvement, we refund months 2 & 3
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <p className="text-gray-700">
                    Setup fees are non-refundable (they cover custom development work)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 rounded-xl p-6 mb-8">
              <p className="text-lg font-bold text-dark mb-2">Why can we offer this?</p>
              <p className="text-gray-700">
                Because in 2 years, we've only had to issue 2 refunds. The system works.
              </p>
            </div>

            <Link href="/contact">
              <Button size="lg">Claim Your Guarantee</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
