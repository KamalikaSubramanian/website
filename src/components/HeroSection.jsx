import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const whatsappMessage =
    "Hello Dhanalakshmi Painting Contractor 🎨✨\n\n🏡 Excited to transform my property with a fresh and elegant new look!\nLooking forward to connecting with your team ✨ ";
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 -top-32 h-80 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.25),transparent_40%)]" />
      <div className="absolute inset-x-0 -bottom-32 h-80 blur-3xl bg-[radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.22),transparent_45%)]" />
      <div className="relative isolate overflow-hidden bg-slate-950 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,#020814_0%,#071428_100%)]">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=60')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/90" />
        <div className="relative max-w-6xl mx-auto px-4 py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm uppercase tracking-[0.36em] text-accent">Asian Paints specialist • 18+ years</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-4xl">Beautiful spaces, lasting paint finishes for Chennai homes and workplaces.</motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl text-lg leading-8 text-slate-200">We create refined interior and exterior painting solutions with premium Asian Paints coatings, waterproofing, texture work, and color design that brings every room to life.</motion.p>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="/quote" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-deepblue shadow-lg shadow-accent/20 transition hover:bg-orange-400">Get My Free Quote</a>
                <a href={`https://api.whatsapp.com/send?phone=919941588083&text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">Chat on WhatsApp</a>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.32em] text-slate-300">Signature painting service</div>
              <div className="mt-6 space-y-5">
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-3xl font-bold text-white">18+</div>
                  <div className="mt-1 text-sm text-slate-300">Years of painting excellence across Chennai</div>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-3xl font-bold text-white">Asian Paints</div>
                  <div className="mt-1 text-sm text-slate-300">Preferred products and finishing systems</div>
                </div>
                <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="text-3xl font-bold text-white">1000+</div>
                  <div className="mt-1 text-sm text-slate-300">Walls and facades transformed with care</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
