import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>G</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>Greerz</span>
                <span className="text-xs text-green-200 block leading-tight">Professional Cleaning</span>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed mb-6">
              Founded with a commitment to excellence, Greerz LLC provides professional cleaning services that make your space sparkle. Your satisfaction is our priority.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-green-200 hover:bg-[var(--color-primary-light)] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-green-200 hover:bg-[var(--color-primary-light)] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-green-200 hover:bg-[var(--color-primary-light)] hover:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-green-200 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/booking" className="text-green-200 hover:text-white transition-colors text-sm">Book Now</Link></li>
              <li><Link to="/testimonials" className="text-green-200 hover:text-white transition-colors text-sm">Testimonials</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Residential Cleaning</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Commercial Cleaning</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Deep Cleaning</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Move In/Out Service</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Post-Construction</Link></li>
              <li><Link to="/services" className="text-green-200 hover:text-white transition-colors text-sm">Recurring Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-green-200 text-sm">13 Netcong HTS Apt 7<br />Netcong, New Jersey 078</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+15703506881" className="text-green-200 hover:text-white transition-colors text-sm">+1 (570) 350-6881</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:harkllc@proton.me" className="text-green-200 hover:text-white transition-colors text-sm">harkllc@proton.me</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-green-200 text-sm">Mon-Fri: 08.00 am - 05.00 pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-green-300 text-sm">
            &copy; {new Date().getFullYear()} Greerz LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
