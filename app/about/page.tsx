import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'About Wrespo.ai - Business Growth Experts Who Use AI',
  description: 'We\'re not AI experts. We\'re business growth experts who use AI to help service businesses increase revenue.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark">
              We're Not AI Experts. We're Business Growth Experts Who Use AI.
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Here's the truth: most "AI agencies" are tech nerds who've never run a real business.
            </p>
            <p className="text-lg text-gray-600">
              They'll sell you fancy automation, charge you $50K, and leave you with a chatbot that doesn't actually book appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-dark">We're different.</h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                I started Wrespo after running my own service business for 8 years. I know what it's like to:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-alert mr-2">•</span>
                  <span>Miss calls during lunch rush and lose jobs to competitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-2">•</span>
                  <span>Pay $7K/month per appointment setter just to have them quit 6 months later</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-2">•</span>
                  <span>Spend thousands on ads only to watch leads go cold because follow-up was slow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-2">•</span>
                  <span>Work 70-hour weeks trying to do everything yourself</span>
                </li>
              </ul>

              <p className="text-xl font-semibold text-dark mt-8">
                When I discovered AI could solve these problems, I didn't hire it out—I built systems for my own business first.
              </p>

              <div className="bg-secondary/10 rounded-xl p-8 my-8">
                <p className="text-lg font-bold text-dark mb-4">The results were insane:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Booking rates went from 23% to 51%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Payroll dropped $18K/month (fired all my appointment setters)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>Revenue increased $90K/month without spending more on ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    <span>I got my life back</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl text-dark">
                Now I help other service business owners do the same thing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-dark">
              Our Approach
            </h2>

            <div className="space-y-12">
              {/* Principle 1 */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  We Don't Sell AI. We Sell Revenue Growth.
                </h3>
                <p className="text-gray-700 mb-4">AI is just the tool. The real value is in:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">Knowing exactly where your leads are falling through the cracks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">Building systems that actually work in the real world (not just demos)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">Implementing complete solutions (not just pieces that don't connect)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">Optimizing continuously so you keep improving</span>
                  </li>
                </ul>
              </div>

              {/* Principle 2 */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  We Only Work With Service Businesses
                </h3>
                <p className="text-gray-700">
                  We say no to e-commerce, SaaS, and other industries. Why? Because service businesses have unique needs, and we've spent years perfecting systems specifically for you.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  We Measure Everything
                </h3>
                <p className="text-gray-700 mb-4">You'll always know:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">How many leads came in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">How many turned into appointments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">What your booking rate is</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700">What your ROI is</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-semibold">No fluff. Just numbers.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button size="lg">Schedule Free Assessment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
