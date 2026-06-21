import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";

import React from "react";
import { motion } from "framer-motion";


export default function Certification() {
  return (
    <section className="min-h-screen bg-deepblue py-16 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-accent text-sm">
            Verified Professional
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Asian Paints Certified Contractor
          </h1>

          <p className="text-slate-300 mt-5 max-w-2xl mx-auto">
            Professional ID Card issued by
            Asian Paints validating Dhanush K as a trusted painting
            contractor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="group"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
              <img
                src={card1}
                alt="Certification Front"
                className="w-full object-contain hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="group"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl">
              <img
                src={card2}
                alt="Certification Back"
                className="w-full object-contain hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

        </div>

        <div className="mt-12">
          <div className="rounded-3xl border border-accent/20 bg-white/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">
              Verified Asian Paints Professional
            </h2>

            <p className="text-slate-300 mt-4">
              This demonstrates professional training,
              product knowledge and trusted contractor status for
              residential and commercial painting services.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}