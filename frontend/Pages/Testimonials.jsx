import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Sarah Johnson", content: "E Liz LLC cleaned my home today — they did a terrific job. They even moved the furniture to be sure the floors were cleaned — they really paid attention to detail. Thank you!", rating: 5 },
    { id: 2, name: "Michael Chen", content: "We would like to thank E Liz LLC for an outstanding effort on this recently completed project. The work was completed on time and exceeded our expectations.", rating: 5 },
    { id: 3, name: "Emily Rodriguez", content: "After our construction project, E Liz LLC cleaned it all up perfectly. They got rid of all the dust and debris. Saved us so much time and stress!", rating: 5 },
    { id: 4, name: "David Thompson", content: "Reliable, trustworthy, and excellent quality. We've been using them for monthly maintenance and couldn't be happier with the consistent results.", rating: 4 },
    { id: 5, name: "Lisa Williams", content: "The move-out cleaning they provided was incredible. Our landlord was impressed, and we got our full deposit back! Highly recommend their services.", rating: 5 },
    { id: 6, name: "Robert Kim", content: "Professional team, great communication, and fantastic results. They showed up on time and left our office spotless. Five stars all around!", rating: 5 }
  ]

  return (
    <>
      <Navbar />
      <section className="relative bg-navy-900 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 to-navy-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-[0.2em]">Testimonials</span>
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">What Our Clients Say</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Don't just take our word for it — hear from our satisfied customers.</p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.id}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`text-lg ${j < t.rating ? 'text-brand-500' : 'text-gray-200'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed text-sm">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                      <span>{t.name[0]}</span>
                    </div>
                    <span className="font-semibold text-navy-700">{t.name}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/booking" className="btn-outline">Join Our Happy Customers</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
