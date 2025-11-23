import Button from './ui/Button'
import { formatCurrency } from '@/lib/utils'

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Real results from a roofing company in Minnesota:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Before */}
            <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-700">BEFORE WRESPO</h3>
              <div className="space-y-3 text-gray-700 font-mono text-sm">
                <div>100 leads/month</div>
                <div>× 20% booking rate (human appointment setters)</div>
                <div className="border-b border-gray-400 pb-2">= 20 appointments</div>
                <div>× 30% close rate</div>
                <div className="border-b border-gray-400 pb-2">= 6 jobs closed</div>
                <div>× $10,000 average job</div>
              </div>
              <div className="mt-6 pt-6 border-t-2 border-gray-400">
                <div className="text-sm text-gray-600 mb-1">MONTHLY REVENUE:</div>
                <div className="text-4xl font-bold text-gray-700">{formatCurrency(60000)}</div>
              </div>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 border-2 border-secondary rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">AFTER WRESPO</h3>
              <div className="space-y-3 text-gray-700 font-mono text-sm">
                <div>100 leads/month (SAME ad spend)</div>
                <div>× 50% booking rate (AI appointment system)</div>
                <div className="border-b border-secondary pb-2">= 50 appointments</div>
                <div>× 30% close rate</div>
                <div className="border-b border-secondary pb-2">= 15 jobs closed</div>
                <div>× $10,000 average job</div>
              </div>
              <div className="mt-6 pt-6 border-t-2 border-secondary">
                <div className="text-sm text-gray-700 mb-1">MONTHLY REVENUE:</div>
                <div className="text-4xl font-bold text-secondary">{formatCurrency(150000)}</div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">INCREASE:</div>
                <div className="text-3xl font-bold text-secondary">+$90,000/month</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">INVESTMENT:</div>
                <div className="text-3xl font-bold text-primary">$9,500 + $1,997/mo</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">MONTH 1 ROI:</div>
                <div className="text-3xl font-bold text-secondary">852%</div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg">Get Your Custom ROI Breakdown</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
