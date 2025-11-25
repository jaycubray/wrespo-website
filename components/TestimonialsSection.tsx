'use client'

import { useEffect, useRef, useState } from 'react'
import Card from './ui/Card'
import Link from 'next/link'

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      rating: 5,
      quote: "We went from 18 appointments per month to 47 appointments - same leads, same ad spend. The AI just converts better than humans. That's an extra $127,000 in monthly revenue we weren't capturing before.",
      name: 'Mike Peterson',
      company: 'Peterson HVAC',
      location: 'Denver, CO',
      results: '43% increase in bookings | $127K additional monthly revenue',
      avatar: 'MP',
      increase: '+161%',
    },
    {
      rating: 5,
      quote: "The after-hours AI phone agent is a game-changer. We were literally sleeping through $89,000 in revenue every month. Now those calls get answered, booked, and closed. My only regret is not doing this sooner.",
      name: 'Tom Davila',
      company: 'Summit Roofing',
      location: 'Minneapolis, MN',
      results: 'Captured $89K in after-hours revenue | 62% fewer no-shows',
      avatar: 'TD',
      increase: '+$89K/mo',
    },
    {
      rating: 5,
      quote: "Before Wrespo, we had 3 appointment setters making $7K/month each plus commission. Now we have zero appointment setters, better results, and an extra $18K/month in profit. Plus I don't have to manage that team anymore.",
      name: 'Sarah Chen',
      company: 'Elite Landscaping',
      location: 'Syracuse, NY',
      results: '$18K/month savings | 38% better booking rate than human setters',
      avatar: 'SC',
      increase: '+38%',
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-light to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Trusted by 100+ Service Businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
              Real Results From Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how service businesses like yours are adding $50K-$150K in monthly revenue with Wrespo AI
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card hover gradient className="flex flex-col h-full">
                  {/* Result Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-br from-secondary to-emerald-400 text-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {testimonial.increase}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative flex-1 mb-6">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="text-gray-700 leading-relaxed pl-4">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-dark">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.company} &middot; {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 bg-secondary/10 rounded-lg px-3 py-2">
                      <p className="text-xs text-secondary font-semibold">
                        {testimonial.results}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Social Proof Bar */}
          <div className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">4.9/5</p>
                <p className="text-sm text-gray-500">Client Rating</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">94%</p>
                <p className="text-sm text-gray-500">12+ Month Retention</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">$18M+</p>
                <p className="text-sm text-gray-500">Revenue Generated</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">30 Days</p>
                <p className="text-sm text-gray-500">Avg. Time to ROI</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`text-center mt-10 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg group"
            >
              View All Success Stories
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
