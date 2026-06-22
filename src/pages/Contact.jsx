import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const whatsappMessage =
    "Hello Dhanalakshmi Painting Contractor 🎨✨\n\n🏡 Excited to transform my property with a fresh and elegant new look!\nLooking forward to connecting with your team ✨ ";
  console.log(
    `https://wa.me/919941588083?text=${encodeURIComponent(whatsappMessage)}`)
  return (
    <section className="py-14 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.14),transparent_35%),linear-gradient(180deg,#031b3d_0%,#020814_100%)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white">Contact Us</h1>
              <p className="mt-3 text-gray-300 max-w-2xl">Send your message and we will reply directly on WhatsApp for the fastest response. Use the form below or click the WhatsApp button to get a quote, schedule a site visit, or discuss color details.</p>
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=919941588083&text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all duration-300"
            >
              Chat on WhatsApp
            </a>


          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-accent">Primary Contact</div>
              <p className="mt-3 text-gray-200 text-lg font-semibold"><a href="tel:+919941588083">+91 99415 88083</a><br/><a href="tel:+919941588083">+91 98419
                67211</a></p>
              <p className="mt-2 text-sm text-gray-400">Available for calls and WhatsApp messages.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm uppercase tracking-[0.24em] text-accent">Email</div>
              <p className="mt-3 text-gray-200 text-lg font-semibold"><a href="mailto:jaikumardhanush18@gmail.com">jaikumardhanush18@gmail.com</a></p>
              <p className="mt-2 text-sm text-gray-400">Send project details any time.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-4">
        <ContactForm />
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-8">
        <iframe title="map" className="w-full h-72 rounded-[1.5rem] border border-white/10 shadow-2xl shadow-black/20" src="https://www.google.com/maps?q=Aziz%20Nagar%201st%20St%2C%20Kodambakkam%2C%20Chennai%20600024&output=embed" />
      </div>
    </section>
  )
}
