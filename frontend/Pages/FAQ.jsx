import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

const FAQS = [
  { q: 'What areas do you service?', a: 'We service Rancho Santa Margarita and surrounding communities throughout Orange County, including Irvine, Mission Viejo, Lake Forest, Aliso Viejo, and Laguna Hills. Contact us to confirm availability in your specific area.' },
  { q: 'How much does cleaning cost?', a: 'Pricing varies based on service type, property size, and frequency. We offer competitive rates starting at $89 for basic residential cleaning. Contact us or submit a booking request for an accurate quote tailored to your needs.' },
  { q: 'Do you bring your own cleaning supplies?', a: 'Yes — we bring all professional-grade cleaning supplies and equipment. We use eco-friendly, non-toxic products that are safe for your family, children, and pets while still delivering a deep, thorough clean.' },
  { q: 'Are you insured and bonded?', a: 'Absolutely. E Liz LLC is fully licensed, insured, and bonded for your complete peace of mind. All of our cleaners also undergo thorough background checks before joining the team.' },
  { q: 'What is your cancellation policy?', a: 'We require 24 hours notice for cancellations or rescheduling. Cancellations made with less than 24 hours notice may be subject to a cancellation fee. We appreciate your understanding and try to be as flexible as possible.' },
  { q: 'How do I pay for services?', a: 'We accept all major credit cards, debit cards, and bank transfers. Payment is processed securely after service completion. We never ask for full payment upfront.' },
  { q: 'What if I\'m not satisfied with the cleaning?', a: 'Your satisfaction is our guarantee. If you\'re not completely satisfied, contact us within 24 hours and we\'ll return to re-clean the area at no additional cost. We stand fully behind our work.' },
  { q: 'Can I request the same cleaner every time?', a: 'Yes! We understand consistency matters. If you book a recurring service, we\'ll do our best to assign the same cleaner to your home each visit. Simply let us know your preference when booking.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-label justify-center mb-4">Have Questions?</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>Frequently Asked Questions</h1>
          <p className="section-subtitle">Find answers to common questions about our services, pricing, and policies.</p>
        </div>
      </div>

      <section className="py-20 lg:py-28" style={{ background: 'var(--bg-base)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} style={{ transitionDelay: `${i * 40}ms` }}>
                <div className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full px-7 py-6 text-left flex justify-between items-center gap-4"
                  >
                    <span className="font-heading font-semibold text-[16px] leading-snug" style={{ color: '#f2f4f8' }}>{faq.q}</span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: openIndex === i ? 'rgba(201,169,110,0.15)' : 'rgba(255,255,255,0.05)',
                        color: openIndex === i ? '#c9a96e' : '#6b7280',
                        transform: openIndex === i ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </span>
                  </button>
                  {openIndex === i && (
                    <div className="px-7 pb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <p className="text-[14.5px] leading-relaxed pt-5" style={{ color: '#8d9db5' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-12">
            <div className="glass-warm rounded-2xl p-8 text-center">
              <h3 className="font-heading font-bold text-[20px] mb-3" style={{ color: '#f2f4f8' }}>Still Have Questions?</h3>
              <p className="text-[14px] mb-6" style={{ color: '#8d9db5' }}>We're happy to help. Reach out and we'll get back to you promptly.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <a href="tel:+19496325541" className="btn-secondary">Call 949-632-5541</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
