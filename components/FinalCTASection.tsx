import Button from './ui/Button'
import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Losing $50,000+ Per Month?
          </h2>
          <p className="text-xl mb-12">Here's what happens next:</p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-4">1️⃣</div>
              <h3 className="font-bold text-xl mb-2">Book Your Free Assessment</h3>
              <p className="text-white/90 text-sm">(15 minutes)</p>
              <p className="text-white/80 mt-2">
                We'll analyze your current systems and show you exactly where you're losing money.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-4">2️⃣</div>
              <h3 className="font-bold text-xl mb-2">Get Your Custom ROI Breakdown</h3>
              <p className="text-white/80 mt-2">
                You'll see specific numbers: how much you're losing now and how much you could make with AI.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-4">3️⃣</div>
              <h3 className="font-bold text-xl mb-2">Decide If It Makes Sense</h3>
              <p className="text-white/80 mt-2">
                No pressure, no hard sell. If the math works for you, we'll build your system. If not, we part as friends.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-xl px-12 py-6">
                SCHEDULE YOUR FREE ASSESSMENT
              </Button>
            </Link>
          </div>

          <p className="text-white/90 mb-8">Available slots this week: 7</p>

          <div className="border-t border-white/30 pt-8">
            <p className="text-lg mb-4">Or, if you're ready to see the numbers first:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-white hover:text-secondary font-semibold">
                • Calculate My Lost Revenue
              </button>
              <button className="text-white hover:text-secondary font-semibold">
                • Download Case Study: HVAC Company Added $127K/Month
              </button>
              <button className="text-white hover:text-secondary font-semibold">
                • Watch 2-Minute Demo Video
              </button>
            </div>
          </div>

          <div className="border-t border-white/30 mt-8 pt-8">
            <p className="text-white/90 mb-2">Questions? Text or call:</p>
            <p className="text-2xl font-bold mb-1">(555) 123-4567</p>
            <p className="text-white/90 mb-1">Email: hello@wrespo.ai</p>
            <p className="text-sm text-white/70 mt-4">
              We typically respond in under 2 hours.
              <br />
              (See? We practice what we preach about fast response times.)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
