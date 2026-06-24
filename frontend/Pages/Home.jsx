import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const serviceList = [
  {
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    title: "Residential Cleaning",
    desc: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces."
  },
  {
    img: "https://images.unsplash.com/photo-1761689502577-0013be84f1bf?w=600&q=80",
    title: "Commercial Cleaning",
    desc: "Professional office cleaning, desk sanitization, floor care, and common area maintenance."
  },
  {
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
    title: "Deep Cleaning",
    desc: "Thorough deep clean of neglected areas, appliances, baseboards, and hard-to-reach spots."
  },
  {
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    title: "Move In/Out Service",
    desc: "Comprehensive cleaning for property transitions, leaving every space spotless."
  },
  {
    img: "https://images.unsplash.com/photo-1667052673589-b088f6cfd598?w=600&q=80",
    title: "Post-Construction",
    desc: "Specialized cleanup after renovations, removing dust, debris, and construction residue."
  },
  {
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    title: "Recurring Maintenance",
    desc: "Scheduled weekly, bi-weekly, or monthly cleaning to keep your space consistently fresh."
  }
]

const testimonials = [
  { name: "Sarah Johnson", content: "Greerz cleaned my home today - they did a terrific job. They really paid attention to detail. Thank you!", rating: 5, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
  { name: "Michael Chen", content: "Best cleaning service I've ever used. They pay attention to every detail and our home has never looked better.", rating: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Emily Rodriguez", content: "After our construction project, Greerz cleaned it all up perfectly. Saved us so much time and stress!", rating: 5, img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
]

const whyChoose = [
  { title: "Professional Staff", desc: "Our team is trained, experienced, and committed to delivering exceptional cleaning results every time." },
  { title: "Quality Products", desc: "We use eco-friendly, hospital-grade cleaning products that are safe for your family, pets, and the environment." },
  { title: "Certified Cleaners", desc: "All our cleaners are fully certified, background-checked, and trained in the latest cleaning techniques." },
  { title: "Fair Prices", desc: "Competitive pricing with no hidden fees. Get premium cleaning services at rates that work for your budget." },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=1920&q=80"
            alt="Professional cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/90 via-[var(--color-primary-dark)]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 w-full">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block bg-white/15 text-green-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur">
                Professional Cleaning Services
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We Clean to the<br />
                <span className="text-green-300">Highest Standards</span>
              </h1>
              <p className="text-lg lg:text-xl text-green-200 mb-10 max-w-xl leading-relaxed">
                Reliable and efficient cleaning services for your home or business. We make your space sparkle so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center text-lg bg-white !text-[var(--color-primary-dark)] hover:!bg-green-100 !shadow-lg">
                  Request a Free Quote
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-center text-lg">
                  Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                    alt="Professional cleaning team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div>
                <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">About Us</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We Clean to the Highest Standards
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Greerz LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in Netcong, New Jersey and surrounding areas. Our continuous pursuit for perfection has resulted in consistent growth.
                </p>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Our focus is to listen to our clients, understand their needs, and provide the exceptional level of cleaning service they deserve. Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
                <Link to="/booking" className="btn-primary">
                  Request a Free Quote
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="section-title mt-3">Professional Cleaning Solutions</h2>
              <p className="section-subtitle">Comprehensive cleaning solutions tailored to your specific needs.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, i) => (
              <ScrollReveal key={i}>
                <div className="group card card-hover overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <Link to="/booking" className="text-[var(--color-primary)] font-semibold text-sm hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-1">
                      Book Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We Take Pride in Our Work
                </h2>
                <div className="space-y-8">
                  {whyChoose.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--color-primary-lightest)] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <img
                    src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80"
                  alt="Professional cleaning equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "1K+", label: "Projects Completed" },
              { num: "6", label: "Service Categories" },
              { num: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <ScrollReveal key={i}>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-white">{stat.num}</p>
                  <p className="text-green-200 text-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">Reviews</span>
              <h2 className="section-title mt-3">What Our Clients Say</h2>
              <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i}>
                <div className="card p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`text-lg ${j < t.rating ? 'text-green-400' : 'text-gray-200'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover mx-auto mb-3" />
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">View All Reviews</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ready for a Spotless Space?</h2>
            <p className="text-green-200 mb-8 text-lg max-w-2xl mx-auto">
              Get your free quote today and experience the Greerz difference. We'll make your space shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-white text-[var(--color-primary-dark)] font-semibold py-3 px-8 rounded-lg hover:bg-green-100 transition-all text-lg">Get Your Free Quote</Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
