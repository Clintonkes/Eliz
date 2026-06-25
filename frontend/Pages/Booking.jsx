import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { api } from '../services/api'
import toast from 'react-hot-toast'

const SERVICE_TYPES = [
  'Residential Cleaning',
  'Commercial Cleaning',
  'Deep Cleaning',
  'Move-in/Move-out Cleaning',
  'Post-construction Cleaning',
  'Recurring Maintenance',
]

const TIME_SLOTS = [
  'Morning (8AM - 12PM)',
  'Afternoon (12PM - 5PM)',
  'Evening (5PM - 8PM)',
]

const EMPTY = {
  full_name: '', email: '', phone: '', service_type: '',
  preferred_date: '', preferred_time: '', address: '', special_instructions: '',
}

export default function Booking() {
  const [formData, setFormData] = useState(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const set = (field) => (e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/bookings', formData)
      toast.success('Booking submitted! We\'ll be in touch within 24 hours.')
      setFormData(EMPTY)
      setSuccess(true)
    } catch {
      toast.error('Failed to submit booking. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label justify-center mb-4">Get Started</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>Book a Cleaning</h1>
          <p className="section-subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
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
                    <h2 className="font-heading font-bold text-[26px] mb-3" style={{ color: '#f2f4f8' }}>Booking Received!</h2>
                    <p className="text-[15px] mb-8" style={{ color: '#8d9db5' }}>Thank you! We'll review your request and contact you within 24 hours to confirm your appointment.</p>
                    <button onClick={() => setSuccess(false)} className="btn-primary">Book Another</button>
                  </div>
                ) : (
                  <div className="glass rounded-2xl p-8 lg:p-10">
                    <h2 className="font-heading font-bold text-[22px] mb-8" style={{ color: '#f2f4f8' }}>Booking Request</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Full Name *</label>
                          <input type="text" placeholder="Jane Smith" value={formData.full_name} onChange={set('full_name')} className="input-field" required />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Email Address *</label>
                          <input type="email" placeholder="jane@example.com" value={formData.email} onChange={set('email')} className="input-field" required />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Phone Number *</label>
                          <input type="tel" placeholder="949-000-0000" value={formData.phone} onChange={set('phone')} className="input-field" required />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Service Type *</label>
                          <select value={formData.service_type} onChange={set('service_type')} className="input-field" required>
                            <option value="">Select a service…</option>
                            {SERVICE_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Preferred Date *</label>
                          <input type="date" min={new Date().toISOString().split('T')[0]} value={formData.preferred_date} onChange={set('preferred_date')} className="input-field" required />
                        </div>
                        <div>
                          <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Preferred Time *</label>
                          <select value={formData.preferred_time} onChange={set('preferred_time')} className="input-field" required>
                            <option value="">Select a time…</option>
                            {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Service Address *</label>
                        <input type="text" placeholder="123 Main St, Rancho Santa Margarita, CA" value={formData.address} onChange={set('address')} className="input-field" required />
                      </div>

                      <div>
                        <label className="block text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b7280' }}>Special Instructions <span style={{ color: '#374151' }}>(optional)</span></label>
                        <textarea placeholder="Pets on premises, areas to focus on, access codes, etc." value={formData.special_instructions} onChange={set('special_instructions')} className="input-field" rows={4} />
                      </div>

                      <button type="submit" disabled={loading} className="btn-primary w-full" style={{ paddingTop: 16, paddingBottom: 16, fontSize: 15 }}>
                        {loading ? 'Submitting…' : 'Submit Booking Request'}
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
                  <h3 className="font-heading font-bold text-[18px] mb-6" style={{ color: '#f2f4f8' }}>Contact Us Directly</h3>
                  <div className="space-y-5">
                    {[
                      { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '949-632-5541', href: 'tel:+19496325541' },
                      { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Hours', value: 'Mon–Fri: 8AM – 5PM', href: null },
                      { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Location', value: 'Rancho Santa Margarita, CA', href: null },
                    ].map(item => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(201,169,110,0.10)' }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#c9a96e" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={item.icon} /></svg>
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-widest mb-0.5" style={{ color: '#4b5563' }}>{item.label}</div>
                          {item.href ? (
                            <a href={item.href} className="text-[14px] font-medium" style={{ color: '#c9a96e' }}>{item.value}</a>
                          ) : (
                            <div className="text-[14px]" style={{ color: '#8d9db5' }}>{item.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="glass-warm rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-[17px] mb-4" style={{ color: '#f2f4f8' }}>What to Expect</h3>
                  <div className="space-y-3">
                    {['Submit your request online', 'We\'ll confirm within 24 hours', 'Your cleaner arrives on time', 'Satisfaction guaranteed'].map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold" style={{ background: 'rgba(201,169,110,0.15)', color: '#c9a96e', border: '1px solid rgba(201,169,110,0.25)' }}>{i + 1}</div>
                        <span className="text-[13.5px]" style={{ color: '#8d9db5' }}>{step}</span>
                      </div>
                    ))}
                  </div>
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
