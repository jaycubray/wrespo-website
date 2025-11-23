import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Peterson HVAC Case Study - Wrespo.ai',
  description: 'How Peterson HVAC added $127,000 in monthly revenue with AI automation',
}

export default function PetersonHVACCaseStudy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-dark">
              How Peterson HVAC Added $127,000 in Monthly Revenue With AI
            </h1>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Industry</p>
                  <p className="font-semibold text-dark">HVAC</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Location</p>
                  <p className="font-semibold text-dark">Denver, CO</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Size</p>
                  <p className="font-semibold text-dark">12 employees</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Challenge</p>
                  <p className="font-semibold text-dark">Low booking rate, high customer acquisition cost</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Solution</p>
                  <p className="font-semibold text-dark">Wrespo Complete System</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Results</p>
                  <p className="font-semibold text-secondary">$127,000 additional monthly revenue in 90 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-dark">The Situation</h2>

            <p className="text-gray-700">
              Mike Peterson had built Peterson HVAC into a solid business over 8 years. They were spending $15,000/month on Google and Facebook ads and generating about 100 leads per month.
            </p>

            <p className="text-gray-700">
              But Mike was frustrated. Out of those 100 leads, only 18-20 were turning into actual appointments. That's a 18-20% booking rate—way below industry average.
            </p>

            <p className="text-gray-700">
              The problem? Their two appointment setters couldn't keep up:
            </p>

            <ul className="space-y-2">
              <li className="text-gray-700">Calls after 5pm went to voicemail (and never got returned)</li>
              <li className="text-gray-700">Weekend leads sat untouched until Monday</li>
              <li className="text-gray-700">Follow-up was inconsistent—some leads got 3 calls, others got zero</li>
              <li className="text-gray-700">One appointment setter quit with 2 weeks notice, leaving them scrambling</li>
            </ul>

            <p className="text-gray-700">
              Mike calculated they were spending $150 per booked appointment on ads alone. With their 30% close rate and $10,000 average job value, the math barely worked.
            </p>

            <p className="text-gray-700 font-semibold">
              "I knew we were leaving money on the table, but I didn't realize how much until we saw the numbers."
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-dark">The Solution</h2>

            <p className="text-gray-700">
              We implemented the Wrespo Complete System over 4 weeks:
            </p>

            <div className="bg-white rounded-xl p-6 not-prose mb-6">
              <h3 className="font-bold text-xl mb-4 text-dark">Week 1: Discovery</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Analyzed their call recordings and booking process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Identified exactly where leads were falling through (after hours, slow follow-up, inconsistent qualification)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Built a custom roadmap for their specific situation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 not-prose mb-6">
              <h3 className="font-bold text-xl mb-4 text-dark">Week 2-3: Build & Train</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Trained AI on Peterson's best appointment setter's conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Integrated with their existing ServiceTitan CRM and Google Calendar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Set up 24/7 AI phone agent and SMS responder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Tested across 50+ scenarios before launch</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 not-prose mb-6">
              <h3 className="font-bold text-xl mb-4 text-dark">Week 4: Launch</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Went live with full monitoring for first 72 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Mike's team kept their jobs—AI handled overflow and after-hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span className="text-gray-700">Real-time adjustments based on performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-dark">The Results</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center bg-light rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Booking Rate</p>
                <p className="text-3xl font-bold text-secondary">18% → 47%</p>
              </div>
              <div className="text-center bg-light rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Monthly Revenue</p>
                <p className="text-3xl font-bold text-secondary">$54K → $181K</p>
              </div>
              <div className="text-center bg-light rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">No-Show Rate</p>
                <p className="text-3xl font-bold text-secondary">28% → 11%</p>
              </div>
              <div className="text-center bg-light rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">ROI</p>
                <p className="text-3xl font-bold text-secondary">587%</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl p-8 mb-8">
              <blockquote className="text-xl text-dark text-center italic">
                "We went from 18 appointments per month to 47 appointments—same leads, same ad spend. The AI just converts better than humans. That's an extra $127,000 in monthly revenue we weren't capturing before. My only question is why I didn't do this sooner."
              </blockquote>
              <p className="text-center mt-4 font-semibold text-dark">
                — Mike Peterson, Owner, Peterson HVAC
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark">Video Testimonial</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Video testimonial placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
              Want Similar Results?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how much revenue you could be adding with our ROI calculator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#calculator">
                <Button size="lg">Calculate My ROI</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Schedule Free Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
