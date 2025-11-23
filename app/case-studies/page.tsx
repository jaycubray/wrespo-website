import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export const metadata = {
  title: 'Case Studies - Wrespo.ai',
  description: 'Real results from real businesses. See how our clients increased revenue with AI.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: 'peterson-hvac',
      company: 'Peterson HVAC',
      industry: 'HVAC',
      location: 'Denver, CO',
      mainStat: '+$127,000',
      statLabel: 'additional monthly revenue',
      metrics: [
        '43% increase in bookings',
        '18→47 appointments/month',
        'Same ad spend',
      ],
      image: '🏭',
    },
    {
      slug: 'summit-roofing',
      company: 'Summit Roofing',
      industry: 'Roofing',
      location: 'Minneapolis, MN',
      mainStat: '+$89,000',
      statLabel: 'after-hours revenue captured',
      metrics: [
        '62% fewer no-shows',
        '24/7 AI phone agent',
        'Zero missed calls',
      ],
      image: '🏠',
    },
    {
      slug: 'elite-landscaping',
      company: 'Elite Landscaping',
      industry: 'Landscaping',
      location: 'Syracuse, NY',
      mainStat: '+$18,000',
      statLabel: 'monthly savings',
      metrics: [
        '38% better booking rate',
        'Eliminated 3 appointment setters',
        'Better results with AI',
      ],
      image: '🌳',
    },
  ]

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-dark">
              Client Success Stories
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12">
              Real results from real businesses. See how our clients are adding $50K-$150K in monthly revenue.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card key={study.slug} hover className="flex flex-col">
                  <div className="text-6xl text-center mb-4">{study.image}</div>

                  <h2 className="text-2xl font-bold mb-2 text-dark">
                    {study.company}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {study.industry} • {study.location}
                  </p>

                  <div className="bg-secondary/10 rounded-lg p-4 mb-6">
                    <div className="text-4xl font-bold text-secondary mb-1">
                      {study.mainStat}
                    </div>
                    <div className="text-sm text-gray-600">{study.statLabel}</div>
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {study.metrics.map((metric, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        <span className="text-sm text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.slug}`}>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-dark">
                Want Similar Results?
              </h3>
              <p className="text-gray-600 mb-6">
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
        </div>
      </section>
    </div>
  )
}
