import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export default function Booking() {
  const [formData, setFormData] = useState({
    full_name: '', email: '', phone: '', service_type: '',
    preferred_date: '', preferred_time: '', address: '', special_instructions: ''
  })
  const [loading, setLoading] = useState(false)

  const serviceTypes = [
    "Residential Cleaning", "Commercial Cleaning", "Deep Cleaning",
    "Move-in/Move-out Cleaning", "Post-construction Cleaning", "Recurring Maintenance"
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/bookings', formData)
      toast.success('Booking submitted successfully! We will contact you shortly.')
      setFormData({
        full_name: '', email: '', phone: '', service_type: '',
        preferred_date: '', preferred_time: '', address: '', special_instructions: ''
      })
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <section className="relative bg-[var(--color-primary-dark)] text-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-300 font-semibold text-sm uppercase tracking-widest">Booking</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Request Your Cleaning Service</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
          <div className="card p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name *" value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} className="input-field" required />
                <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" placeholder="Phone Number *" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="input-field" required />
                <select value={formData.service_type} onChange={(e) => setFormData({...formData, service_type: e.target.value})} className="input-field" required>
                  <option value="">Select Service Type *</option>
                  {serviceTypes.map((service, i) => (
                    <option key={i} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="date" min={new Date().toISOString().split('T')[0]} value={formData.preferred_date} onChange={(e) => setFormData({...formData, preferred_date: e.target.value})} className="input-field" required />
                <select value={formData.preferred_time} onChange={(e) => setFormData({...formData, preferred_time: e.target.value})} className="input-field" required>
                  <option value="">Preferred Time *</option>
                  <option>Morning (8AM - 12PM)</option>
                  <option>Afternoon (12PM - 5PM)</option>
                  <option>Evening (5PM - 8PM)</option>
                </select>
              </div>
              <input type="text" placeholder="Service Address *" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="input-field" required />
              <textarea placeholder="Special Instructions (optional)" value={formData.special_instructions} onChange={(e) => setFormData({...formData, special_instructions: e.target.value})} className="input-field" rows="4" />
              <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg">
                {loading ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
