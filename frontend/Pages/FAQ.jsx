import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: "What areas do you service?", answer: "We service Netcong, New Jersey and surrounding areas within a 30-mile radius. Contact us to confirm service availability in your area." },
    { question: "How much does cleaning cost?", answer: "Our pricing varies based on service type, property size, and frequency. We offer competitive rates starting at $89 for basic residential cleaning. Get a free quote for accurate pricing." },
    { question: "Do you bring your own cleaning supplies?", answer: "Yes, we bring all professional-grade cleaning supplies and equipment. We use eco-friendly products that are safe for your family and pets." },
    { question: "Are you insured and bonded?", answer: "Absolutely. We are fully licensed, insured, and bonded for your peace of mind. All our cleaners undergo background checks." },
    { question: "What is your cancellation policy?", answer: "We require 24 hours notice for cancellations. Cancellations made less than 24 hours before the scheduled service may incur a fee." },
    { question: "How do I pay for services?", answer: "We accept credit cards, debit cards, and bank transfers. Payment is processed securely online after service completion." }
  ]

  return (
    <>
      <Navbar />
      <section className="relative bg-[var(--color-primary-dark)] text-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-300 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Frequently Asked Questions</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Find answers to common questions about our services.</p>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className={`text-[var(--color-primary)] text-xl transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12 card p-8">
            <p className="text-gray-600 mb-4">Still have questions? We're happy to help.</p>
            <Link to="/contact" className="btn-primary inline-block">Contact Us</Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
