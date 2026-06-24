import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden lg:block bg-[var(--color-primary-dark)] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+15703506881" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
              <svg className="w-4 h-4 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1 (570) 350-6881
            </a>
            <a href="mailto:harkllc@proton.me" className="flex items-center gap-1.5 hover:text-green-300 transition-colors">
              <svg className="w-4 h-4 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              harkllc@proton.me
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-200 text-xs">Mon-Fri: 08.00 am - 05.00 pm</span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>G</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900 block leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Greerz</span>
                  <span className="text-xs text-gray-500 block leading-tight">Professional Cleaning</span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Services</Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Testimonials</Link>
              <Link to="/faq" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">FAQ</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[var(--color-primary)] font-medium transition-colors">Contact</Link>
              <Link to="/booking" className="btn-primary text-sm py-2.5 px-6">Get a Quote</Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-gray-700 hover:text-[var(--color-primary)] font-medium rounded-lg hover:bg-green-50">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-gray-700 hover:text-[var(--color-primary)] font-medium rounded-lg hover:bg-green-50">About</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-gray-700 hover:text-[var(--color-primary)] font-medium rounded-lg hover:bg-green-50">Services</Link>
              <Link to="/testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-gray-700 hover:text-[var(--color-primary)] font-medium rounded-lg hover:bg-green-50">Testimonials</Link>
              <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-gray-700 hover:text-[var(--color-primary)] font-medium rounded-lg hover:bg-green-50">FAQ</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-gray-700 hover:text-[var(--color-primary)] font-medium rounded-lg hover:bg-green-50">Contact</Link>
              <Link to="/booking" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 btn-primary text-center mt-2">Get a Quote</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
