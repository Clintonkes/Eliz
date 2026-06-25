import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    img: 'photo-1513694203232-719a280e022f',
    title: 'Residential Cleaning',
    desc: 'Our comprehensive home cleaning service covers every room from top to bottom. We dust, vacuum, mop, and sanitize all surfaces, leaving your home fresh and healthy for you and your family.',
    includes: ['All rooms dusted & vacuumed', 'Kitchen & bathroom sanitized', 'Floors mopped', 'Surfaces wiped down'],
  },
  {
    img: 'photo-1497366216548-37526070297c',
    title: 'Commercial Cleaning',
    desc: 'Professional office cleaning keeps your workplace spotless and impressive. We sanitize desks, empty trash, vacuum, and clean common areas so your team can focus on what matters.',
    includes: ['Workstations cleaned', 'Common areas maintained', 'Restrooms sanitized', 'Floors vacuumed & mopped'],
  },
  {
    img: 'photo-1585771724684-38269d6639fd',
    title: 'Deep Cleaning',
    desc: 'Thorough deep clean of neglected areas — appliances, baseboards, grout, and hard-to-reach spots. Ideal for spring cleaning, seasonal resets, or before moving in.',
    includes: ['Inside appliances cleaned', 'Baseboards & trim scrubbed', 'Grout & tile detailed', 'Cabinet interiors wiped'],
  },
  {
    img: 'photo-1560185007-cde436f6a4d0',
    title: 'Move In / Move Out',
    desc: 'Comprehensive cleaning for property transitions, leaving every space spotless. We make sure you get your deposit back and move into a fresh, clean home.',
    includes: ['Full property cleaned', 'Appliances deep-cleaned', 'Closets & cabinets emptied & wiped', 'Walls spot-cleaned'],
  },
  {
    img: 'photo-1504307651254-35680f356dfd',
    title: 'Post-Construction',
    desc: 'Specialized cleanup after renovations, removing dust, debris, and construction residue. We restore your space to a livable condition quickly and efficiently.',
    includes: ['Construction dust removed', 'Debris cleared', 'Windows & surfaces cleaned', 'Floors restored'],
  },
  {
    img: 'photo-1615529182904-14819c35db37',
    title: 'Recurring Maintenance',
    desc: 'Scheduled weekly, bi-weekly, or monthly cleaning to keep your space consistently fresh. Set it and forget it — we show up reliably so you never have to worry.',
    includes: ['Flexible schedule', 'Consistent quality', 'Priority booking', 'Discounted rates'],
  },
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label justify-center mb-4">What We Do</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>Professional Cleaning Solutions</h1>
          <p className="section-subtitle">Comprehensive cleaning services tailored to your specific needs.</p>
        </div>
      </div>

      {/* Services list */}
      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {SERVICES.map((svc, i) => (
              <ScrollReveal key={svc.title}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden" style={{ height: 400, boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
                    <img src={`https://images.unsplash.com/${svc.img}?w=800&auto=format&fit=crop&q=75`} alt={svc.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(6,8,16,0.4), transparent)' }} />
                  </div>
                  <div>
                    <div className="section-label mb-5">{`0${i + 1}`}</div>
                    <h2 className="font-heading font-bold mb-5" style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#f2f4f8' }}>{svc.title}</h2>
                    <p className="text-[15.5px] leading-relaxed mb-8" style={{ color: '#8d9db5' }}>{svc.desc}</p>
                    <div className="space-y-3 mb-10">
                      {svc.includes.map(item => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="gold-check">✓</div>
                          <span className="text-[14px]" style={{ color: '#c9d0db' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/booking" className="btn-primary">Book This Service</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--bg-surface)' }}>
        <div className="orb" style={{ width: 500, height: 500, top: '-80px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(201,169,110,0.09)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="section-title mb-5">Not Sure Which Service You Need?</h2>
            <p className="text-[16px] leading-relaxed mb-10" style={{ color: '#6b7280' }}>Contact us and we'll help you find the perfect cleaning solution for your home or business.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Contact Us</Link>
              <Link to="/booking" className="btn-secondary">Book Online</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
