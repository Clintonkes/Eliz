import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="hidden lg:block bg-navy-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+19496325541" className="flex items-center gap-1.5 text-gray-400 hover:text-brand-500 transition-colors">
              <svg className="w-4 h-4 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              949-632-5541
            </a>
            <span className="text-gray-700">|</span>
            <span className="text-gray-500 text-xs">Mon-Fri: 08.00 am - 05.00 pm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-xs">Rancho Santa Margarita, CA</span>
          </div>
        </div>
      </div>

      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100/80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 lg:h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 bg-navy-700 flex items-center justify-center transition-colors group-hover:bg-brand-500">
                  <span className="text-brand-500 font-bold text-lg font-heading transition-colors group-hover:text-navy-900">E</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-navy-700 block leading-tight font-heading">E Liz LLC</span>
                  <span className="text-[10px] text-gray-400 block leading-tight tracking-widest uppercase">Premium Cleaning</span>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    location.pathname === link.to
                      ? 'text-brand-500'
                      : 'text-gray-600 hover:text-navy-700'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.to && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-500 rounded-full" />
                  )}
                </Link>
              ))}
              <Link to="/booking" className="text-sm font-medium text-white bg-navy-700 px-6 py-2.5 hover:bg-brand-500 hover:text-navy-900 transition-all duration-300">
                Get a Quote
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-navy-700 p-2">
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
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded ${
                    location.pathname === link.to
                      ? 'text-brand-500 bg-brand-50'
                      : 'text-gray-600 hover:text-navy-700 hover:bg-brand-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setIsOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-center text-white bg-navy-700 mt-2 hover:bg-brand-500 hover:text-navy-900 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
