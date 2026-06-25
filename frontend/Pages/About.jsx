import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Navbar />
      <section className="relative bg-navy-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em]">About</span>
          <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-4">About E Liz LLC</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Learn about our story, values, and commitment to excellence.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-[0.2em]">Who We Are</span>
              <h2 className="section-title mt-3 gold-underline gold-underline-center">Built on Trust & Quality</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal animation="scroll-animate-left">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm h-full hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-navy-700 mb-4">Exceptional Level of Cleaning Services</h3>
                <p className="text-gray-500 leading-relaxed">
                  Founded with a commitment to excellence, E Liz LLC has built a reputation as a premier provider of residential and commercial cleaning solutions in Rancho Santa Margarita and throughout Orange County. Our continuous pursuit for perfection has resulted in consistent growth each year.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm h-full hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-navy-700 mb-4">Friendly & Professional Service</h3>
                <p className="text-gray-500 leading-relaxed">
                  Our focus is to listen to our clients, understand their needs, and provide the exceptional level of residential and commercial cleaning service they deserve. Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <span className="text-brand-600 font-semibold text-sm uppercase tracking-[0.2em]">Our Vision & Mission</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-navy-700 mt-4 gold-underline">Cleaner Spaces, Happier Places</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-navy-700 mb-4">Our Vision</h3>
                  <p className="text-gray-500 leading-relaxed">
                    To be the most trusted and respected cleaning service provider in Orange County, known for our unwavering commitment to quality, integrity, and customer satisfaction. We envision a world where every space we touch inspires health, comfort, and peace of mind.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-navy-700 mb-4">Our Mission</h3>
                  <p className="text-gray-500 leading-relaxed">
                    To deliver exceptional cleaning services that exceed expectations through attention to detail, eco-friendly practices, and a team of dedicated professionals. We strive to make every home and business we serve a cleaner, healthier, and more enjoyable environment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">Get a Free Estimate</h2>
            <p className="text-gray-400 mb-8 text-lg">Contact us today and we'll provide a free, no-obligation quote for your cleaning needs.</p>
            <Link to="/booking" className="btn-primary text-lg">
              Send a Request
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
