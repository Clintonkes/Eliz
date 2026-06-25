import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

const SERVICES = [
  { cls: 'bento-1', img: 'photo-1513694203232-719a280e022f', label: 'Residential', title: 'Home Cleaning', desc: 'Meticulous, detail-oriented cleaning for every room in your home.' },
  { cls: 'bento-2', img: 'photo-1497366216548-37526070297c', label: 'Commercial', title: 'Office & Commercial', desc: 'Professional environments stay pristine and productive.' },
  { cls: 'bento-3', img: 'photo-1585771724684-38269d6639fd', label: 'Deep Clean', title: 'Deep Cleaning', desc: 'Every corner addressed. Every surface restored.' },
  { cls: 'bento-4', img: 'photo-1560185007-cde436f6a4d0', label: 'Move In/Out', title: 'Move In / Out', desc: 'Leave the old place spotless. Arrive to a fresh one.' },
  { cls: 'bento-5', img: 'photo-1504307651254-35680f356dfd', label: 'Post-Construction', title: 'Post-Construction', desc: 'Construction dust and debris cleared efficiently.' },
  { cls: 'bento-6', img: 'photo-1615529182904-14819c35db37', label: 'Recurring', title: 'Recurring Maintenance', desc: 'Scheduled weekly, bi-weekly, or monthly service.' },
]

const STATS = [
  { num: '500+', label: 'Happy Clients' },
  { num: '8+', label: 'Years Experience' },
  { num: '100%', label: 'Satisfaction Rate' },
  { num: '5★', label: 'Average Rating' },
]

const WHY = [
  { n: '01', title: 'Fully Insured & Bonded', desc: 'Complete peace of mind. Our team is fully insured and bonded on every job.' },
  { n: '02', title: 'Eco-Friendly Products', desc: 'We use green-certified, non-toxic cleaning agents safe for kids and pets.' },
  { n: '03', title: 'Trained Professionals', desc: 'Every cleaner is background-checked, trained, and held to strict quality standards.' },
  { n: '04', title: 'Flexible Scheduling', desc: 'Early mornings, evenings, or weekends — we work around your schedule.' },
  { n: '05', title: '100% Satisfaction Guarantee', desc: "Not happy? We'll re-clean at no cost. Your satisfaction is our commitment." },
  { n: '06', title: 'Transparent Pricing', desc: 'No hidden fees. No surprise charges. Just clear, fair pricing every time.' },
]

const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'Homeowner · Rancho Santa Margarita', avatar: 'photo-1534528741775-53994a69daeb', stars: 5, text: "E Liz transformed my home. The deep clean was incredibly thorough — they got areas I never even thought about. I now have them come every two weeks.", featured: false },
  { name: 'James R.', role: 'Business Owner · Irvine', avatar: 'photo-1472099645785-5658abf4ff4e', stars: 5, text: "Professional, punctual, and absolutely meticulous. E Liz handles our office cleaning and the results are consistently excellent. Our team loves coming into a clean workspace.", featured: true },
  { name: 'Emily K.', role: 'Property Manager · Mission Viejo', avatar: 'photo-1580489944761-15a19d654956', stars: 5, text: "I've tried several cleaning services and none compare to E Liz. The move-out clean was exceptional — my landlord was amazed. I got my full deposit back!", featured: false },
]

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: '#060810' }}>
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1556784824-073f052be5be?w=1600&auto=format&fit=crop&q=70" alt="" className="w-full h-full object-cover" style={{ opacity: 0.07 }} />
        </div>
        <div className="orb" style={{ width: 600, height: 600, top: '-120px', left: '-150px', background: 'rgba(201,169,110,0.12)', animationDuration: '14s' }} />
        <div className="orb" style={{ width: 440, height: 440, bottom: '-80px', right: '10%', background: 'rgba(100,120,200,0.07)', animationDuration: '10s', animationDelay: '-5s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label mb-6">Orange County's Finest</div>
              <h1 className="section-title mb-7 max-w-[560px]" style={{ fontSize: 'clamp(40px, 5vw, 70px)' }}>
                Cleaning That Feels Like{' '}
                <span className="gold-text">Luxury</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-[480px]" style={{ color: '#8d9db5' }}>
                E Liz LLC delivers premium residential and commercial cleaning across Rancho Santa Margarita and Orange County — with the attention to detail your space deserves.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/booking" className="btn-primary">Book a Cleaning</Link>
                <Link to="/services" className="btn-secondary">Explore Services</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Fully Insured & Bonded', 'Eco-Friendly Products', '100% Satisfaction Guarantee'].map(text => (
                  <div key={text} className="trust-chip">
                    <div className="trust-chip-icon"><span className="text-[11px] font-bold" style={{ color: '#060810' }}>✓</span></div>
                    <span className="text-[12.5px] font-medium" style={{ color: '#c9d0db' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-[480px] h-[540px] rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.6)' }}>
                <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=960&auto=format&fit=crop&q=80" alt="Premium cleaning" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(6,8,16,0.5))' }} />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg,#c9a96e,#b89450)' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#060810" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold" style={{ color: '#f2f4f8' }}>5.0 Star Rating</div>
                    <div className="text-[12px]" style={{ color: '#6b7280' }}>Based on 200+ reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES BENTO ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="section-label justify-center mb-4">What We Offer</div>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Every space is unique. Every clean is customized.</p>
          </ScrollReveal>
          <div className="bento-grid">
            {SERVICES.map(svc => (
              <ScrollReveal key={svc.label} className={`scard ${svc.cls}`}>
                <img src={`https://images.unsplash.com/${svc.img}?w=800&auto=format&fit=crop&q=70`} alt={svc.title} />
                <div className="scard-overlay">
                  <div className="text-[10.5px] font-bold tracking-widest uppercase mb-2" style={{ color: '#c9a96e' }}>{svc.label}</div>
                  <h3 className="font-heading font-bold text-[22px] leading-tight mb-2" style={{ color: '#f2f4f8' }}>{svc.title}</h3>
                  <p className="text-[13.5px]" style={{ color: '#8d9db5' }}>{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT SPLIT ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden" style={{ height: 500, boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
                  <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=900&auto=format&fit=crop&q=80" alt="E Liz team" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-4 glass-warm rounded-2xl px-6 py-4">
                  <div className="stat-num" style={{ fontSize: 42 }}>8+</div>
                  <div className="text-[12.5px] font-medium" style={{ color: '#c9a96e' }}>Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="section-label mb-5">Our Story</div>
              <h2 className="section-title mb-6">More Than a Cleaning Service</h2>
              <p className="text-[16px] leading-relaxed mb-6" style={{ color: '#8d9db5' }}>
                E Liz LLC was founded on a simple belief: everyone deserves to come home — or go to work — in a space that is truly clean. We bring that standard to every job in Rancho Santa Margarita and across Orange County.
              </p>
              <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#6b7280' }}>
                Our team of trained, background-checked professionals uses eco-friendly products and proven techniques to deliver results that speak for themselves.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {['Background-checked team', 'Eco-friendly products', 'Fully insured & bonded', '100% satisfaction guarantee'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="gold-check">✓</div>
                    <span className="text-[13.5px]" style={{ color: '#c9d0db' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">Learn More About Us</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'rgba(201,169,110,0.05)', borderTop: '1px solid rgba(201,169,110,0.10)', borderBottom: '1px solid rgba(201,169,110,0.10)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {STATS.map((s, i) => (
              <ScrollReveal key={s.label} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="stat-num">{s.num}</div>
                <div className="text-[13px] font-semibold tracking-wide mt-2 uppercase" style={{ color: '#6b7280' }}>{s.label}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal animation="scroll-animate-left">
              <div className="section-label mb-5">Why E Liz</div>
              <h2 className="section-title mb-6">The Standard You Deserve</h2>
              <p className="text-[16px] leading-relaxed mb-8" style={{ color: '#8d9db5' }}>
                We go beyond surface-level cleaning. Our commitment is to deliver a level of quality that sets us apart from every other service in Orange County.
              </p>
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 340, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=75" alt="Why choose E Liz" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {WHY.map((item, i) => (
                <ScrollReveal key={item.n} style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex gap-4 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="num-badge">{item.n}</div>
                    <div>
                      <div className="font-heading font-bold text-[16px] mb-1" style={{ color: '#f2f4f8' }}>{item.title}</div>
                      <div className="text-[13.5px] leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="section-label justify-center mb-4">Client Stories</div>
            <h2 className="section-title">What Our Clients Say</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.name} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className={t.featured ? 'tcard-featured' : 'tcard'} style={{ height: '100%' }}>
                  {t.featured && (
                    <div className="absolute top-0 right-0 text-[10.5px] font-bold tracking-widest uppercase px-4 py-2 rounded-bl-xl rounded-tr-[18px]" style={{ background: 'rgba(201,169,110,0.20)', color: '#c9a96e' }}>Featured</div>
                  )}
                  <div className="flex gap-1 mb-5">{Array(t.stars).fill(0).map((_, si) => <span key={si} style={{ color: '#c9a96e', fontSize: 16 }}>★</span>)}</div>
                  <p className="text-[14.5px] leading-relaxed mb-6" style={{ color: '#c9d0db' }}>"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <img src={`https://images.unsplash.com/${t.avatar}?w=80&h=80&fit=crop&auto=format`} alt={t.name} className="w-11 h-11 rounded-full object-cover" style={{ border: '2px solid rgba(201,169,110,0.25)' }} />
                    <div>
                      <div className="text-[14px] font-semibold" style={{ color: '#f2f4f8' }}>{t.name}</div>
                      <div className="text-[12px]" style={{ color: '#6b7280' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-secondary">Read More Reviews</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
        <div className="orb" style={{ width: 500, height: 500, top: '-100px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(201,169,110,0.09)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="section-label justify-center mb-5">Get Started Today</div>
            <h2 className="section-title mb-5">Ready for a Spotless Space?</h2>
            <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#6b7280' }}>
              Book your first cleaning online in under 2 minutes. No commitments, no hidden fees — just exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking" className="btn-primary">Book Now</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
