import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection.jsx';
import ServiceAreas from '../components/ServiceAreas.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Services from '../pages/Services.jsx';
import Process from '../components/Process.jsx';

import { Link } from "react-router-dom";

const features = [
  {
    title: '18+ Years of Craftsmanship',
    description: 'Decades of painting experience delivering flawless finishes across Chennai residential and commercial projects.'
  },
  {
    title: 'Asian Paints Expertise',
    description: 'Preferred coatings, textures, and color systems with trusted product selection for every surface.'
  },
  {
    title: 'WhatsApp-First Communication',
    description: 'Fast replies on WhatsApp so your project inquiry reaches us directly and we can respond immediately.'
  },
  {
    title: 'Durable Waterproof Finishes',
    description: 'Reliable exterior protection with waterproof coatings built to withstand seasonal weather and humidity.'
  }
]

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.36em] text-accent"
          >
            Trusted Contractor
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Asian Paints Certified Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 mx-auto max-w-2xl text-base leading-8 text-slate-300"
          >
            We deliver premium painting services with certified Asian Paints products, expert finishes, and reliable workmanship for homes and businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            <Link to="/certification">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/70 p-6 shadow-2xl shadow-black/20 hover:border-accent/40 transition-all"
              >
                <div className="rounded-[1.5rem] bg-slate-950/90 p-5 border border-accent/20">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-accent">
                        Trusted Partner
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Dhanush K
                      </p>
                    </div>

                    <div className="h-14 w-14 rounded-3xl bg-accent/10 flex items-center justify-center text-accent text-xl font-bold border border-accent/20">
                      ✓
                    </div>
                  </div>

                  <div className="rounded-3xl bg-slate-950/70 p-4 text-center border border-white/10">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      Trusted Contractor
                    </p>

                    <p className="mt-3 text-2xl font-bold text-white">
                      Asian Paints
                    </p>
                  </div>

                  <p className="mt-4 text-center text-accent text-sm">
                    Click to View Verified Contractor ID →
                  </p>
                </div>
              </motion.div>
            </Link>
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-orange-500/15 via-orange-400/10 to-slate-950/70 p-6 shadow-2xl shadow-black/20">
              <div className="rounded-[1.5rem] bg-slate-950/90 p-5 border border-white/10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-accent">Premium Supplier</p>
                    <p className="mt-2 text-lg font-semibold text-white">Asian Paints Partner</p>
                  </div>
                  <div className="h-14 w-14 rounded-3xl bg-accent/10 flex items-center justify-center text-accent text-xl font-bold border border-accent/20">
                    ✓
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-4 text-center border border-white/10">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Certified Service</p>
                  <p className="mt-3 text-2xl font-bold text-white">Trusted Contractor</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-sm uppercase tracking-[0.36em] text-accent">Our Advantage</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Precision execution for every surface</h3>
              <p className="mt-4 text-slate-300">From wall prep to final coating, our process is built for clean results, long-lasting durability, and beautiful color depth.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-sm uppercase tracking-[0.36em] text-accent">What We Do Best</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Home, villa and commercial painting</h3>
              <p className="mt-4 text-slate-300">We specialize in residential homes, luxury villas, business areas, and repainting works with premium Asian Paints finishes.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-sm uppercase tracking-[0.36em] text-accent">Featured Projects</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Trusted painting work for Chennai clients</h3>
              <p className="mt-4 text-slate-300">Browse our signature projects for homes, villas, storefronts, and high-impact repainting jobs with Asian Paints quality.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Process />
      <Services />
      <ServiceAreas />
      <Testimonials />
    </div>
  )
}
