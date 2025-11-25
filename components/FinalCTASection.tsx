'use client'

import { useState, useEffect, useRef } from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import Modal from './ui/Modal'

export default function FinalCTASection() {
  const [showVideo, setShowVideo] = useState(false)
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

  return (
    <>
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-primary" />

      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />

      {/* Noise Overlay for Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Headline */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Limited Availability - Only 5 Spots Left This Month
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Stop Losing
              <br />
              <span className="relative inline-block">
                <span className="text-secondary">$50,000+</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8.5C50 2.5 150 2.5 298 8.5" stroke="#00D9A3" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}Per Month?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join 100+ service businesses already using Wrespo AI to convert more leads and grow revenue on autopilot.
            </p>
          </div>

          {/* Steps */}
          <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {[
              {
                step: '1',
                title: 'Book Free Assessment',
                subtitle: '15 minutes',
                description: "We'll analyze your current systems and show you exactly where you're losing money."
              },
              {
                step: '2',
                title: 'Get Custom ROI Breakdown',
                subtitle: null,
                description: "You'll see specific numbers: how much you're losing now and how much you could make with AI."
              },
              {
                step: '3',
                title: 'Decide If It Makes Sense',
                subtitle: null,
                description: "No pressure, no hard sell. If the math works, we'll build your system. If not, we part as friends."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-dark font-bold text-sm shadow-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-1 mt-2">{item.title}</h3>
                {item.subtitle && <p className="text-secondary text-sm mb-2">({item.subtitle})</p>}
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <div className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/contact">
              <Button size="lg" variant="secondary" pulse className="text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 shadow-2xl">
                SCHEDULE YOUR FREE ASSESSMENT
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <p className="text-white/70 text-sm mt-4">
              Takes 2 minutes to book. No credit card required.
            </p>
          </div>

          {/* Secondary Options */}
          <div className={`border-t border-white/20 pt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/80 mb-4">Or, if you&apos;re ready to see the numbers first:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToCalculator}
                className="group inline-flex items-center gap-2 text-white hover:text-secondary font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Calculate My Lost Revenue
              </button>
              <span className="hidden sm:block text-white/30">|</span>
              <Link href="/case-studies/peterson-hvac">
                <span className="group inline-flex items-center gap-2 text-white hover:text-secondary font-semibold transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download HVAC Case Study
                </span>
              </Link>
              <span className="hidden sm:block text-white/30">|</span>
              <button
                onClick={() => setShowVideo(true)}
                className="group inline-flex items-center gap-2 text-white hover:text-secondary font-semibold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch 2-Min Demo
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`border-t border-white/20 mt-10 pt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/80 mb-3">Questions? Talk to a real human:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:9523143814" className="flex items-center gap-2 text-xl font-bold hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (952) 314-3814
              </a>
              <span className="hidden sm:block text-white/30">|</span>
              <a href="mailto:hello@wrespo.ai" className="flex items-center gap-2 text-lg hover:text-secondary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@wrespo.ai
              </a>
            </div>
            <p className="text-sm text-white/60 mt-4 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              We typically respond in under 2 hours (we practice what we preach!)
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Video Modal */}
    <Modal isOpen={showVideo} onClose={() => setShowVideo(false)}>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">See Wrespo AI in Action</h3>
        <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
          <p className="text-gray-500">Video placeholder - Add your demo video here</p>
        </div>
      </div>
    </Modal>
    </>
  )
}
