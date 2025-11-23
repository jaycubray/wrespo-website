'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './ui/Button'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-dark">
            Wrespo<span className="text-primary">.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-dark hover:text-primary transition-colors"
            >
              ROI Calculator
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-dark hover:text-primary transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-dark hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <Link
              href="/case-studies"
              className="text-dark hover:text-primary transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-dark hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link href="/contact">
              <Button size="sm">Schedule Assessment</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('calculator')}
                className="text-dark hover:text-primary transition-colors text-left px-4"
              >
                ROI Calculator
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-dark hover:text-primary transition-colors text-left px-4"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-dark hover:text-primary transition-colors text-left px-4"
              >
                Pricing
              </button>
              <Link
                href="/case-studies"
                className="text-dark hover:text-primary transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-dark hover:text-primary transition-colors px-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Schedule Assessment
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
