import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          <div className="text-center">
            <div className="text-secondary font-bold text-2xl mb-1">100+</div>
            <div className="text-sm text-gray-400">B2C businesses automated</div>
          </div>
          <div className="text-center">
            <div className="text-secondary font-bold text-2xl mb-1">$18M+</div>
            <div className="text-sm text-gray-400">Additional revenue generated</div>
          </div>
          <div className="text-center">
            <div className="text-secondary font-bold text-2xl mb-1">4.9/5</div>
            <div className="text-sm text-gray-400">Client satisfaction (87 reviews)</div>
          </div>
          <div className="text-center">
            <div className="text-secondary font-bold text-lg mb-1">✓</div>
            <div className="text-sm text-gray-400">TCPA compliant</div>
          </div>
          <div className="text-center">
            <div className="text-secondary font-bold text-lg mb-1">✓</div>
            <div className="text-sm text-gray-400">SOC 2 Type II certified</div>
          </div>
          <div className="text-center">
            <div className="text-secondary font-bold text-lg mb-1">✓</div>
            <div className="text-sm text-gray-400">30-day guarantee</div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold mb-4">
                Wrespo<span className="text-primary">.ai</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered lead conversion systems for service businesses.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>(952) 314-3814</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>hello@wrespo.ai</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <p className="text-gray-400 text-sm mb-4">
                Serving businesses in New York, Minnesota, Colorado & beyond
              </p>
              <div className="text-sm text-gray-400">
                <p>We work with service businesses nationwide.</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2025 Wrespo AI. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/login" className="hover:text-white transition-colors">
                Client Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
