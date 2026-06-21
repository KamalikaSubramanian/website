import React from 'react'
import { motion } from 'framer-motion'

const areas = [
  'All Over Chennai', 'Velachery', 'Tambaram', 'Pallikaranai', 'Medavakkam', 'OMR', 'Sholinganallur', 'Anna Nagar', 'Porur'
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function ServiceAreas(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20"
      >
        <div className="text-center space-y-4 mb-10">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-accent"
          >
            Service Coverage
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold text-white"
          >
            Serving Across Chennai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-300"
          >
            We provide professional painting services throughout Greater Chennai and nearby areas.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {areas.map((area, idx) => (
            <motion.div 
              key={area}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`rounded-2xl border ${idx === 0 ? 'border-accent/60 bg-accent/20' : 'border-white/10 bg-slate-950/80'} px-5 py-4 text-center transition hover:border-accent/40`}
            >
              <div className={`font-semibold ${idx === 0 ? 'text-accent' : 'text-white'}`}>{area}</div>
              <div className="mt-1 text-xs text-slate-400">{idx === 0 ? 'Full Coverage' : 'Service Area'}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-accent/20 bg-accent/10 p-6 text-center"
        >
          <p className="text-slate-200">Don't see your area? <span className="font-semibold text-accent">Contact us</span> to discuss your project location.</p>
          <motion.a 
            href="https://wa.me/919941588083?text=Hello%20Dhanalakshmi%20Painting%20Contractor,%20I'm%20interested%20in%20painting%20services." 
            target="_blank" 
            rel="noreferrer" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-deepblue transition hover:bg-orange-400"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
