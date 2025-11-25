'use client'

import { useEffect, useRef, useState } from 'react'
import Button from './ui/Button'
import Link from 'next/link'

export default function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
      results: '3-5x more reviews, 4.5+ star rating',
      cta: 'Get Started',
      variant: 'outline' as const,
      action: 'contact' as const,
    },
    {
      name: 'COMPLETE SYSTEM',
      badge: 'MOST POPULAR',
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
      badge: 'PREMIUM',
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
    <section ref={sectionRef} id="pricing" className="py-24 bg-gradient-to-b from-white to-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Investment That Pays For Itself
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
              Choose Your Growth Path
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pick the system that matches where you are now. All plans include our 90-day performance guarantee.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Highlighted Card Glow Effect */}
                {tier.highlighted && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-lg opacity-30 animate-gradient" />
                )}

                <div
                  className={`relative h-full flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-white shadow-2xl border-2 border-primary/20 scale-105 lg:scale-110 z-10'
                      : 'bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-primary/20'
                  }`}
                >
                  {/* Badge */}
                  {tier.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {tier.badge}
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8 pt-2">
                    <h3 className="text-xl font-bold mb-2 text-dark tracking-wide">{tier.name}</h3>
                    <p className="text-sm text-gray-500">{tier.tagline}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8 pb-8 border-b border-gray-100">
                    <div className="flex items-baseline justify-center gap-1 mb-2">
                      <span className="text-xl text-gray-500">$</span>
                      <span className={`text-5xl font-bold ${tier.highlighted ? 'gradient-text' : 'text-dark'}`}>
                        {tier.setupFee.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">One-time setup</p>
                    <div className="inline-flex items-center gap-1 bg-gray-50 rounded-full px-4 py-2">
                      <span className="text-lg font-bold text-dark">
                        +${tier.monthlyFee.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500">/month</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          tier.highlighted ? 'bg-secondary/20' : 'bg-gray-100'
                        }`}>
                          <svg className={`w-3 h-3 ${tier.highlighted ? 'text-secondary' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Results Cards */}
                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Best For</p>
                      <p className="text-sm font-medium text-dark">{tier.bestFor}</p>
                    </div>

                    <div className={`rounded-xl p-4 ${tier.highlighted ? 'bg-gradient-to-br from-secondary/10 to-primary/5' : 'bg-secondary/5'}`}>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Typical Results</p>
                      <p className="text-sm font-bold text-dark">{tier.results}</p>
                      {tier.increase && (
                        <p className="text-xs font-semibold text-secondary mt-1">{tier.increase}</p>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  {tier.action === 'contact' ? (
                    <Link href="/contact" className="block">
                      <Button variant={tier.variant} className="w-full" pulse={tier.highlighted}>
                        {tier.cta}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant={tier.variant}
                      className="w-full"
                      onClick={scrollToCalculator}
                      pulse={tier.highlighted}
                    >
                      {tier.cta}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-3">
                Not sure which package fits your business?
              </p>
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                Take Our 60-Second Assessment
              </h3>
              <p className="text-gray-600 mb-6">
                We&apos;ll recommend the right tier based on your lead volume, current systems, and revenue goals.
              </p>
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get Personalized Recommendation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
