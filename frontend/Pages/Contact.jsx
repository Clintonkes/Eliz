import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contact', formData)
      toast.success('Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message')
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <section className="relative bg-[var(--color-primary-dark)] text-white py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-300 font-semibold text-sm uppercase tracking-widest">Contact</span>
          <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Get in Touch</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Have questions or ready to schedule? We're here to help.</p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ScrollReveal>
              <div className="card p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="text" placeholder="First Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="input-field" required />
                    <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input type="tel" placeholder="Contact No *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="input-field" required />
                    <input type="text" placeholder="Subject *" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="input-field" required />
                  </div>
                  <textarea placeholder="Your Message *" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="input-field" rows="6" required />
                  <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              </ScrollReveal>
            </div>

            <div className="space-y-8">
              <ScrollReveal>
              <div className="card p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[var(--color-primary-lightest)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Address</p>
                      <p className="text-gray-500 text-sm">13 Netcong HTS Apt 7<br />Netcong, New Jersey 078</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[var(--color-primary-lightest)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Phone</p>
                      <a href="tel:+15703506881" className="text-gray-500 text-sm hover:text-[var(--color-primary)]">+1 (570) 350-6881</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[var(--color-primary-lightest)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Email</p>
                      <a href="mailto:harkllc@proton.me" className="text-gray-500 text-sm hover:text-[var(--color-primary)]">harkllc@proton.me</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-[var(--color-primary-lightest)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Working Hours</p>
                      <p className="text-gray-500 text-sm">Mon-Fri: 08.00 am - 05.00 pm<br />Sat: 09.00 am - 02.00 pm<br />Sun: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Follow Us</p>
                  <div className="flex gap-3">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                      <a key={social} href="#" className="w-10 h-10 bg-[var(--color-primary-lightest)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              </ScrollReveal>

              <ScrollReveal>
              <div className="card p-8 bg-[var(--color-primary)] text-white border-0">
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Need a Quote?</h3>
                <p className="text-green-200 text-sm mb-5">Get a free estimate for your cleaning service today.</p>
                <a href="/booking" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-dark)] font-semibold py-2.5 px-6 rounded-lg hover:bg-green-100 transition-all text-sm">
                  Get Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30215.677347887!2d-74.717198!3d40.847588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e3c0e0c0e0c1%3A0x0!2sNetcong%2C+NJ+078!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Greerz LLC Location"
        />
      </section>

      <Footer />
    </>
  )
}
