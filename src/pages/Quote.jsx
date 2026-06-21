import React from 'react'
import QuoteForm from '../components/QuoteForm'

export default function Quote(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white">Get Your Free Painting Estimate Today</h1>
        <p className="text-gray-300 mt-2">Fill in details and our team will contact you with a professional estimate.</p>
      </div>
      <div className="mt-6">
        <QuoteForm />
      </div>
    </section>
  )
}
