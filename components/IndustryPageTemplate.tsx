'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Button from './ui/Button'
import Card from './ui/Card'
import type { IndustryData } from '@/lib/industries/data'

interface Props {
  industry: IndustryData
}

export default function IndustryPageTemplate({ industry }: Props) {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />

        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-alert/10 border border-alert/20 text-alert px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-alert"></span>
              </span>
              {industry.name} businesses lose {industry.missedCallsStat} of leads to missed calls
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-dark mb-6 leading-[1.1] tracking-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {industry.heroHeadline.split('/').map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="gradient-text">/</span>}
                  {part.includes('$') ? (
                    <span className="gradient-text">{part}</span>
                  ) : (
                    part
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {industry.heroSubheadline}
            </p>

            {/* Value Proposition */}
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {industry.heroValueProp}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/contact">
                <Button size="lg" pulse>
                  Get Your Free ROI Analysis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link href="/#calculator">
                <Button variant="outline" size="lg">
                  Calculate Your Lost Revenue
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary">
                      {['M', 'S', 'J', 'A'][i - 1]}
                    </div>
                  ))}
                </div>
                <span>100+ {industry.name} businesses</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1">4.9/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>90-day guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Problem Section */}
      <section
        ref={setRef('problems')}
        id="problems"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['problems'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-alert/10 text-alert px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                The Hidden Revenue Leak
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                Why {industry.name} Businesses Lose Leads
              </h2>
              <p className="text-xl text-gray-600">
                Each missed call costs you {industry.lostRevenueStat} in lost revenue
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industry.problems.map((problem, index) => (
                <div
                  key={index}
                  className={`bg-light rounded-xl p-6 border-l-4 border-alert transition-all duration-700 ${visibleSections['problems'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{problem.emoji}</span>
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-2">{problem.title}</h3>
                      <p className="text-gray-600">{problem.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-12 text-center p-8 bg-gradient-to-r from-alert/10 to-alert/5 rounded-2xl border border-alert/20 transition-all duration-700 delay-500 ${visibleSections['problems'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-dark font-semibold">
                The result? You&apos;re working harder than ever while <span className="text-alert">leaving money on the table every single day.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={setRef('solutions')}
        id="solutions"
        className="py-20 bg-gradient-to-b from-light to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                The Wrespo Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                AI That Converts Leads Into Revenue
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We don&apos;t just give you a chatbot. We install a complete lead-to-revenue system purpose-built for {industry.name.toLowerCase()}.
              </p>
            </div>

            <div className="space-y-6">
              {industry.solutions.map((solution, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${visibleSections['solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/25">
                      {solution.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-bold text-dark mb-2">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < industry.solutions.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary to-primary/20" />
                  )}
                </div>
              ))}
            </div>

            <div className={`mt-12 text-center transition-all duration-700 delay-700 ${visibleSections['solutions'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link href="/contact">
                <Button size="lg">
                  See How It Works For Your Business
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={setRef('stats')}
        id="stats"
        className="py-16 bg-gradient-to-r from-primary via-blue-600 to-primary"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {industry.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${visibleSections['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={setRef('testimonials')}
        id="testimonials"
        className="py-24 bg-gradient-to-b from-white to-light relative overflow-hidden"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 ${visibleSections['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Real Results from {industry.name}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                See What Business Owners Say
              </h2>
              <p className="text-xl text-gray-600">
                Join 100+ {industry.name.toLowerCase()} businesses already growing with Wrespo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {industry.testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  hover
                  gradient
                  className={`flex flex-col h-full transition-all duration-700 ${visibleSections['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` } as React.CSSProperties}
                >
                  {/* Result Badge */}
                  <div className="absolute -top-3 -right-3 bg-secondary text-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {testimonial.result}
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <svg className="w-8 h-8 text-primary/20 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-lg font-bold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className={`text-center transition-all duration-700 delay-500 ${visibleSections['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                View All Success Stories
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={setRef('faq')}
        id="faq"
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-700 ${visibleSections['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything {industry.name.toLowerCase()} businesses ask before getting started
              </p>
            </div>

            <div className="space-y-4">
              {industry.faq.map((item, index) => (
                <details
                  key={index}
                  className={`group bg-light rounded-xl transition-all duration-700 ${visibleSections['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-dark hover:text-primary transition-colors">
                    {item.question}
                    <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-primary">
        {/* Animated Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Urgency */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Limited: 5 spots available this month
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Stop Losing {industry.name} Revenue?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 100+ {industry.name.toLowerCase()} businesses that stopped leaving money on the table. Get your custom ROI analysis in 15 minutes.
            </p>

            {/* 3-Step Process */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { num: 1, title: 'Book Free Assessment', desc: '15-minute call to understand your business' },
                { num: 2, title: 'Get Custom ROI Analysis', desc: 'See exactly how much revenue you\'re losing' },
                { num: 3, title: 'Decide If It Makes Sense', desc: 'No pressure. No obligation.' },
              ].map((step) => (
                <div key={step.num} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-10 h-10 rounded-full bg-secondary text-dark font-bold flex items-center justify-center mx-auto mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/contact">
              <Button size="lg" variant="secondary" pulse className="text-lg px-12">
                SCHEDULE YOUR FREE ASSESSMENT
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/70 mb-4">Questions? Talk to a real human:</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-white hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 123-4567
                </a>
                <a href="mailto:hello@wrespo.ai" className="flex items-center gap-2 text-white hover:text-secondary transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@wrespo.ai
                </a>
              </div>
              <p className="text-sm text-white/50 mt-4">Average response time: under 2 hours</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
