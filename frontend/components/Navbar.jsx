import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,8,16,0.97)' : 'rgba(6,8,16,0.60)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-[9px]"
              style={{ background: 'linear-gradient(135deg,#c9a96e,#b89450)' }}
            >
              <span className="font-heading font-black text-[18px]" style={{ color: '#060810' }}>E</span>
            </div>
            <div>
              <div className="font-heading font-bold text-[16.5px] leading-tight" style={{ color: '#f1f1f1' }}>E Liz LLC</div>
              <div className="text-[9.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#c9a96e' }}>Premium Cleaning</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[13.5px] font-medium transition-colors duration-200"
                style={{ color: location.pathname === link.to ? '#c9a96e' : '#8d9db5' }}
                onMouseEnter={e => { if (location.pathname !== link.to) e.target.style.color = '#f1f1f1' }}
                onMouseLeave={e => { if (location.pathname !== link.to) e.target.style.color = '#8d9db5' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+19496325541"
              className="text-[13px] font-semibold transition-colors"
              style={{ color: '#c9a96e' }}
            >
              949-632-5541
            </a>
            <Link to="/booking" className="btn-primary text-[13px] px-5 py-2.5">Book Now</Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#c9d0db' }}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 py-4 space-y-1"
          style={{ background: 'rgba(6,8,16,0.98)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block px-3 py-3 rounded-lg text-[15px] font-medium transition-colors"
              style={{
                color: location.pathname === link.to ? '#c9a96e' : '#8d9db5',
                background: location.pathname === link.to ? 'rgba(201,169,110,0.08)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+19496325541"
            className="block px-3 py-3 text-[15px] font-semibold"
            style={{ color: '#c9a96e' }}
          >
            ☎ 949-632-5541
          </a>
          <Link
            to="/booking"
            className="btn-primary block text-center mt-2 w-full"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}
