import React, { useState } from 'react'

const whatsappNumber = '919941588083'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const body = `Hello Dhanalakshmi Painting Contractor!%0a%0aName: ${encodeURIComponent(name || 'N/A')}%0aPhone: ${encodeURIComponent(phone || 'N/A')}%0aEmail: ${encodeURIComponent(email || 'N/A')}%0aLocation: ${encodeURIComponent(location || 'N/A')}%0aProject Details: ${encodeURIComponent(message || 'I would like to discuss a painting project.')}`
    const url = `https://wa.me/${whatsappNumber}?text=${body}`
    window.open(url, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto rounded-[2rem] border border-white/10 bg-deepblue/20 p-8 shadow-2xl shadow-black/20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-gray-300">Name</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-300">Phone</span>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile number" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
        </label>
        <label className="md:col-span-2 block">
          <span className="text-sm text-gray-300">Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
        </label>
        <label className="md:col-span-2 block">
          <span className="text-sm text-gray-300">Location</span>
          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
        </label>
      </div>
      <label className="block mt-4">
        <span className="text-sm text-gray-300">Message</span>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project" className="mt-2 h-32 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-400">This form opens WhatsApp so your request arrives instantly.</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-deepblue transition hover:bg-accent/90">Send via WhatsApp</button>
      </div>
    </form>
  )
}
