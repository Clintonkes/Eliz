import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const VALUES = [
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Integrity', desc: 'We do what we say. Every time.' },
  { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', title: 'Care', desc: 'We treat your space like our own.' },
  { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Excellence', desc: 'We never settle for "good enough".' },
  { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064', title: 'Sustainability', desc: 'Eco-friendly products, always.' },
]

export default function About() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label justify-center mb-4">About Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>About E Liz LLC</h1>
          <p className="section-subtitle">Our story, our values, and our commitment to exceptional cleaning.</p>
        </div>
      </div>

      {/* Mission + image */}
      <section className="py-24" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden" style={{ height: 520, boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}>
                  <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=900&auto=format&fit=crop&q=80" alt="E Liz team" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-5 -right-4 glass-warm rounded-2xl px-6 py-4">
                  <div className="stat-num" style={{ fontSize: 42 }}>8+</div>
                  <div className="text-[12.5px] font-medium" style={{ color: '#c9a96e' }}>Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="scroll-animate-right">
              <div className="section-label mb-5">Who We Are</div>
              <h2 className="section-title mb-6">Built on Trust &amp; Quality</h2>
              <p className="text-[16px] leading-relaxed mb-5" style={{ color: '#8d9db5' }}>
                Founded with a commitment to excellence, E Liz LLC has built a reputation as a premier provider of residential and commercial cleaning solutions in Rancho Santa Margarita and throughout Orange County.
              </p>
              <p className="text-[16px] leading-relaxed mb-5" style={{ color: '#6b7280' }}>
                Our continuous pursuit of perfection has resulted in consistent growth and a loyal client base. We listen to our clients, understand their needs, and provide the exceptional level of service they deserve.
              </p>
              <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#6b7280' }}>
                Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
              </p>
              <Link to="/booking" className="btn-primary">Book a Cleaning</Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <div className="section-label justify-center mb-4">What Drives Us</div>
            <h2 className="section-title">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="glass rounded-2xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.20)' }}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#c9a96e" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={v.icon} /></svg>
                  </div>
                  <h3 className="font-heading font-bold text-[18px] mb-3" style={{ color: '#f2f4f8' }}>{v.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: '#6b7280' }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <ScrollReveal animation="scroll-animate-left">
              <div className="section-label mb-5">Where We're Headed</div>
              <h2 className="section-title">Vision &amp; Mission</h2>
            </ScrollReveal>
            <div className="lg:col-span-2 space-y-6">
              {[
                { title: 'Our Vision', body: 'To be the most trusted and respected cleaning service provider in Orange County, known for our unwavering commitment to quality, integrity, and customer satisfaction. We envision a world where every space we touch inspires health, comfort, and peace of mind.' },
                { title: 'Our Mission', body: 'To deliver exceptional cleaning services that exceed expectations through attention to detail, eco-friendly practices, and a team of dedicated professionals. We strive to make every home and business we serve a cleaner, healthier, and more enjoyable environment.' },
              ].map(item => (
                <ScrollReveal key={item.title} animation="scroll-animate-right">
                  <div className="glass-warm rounded-2xl p-8 lg:p-10">
                    <h3 className="font-heading font-bold text-[20px] mb-4" style={{ color: '#c9a96e' }}>{item.title}</h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: '#8d9db5' }}>{item.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
        <div className="orb" style={{ width: 500, height: 500, top: '-80px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(201,169,110,0.08)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="section-title mb-5">Get a Free Estimate</h2>
            <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#6b7280' }}>Contact us today and we'll provide a free, no-obligation quote for your cleaning needs.</p>
            <Link to="/booking" className="btn-primary">Send a Request</Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
