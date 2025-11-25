'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Button from './ui/Button'
import { cn } from '@/lib/utils'

const industries = [
  { name: 'Home Services', href: '/industries/home-services' },
  { name: 'Health & Wellness', href: '/industries/health-wellness' },
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'Property Services', href: '/industries/property-services' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash navigation when landing on homepage with hash
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 100)
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)

    // If we're not on the homepage, navigate to homepage with hash
    if (pathname !== '/') {
      router.push(`/#${id}`)
      return
    }

    // If we're on homepage, scroll to section
    const element = document.getElementById(id)
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-dark group flex items-center gap-1">
            <span className="relative">
              Wrespo
              <span className="gradient-text">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('calculator')}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              ROI Calculator
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              Pricing
            </button>
            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5 flex items-center gap-1"
              >
                Industries
                <svg
                  className={cn("w-4 h-4 transition-transform", isIndustriesOpen && "rotate-180")}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200",
                  isIndustriesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                )}
              >
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/case-studies"
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              About
            </Link>
            <div className="pl-4">
              <Link href="/contact">
                <Button size="sm">
                  Schedule Assessment
                  <svg className="w-4 h-4 ml-1.5 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col items-center justify-center">
              <span
                className={cn(
                  'w-5 h-0.5 bg-dark rounded-full transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                )}
              />
              <span
                className={cn(
                  'w-5 h-0.5 bg-dark rounded-full transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={cn(
                  'w-5 h-0.5 bg-dark rounded-full transition-all duration-300',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-out',
            isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <nav className="flex flex-col py-4 border-t border-gray-100 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors text-left px-4 py-3 rounded-lg mx-2"
            >
              ROI Calculator
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors text-left px-4 py-3 rounded-lg mx-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors text-left px-4 py-3 rounded-lg mx-2"
            >
              Pricing
            </button>
            {/* Industries Section */}
            <div className="px-4 py-2 mx-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Industries</p>
              <div className="space-y-1 pl-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors px-3 py-2 rounded-lg text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/case-studies"
              className="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors px-4 py-3 rounded-lg mx-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors px-4 py-3 rounded-lg mx-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-4 pt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="sm" className="w-full">
                  Schedule Assessment
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
