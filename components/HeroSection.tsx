'use client'

import { useState, useEffect } from 'react'
import Button from './ui/Button'
import Modal from './ui/Modal'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5 animate-gradient" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Urgency Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-alert/10 border border-alert/20 text-alert px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-alert opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-alert"></span>
              </span>
              Limited: Only accepting 5 new clients this month
            </div>

            {/* Main Headline */}
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-black text-dark mb-6 leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              STOP LOSING{' '}
              <span className="relative">
                <span className="gradient-text">$50,000+</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8.5C50 2.5 150 2.5 298 8.5" stroke="url(#underline-gradient)" strokeWidth="4" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#0066FF"/>
                      <stop offset="100%" stopColor="#00D9A3"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}PER MONTH TO MISSED CALLS
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl md:text-2xl text-gray-700 mb-4 font-medium transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              80% of your leads never turn into appointments because you&apos;re too busy to answer fast enough.
            </p>

            {/* Value Prop */}
            <p
              className={`text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Wrespo AI converts leads into booked appointments 24/7 &mdash; adding{' '}
              <span className="font-bold text-secondary">$50K-$150K</span> in monthly revenue without hiring more staff.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <Button size="lg" onClick={scrollToCalculator} pulse>
                Calculate Your Lost Revenue
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowVideo(true)}>
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch 2-Min Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div
              className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-sm text-gray-500 mb-6">Trusted by 100+ home service businesses</p>

              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {/* Trust Stats */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {['M', 'T', 'S', 'J', 'K'][i-1]}
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">4.9/5 from 87 reviews</p>
                  </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-gray-200" />

                {/* Revenue Generated */}
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">$18M+</p>
                  <p className="text-xs text-gray-500">Revenue Generated</p>
                </div>

                <div className="hidden md:block w-px h-10 bg-gray-200" />

                {/* Response Time */}
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">&lt;30s</p>
                  <p className="text-xs text-gray-500">Avg Response Time</p>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={scrollToCalculator}
                className="inline-flex flex-col items-center text-gray-400 hover:text-primary transition-colors"
                aria-label="Scroll to calculator"
              >
                <span className="text-xs mb-2">See how much you could save</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
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
