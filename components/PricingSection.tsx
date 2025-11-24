'use client'

import Card from './ui/Card'
import Button from './ui/Button'
import Link from 'next/link'

export default function PricingSection() {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const tiers = [
    {
      name: 'FOUNDATION',
      badge: null,
      tagline: 'Build Reputation & Automate Follow-Up',
      setupFee: 3500,
      monthlyFee: 697,
      features: [
        'AI review response (all platforms)',
        'Automated review generation campaigns',
        'SMS & email follow-up automation',
        'Lead capture system',
        'Monthly performance reports',
        'Email support (24hr response)',
      ],
      bestFor: 'Businesses with organic lead flow',
      results: '3-5× more reviews, 4.5+ star rating',
      cta: 'Get Started',
      variant: 'outline' as const,
      action: 'contact' as const,
    },
    {
      name: 'COMPLETE SYSTEM',
      badge: '⭐ MOST POPULAR',
      tagline: 'Full Lead Generation + AI Conversion Engine',
      setupFee: 9500,
      monthlyFee: 1997,
      features: [
        'Everything in Foundation, PLUS:',
        'Lead generation (Facebook/Google ads OR SEO)',
        'AI phone answering agent (24/7)',
        'AI email response system',
        'Appointment scheduling & qualification',
        'CRM integration (HubSpot, Jobber, etc.)',
        'Bi-weekly optimization calls',
        'Priority support (4hr response)',
      ],
      bestFor: 'Businesses ready to scale fast',
      results: '300-800% ROI in 60 days',
      increase: '$50K-$150K/month in revenue',
      cta: 'Calculate My ROI',
      variant: 'primary' as const,
      highlighted: true,
      action: 'calculator' as const,
    },
    {
      name: 'ENTERPRISE GROWTH',
      badge: '👑',
      tagline: 'Proactive Outbound + Strategic Consulting',
      setupFee: 15000,
      monthlyFee: 3997,
      features: [
        'Everything in Complete System, PLUS:',
        'AI outbound calling campaigns',
        'Appointment confirmations & reminders',
        'Customer reactivation campaigns',
        'Review generation via outbound calls',
        'Multi-location support (up to 3)',
        'Dedicated account manager',
        'Weekly strategy sessions',
        'Quarterly business consulting',
        '24/7 priority support',
      ],
      bestFor: 'Businesses doing $50K+/month',
      results: '60% fewer no-shows, 25% repeat rate',
      increase: '$100K-$300K/month in revenue',
      cta: 'Schedule Consultation',
      variant: 'secondary' as const,
      action: 'contact' as const,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-dark">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Pick the system that matches where you are now:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {tiers.map((tier, index) => (
              <div key={index} className="relative">
                {tier.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-secondary text-dark px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full flex flex-col ${
                    tier.highlighted ? 'border-2 border-primary shadow-2xl' : ''
                  }`}
                >
                  <div className="text-center mb-6">
                    {tier.badge && (
                      <div className="text-3xl mb-2">{tier.badge}</div>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-dark">{tier.name}</h3>
                    <p className="text-sm text-gray-600">{tier.tagline}</p>
                  </div>

                  <div className="text-center mb-6 pb-6 border-b">
                    <div className="text-4xl font-bold text-primary mb-2">
                      ${tier.setupFee.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">Setup fee</div>
                    <div className="text-2xl font-bold text-dark">
                      +${tier.monthlyFee.toLocaleString()}/mo
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-secondary mr-2 flex-shrink-0">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4">
                    <div className="bg-light rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        BEST FOR:
                      </p>
                      <p className="text-sm text-dark">{tier.bestFor}</p>
                    </div>

                    <div className="bg-secondary/10 rounded-lg p-4">
                      <p className="text-xs font-semibold text-gray-600 mb-1">
                        TYPICAL RESULTS:
                      </p>
                      <p className="text-sm font-semibold text-dark">{tier.results}</p>
                      {tier.increase && (
                        <p className="text-xs text-secondary font-semibold mt-1">
                          {tier.increase}
                        </p>
                      )}
                    </div>

                    {tier.action === 'contact' ? (
                      <Link href="/contact">
                        <Button
                          variant={tier.variant}
                          className="w-full"
                        >
                          {tier.cta}
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant={tier.variant}
                        className="w-full"
                        onClick={scrollToCalculator}
                      >
                        {tier.cta}
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center bg-light rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-4">
              Not sure which package fits your business?
            </p>
            <p className="text-2xl font-bold text-primary mb-4">
              Take Our 60-Second Assessment
            </p>
            <p className="text-sm text-gray-600">
              We&apos;ll recommend the right tier based on your lead volume, current systems, and revenue goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
