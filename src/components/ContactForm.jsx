import React, { useState } from 'react'

const whatsappNumber = '919941588083'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = "Name is required"
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[6-9]\d{9}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number"
    }

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address"
    }

    if (!location.trim()) {
      newErrors.location = "Location is required"
    } else if (location.trim().length < 3) {
      newErrors.location = "Enter a valid location"
    }

    if (!message.trim()) {
      newErrors.message = "Project details are required"
    } else if (message.trim().length < 10) {
      newErrors.message =
        "Please enter at least 10 characters"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const body =
      `Hello Dhanalakshmi Painting Contractor!%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Location: ${encodeURIComponent(location)}%0A` +
      `Project Details: ${encodeURIComponent(message)}`

    const url =
      `https://wa.me/${whatsappNumber}?text=${body}`

    window.open(url, "_blank")
  }


  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto rounded-[2rem] border border-white/10 bg-deepblue/20 p-8 shadow-2xl shadow-black/20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-gray-300">Name</span>
          <input value={name} onChange={(e) => {
            setName(e.target.value)
            setErrors({ ...errors, name: "" })
          }} placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {errors.name}
            </p>
          )}
        </label>
        <label className="block">
          <span className="text-sm text-gray-300">Phone</span>
          <input value={phone} onChange={(e) => {
            setPhone(e.target.value)
            setErrors({ ...errors, phone: "" })
          }} placeholder="Mobile number" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-400">
              {errors.phone}
            </p>
          )}
        </label>
        <label className="md:col-span-2 block">
          <span className="text-sm text-gray-300">Email</span>
          <input value={email} onChange={(e) => {
            setEmail(e.target.value)
            setErrors({ ...errors, email: "" })
          }} placeholder="Email address" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </label>
        <label className="md:col-span-2 block">
          <span className="text-sm text-gray-300">Location</span>
          <input value={location} onChange={(e) => {
            setLocation(e.target.value)
            setErrors({ ...errors, location: "" })
          }} placeholder="Location" className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
          {errors.location && (
            <p className="mt-1 text-sm text-red-400">
              {errors.location}
            </p>
          )}
        </label>
      </div>
      <label className="block mt-4">
        <span className="text-sm text-gray-300">Message</span>
        <textarea value={message} onChange={(e) => {
          setMessage(e.target.value)
          setErrors({ ...errors, message: "" })
        }} placeholder="Tell us about your project" className="mt-2 h-32 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-accent" />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </label>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-400">This form opens WhatsApp so your request arrives instantly.</p>
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-deepblue transition hover:bg-accent/90">Send via WhatsApp</button>
      </div>
    </form>
  )
}
