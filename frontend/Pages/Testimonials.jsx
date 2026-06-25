import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'Homeowner · Rancho Santa Margarita', avatar: 'photo-1534528741775-53994a69daeb', stars: 5, text: "E Liz LLC cleaned my home today — they did a terrific job. They even moved the furniture to make sure the floors were cleaned — they really paid attention to detail. Thank you!", featured: true },
  { name: 'James R.', role: 'Business Owner · Irvine', avatar: 'photo-1472099645785-5658abf4ff4e', stars: 5, text: "Professional, punctual, and absolutely meticulous. E Liz handles our office cleaning and the results are consistently excellent. Our team loves coming into a clean workspace every morning." },
  { name: 'Emily K.', role: 'Property Manager · Mission Viejo', avatar: 'photo-1580489944761-15a19d654956', stars: 5, text: "I've tried several cleaning services and none compare to E Liz. The move-out clean was exceptional — my landlord was amazed. I got my full deposit back!", featured: true },
  { name: 'David T.', role: 'Homeowner · Laguna Hills', stars: 5, text: "Reliable, trustworthy, and excellent quality. We've been using them for monthly maintenance and couldn't be happier with the consistent results every single visit." },
  { name: 'Lisa W.', role: 'Landlord · Lake Forest', stars: 5, text: "The recurring service has been a game-changer. My tenants love it and I never have to worry about the condition of the units. E Liz is truly a premium service." },
  { name: 'Robert K.', role: 'Office Manager · Aliso Viejo', stars: 5, text: "Professional team, great communication, and fantastic results. They showed up on time and left our office spotless. Five stars all around — I recommend them to everyone." },
]

export default function Testimonials() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label justify-center mb-4">Client Stories</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>What Our Clients Say</h1>
          <p className="section-subtitle">Don't take our word for it — hear from the people we've served.</p>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: 'rgba(201,169,110,0.05)', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[{ num: '5.0', label: 'Star Rating' }, { num: '200+', label: 'Reviews' }, { num: '100%', label: 'Satisfaction' }].map(s => (
              <div key={s.label}>
                <div className="stat-num" style={{ fontSize: 40 }}>{s.num}</div>
                <div className="text-[12px] font-semibold uppercase tracking-widest mt-1" style={{ color: '#6b7280' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials grid */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className={t.featured ? 'tcard-featured' : 'tcard'} style={{ height: '100%' }}>
                  {t.featured && (
                    <div className="absolute top-0 right-0 text-[10.5px] font-bold tracking-widest uppercase px-4 py-2 rounded-bl-xl rounded-tr-[18px]" style={{ background: 'rgba(201,169,110,0.20)', color: '#c9a96e' }}>Featured</div>
                  )}
                  <div className="flex gap-1 mb-5">{Array(t.stars).fill(0).map((_, si) => <span key={si} style={{ color: '#c9a96e', fontSize: 16 }}>★</span>)}</div>
                  <p className="text-[14.5px] leading-relaxed mb-6" style={{ color: '#c9d0db' }}>"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    {t.avatar ? (
                      <img src={`https://images.unsplash.com/${t.avatar}?w=80&h=80&fit=crop&auto=format`} alt={t.name} className="w-11 h-11 rounded-full object-cover" style={{ border: '2px solid rgba(201,169,110,0.25)' }} />
                    ) : (
                      <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[16px]" style={{ background: 'rgba(201,169,110,0.15)', color: '#c9a96e', border: '2px solid rgba(201,169,110,0.25)' }}>{t.name[0]}</div>
                    )}
                    <div>
                      <div className="text-[14px] font-semibold" style={{ color: '#f2f4f8' }}>{t.name}</div>
                      {t.role && <div className="text-[12px]" style={{ color: '#6b7280' }}>{t.role}</div>}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal className="text-center mt-16">
            <p className="text-[16px] mb-6" style={{ color: '#6b7280' }}>Ready to join our growing list of happy clients?</p>
            <Link to="/booking" className="btn-primary">Book a Cleaning</Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
