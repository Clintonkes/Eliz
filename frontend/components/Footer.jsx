import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#03040c', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-0 lg:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-[9px] flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#c9a96e,#b89450)' }}
              >
                <span className="font-heading font-black text-[18px]" style={{ color: '#060810' }}>E</span>
              </div>
              <div>
                <div className="font-heading font-bold text-[16px] leading-tight" style={{ color: '#f1f1f1' }}>E Liz LLC</div>
                <div className="text-[9.5px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#c9a96e' }}>Premium Cleaning</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-[260px]" style={{ color: '#374151' }}>
              Exceptional cleaning for homes and businesses throughout Rancho Santa Margarita and Orange County.
            </p>
            <div className="flex gap-2">
              {['M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
                'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
              ].map((d, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-[34px] h-[34px] rounded-[7px] inline-flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', color: '#4b5563' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.15)'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; e.currentTarget.style.color = '#c9a96e' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#4b5563' }}
                >
                  <svg className="w-[13px] h-[13px]" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-5" style={{ color: '#f1f1f1' }}>Quick Links</h4>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/booking', 'Book Now'], ['/testimonials', 'Testimonials'], ['/faq', 'FAQ']].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[13.5px] transition-colors duration-200"
                    style={{ color: '#374151' }}
                    onMouseEnter={e => e.target.style.color = '#c9a96e'}
                    onMouseLeave={e => e.target.style.color = '#374151'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-5" style={{ color: '#f1f1f1' }}>Services</h4>
            <ul className="space-y-3">
              {['Residential Cleaning', 'Commercial Cleaning', 'Deep Cleaning', 'Move In / Out', 'Post-Construction', 'Recurring Maintenance'].map(s => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-[13.5px] transition-colors duration-200"
                    style={{ color: '#374151' }}
                    onMouseEnter={e => e.target.style.color = '#c9a96e'}
                    onMouseLeave={e => e.target.style.color = '#374151'}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase mb-5" style={{ color: '#f1f1f1' }}>Contact</h4>
            <div className="space-y-4">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />,
                  icon2: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                  content: <span>61 VIA Amistosa Apt C<br />Rancho Santa Margarita, CA 92688</span>
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  content: <a href="tel:+19496325541" className="hover:text-[#c9a96e] transition-colors" style={{ color: '#374151' }}>949-632-5541</a>
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  content: <span>Mon–Fri: 8:00 am – 5:00 pm</span>
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-[30px] h-[30px] rounded-[6px] flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(201,169,110,0.10)' }}
                  >
                    <svg className="w-[13px] h-[13px]" fill="none" viewBox="0 0 24 24" stroke="#c9a96e">
                      {item.icon}
                      {item.icon2}
                    </svg>
                  </div>
                  <div className="text-[13.5px] leading-relaxed" style={{ color: '#374151' }}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px]" style={{ color: '#1f2937' }}>&copy; {new Date().getFullYear()} E Liz LLC. All rights reserved.</p>
          <p className="text-[11.5px]" style={{ color: '#111827' }}>Premium Cleaning Services · Rancho Santa Margarita, CA</p>
        </div>
      </div>
    </footer>
  )
}
