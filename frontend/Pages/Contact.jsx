import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { api } from '../services/api'
import toast from 'react-hot-toast'

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contact', formData)
      toast.success('Message sent successfully!')
      setFormData(EMPTY)
      setSuccess(true)
    } catch {
      toast.error('Failed to send message. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label justify-center mb-4">Reach Out</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>Get in Touch</h1>
          <p className="section-subtitle">Have questions or ready to schedule? We're here to help.</p>
        </div>
      </div>

      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {success ? (
                  <div className="glass-warm rounded-2xl p-12 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.30)' }}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#c9a96e" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="font-heading font-bold text-[26px] mb-3" style={{ color: '#f2f4f8' }}>Message Sent!</h2>
                    <p className="text-[15px] mb-8" style={{ color: '#8d9db5' }}>Thank you for reaching out. We typically respond within 1 business day.</p>
                    <button onClick={() => setSuccess(false)} className="btn-primary">Send Another</button>
                  </div>
                ) : (
                  <div className="glass rounded-2xl p-8 lg:p-10">
                    <h2 className="font-heading font-bold text-[22px] mb-8" style={{ color: '#f2f4f8' }}>Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Your Name *</label>
                          <input type="text" placeholder="Jane Smith" value={formData.name} onChange={set('name')} className="input-field" required />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Email Address *</label>
                          <input type="email" placeholder="jane@example.com" value={formData.email} onChange={set('email')} className="input-field" required />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Phone <span style={{ color: '#374151' }}>(optional)</span></label>
                          <input type="tel" placeholder="949-000-0000" value={formData.phone} onChange={set('phone')} className="input-field" />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Subject *</label>
                          <input type="text" placeholder="Booking inquiry, pricing, etc." value={formData.subject} onChange={set('subject')} className="input-field" required />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Message *</label>
                        <textarea placeholder="Tell us how we can help…" value={formData.message} onChange={set('message')} className="input-field" rows={6} required />
                      </div>

                      <button type="submit" disabled={loading} className="btn-primary w-full" style={{ paddingTop: 16, paddingBottom: 16, fontSize: 15 }}>
                        {loading ? 'Sending…' : 'Send Message'}
                      </button>
                    </form>
                  </div>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="glass rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-[18px] mb-6" style={{ color: '#f2f4f8' }}>Contact Information</h3>
                  <div className="space-y-5">
                    {[
                      { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Address', value: '61 VIA Amistosa Apt C\nRancho Santa Margarita, CA 92688', href: null },
                      { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '949-632-5541', href: 'tel:+19496325541' },
                      { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Working Hours', value: 'Mon–Fri: 8:00 am – 5:00 pm\nSat: 9:00 am – 2:00 pm', href: null },
                    ].map(item => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(201,169,110,0.10)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#c9a96e" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: '#4b5563' }}>{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-[14px] font-medium" style={{ color: '#c9a96e' }}>{item.value}</a>
                          ) : (
                            <div className="text-[14px] whitespace-pre-line leading-relaxed" style={{ color: '#8d9db5' }}>{item.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="glass-warm rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-[17px] mb-3" style={{ color: '#f2f4f8' }}>Ready to Book?</h3>
                  <p className="text-[13.5px] mb-5" style={{ color: '#8d9db5' }}>Skip the message and book your cleaning directly online in under 2 minutes.</p>
                  <a href="/booking" className="btn-primary block text-center">Book Online</a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
