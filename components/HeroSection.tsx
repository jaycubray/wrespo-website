'use client'

import { useState } from 'react'
import Button from './ui/Button'
import Modal from './ui/Modal'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
              STOP LOSING $50,000+ PER MONTH TO MISSED CALLS AND SLOW FOLLOW-UP
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              80% of your leads never turn into appointments because you're too busy to answer fast enough.
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Wrespo AI converts leads into booked appointments 24/7—adding $50K-$150K in monthly revenue without hiring more staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" onClick={scrollToCalculator}>
                Calculate Your Lost Revenue
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowVideo(true)}>
                Watch 2-Min Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Trusted by 100+ home service businesses across NY, MN & CO
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal isOpen={showVideo} onClose={() => setShowVideo(false)}>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">See Wrespo AI in Action</h3>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Video placeholder - Add your demo video here</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
