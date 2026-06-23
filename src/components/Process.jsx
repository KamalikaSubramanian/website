import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Site Inspection & Consultation",
    description:
      "We inspect the site, understand requirements and recommend suitable painting solutions."
  },
  {
    title: "Color Selection & Estimation",
    description:
      "Choose colors, textures and finishes with a transparent quotation."
  },
  {
    title: "Surface Preparation",
    description:
      "Cracks are repaired, putty is applied and surfaces are prepared."
  },
  {
    title: "Jet Wash Cleaning",
    description:
      "Exterior surfaces are cleaned using high-pressure jet wash."
  },
  {
    title: "Primer Application",
    description:
      "Premium primers improve paint adhesion and durability."
  },
  {
    title: "Painting & Finishing",
    description:
      "Multiple coats are applied for rich color depth and smooth finishes."
  },
  {
    title: "Quality Inspection",
    description:
      "Every surface is checked for consistency and premium workmanship."
  },
  {
    title: "Final Handover",
    description:
      "Site cleanup and project handover after completion."
  }
];

export default function PaintingProcess() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />

        <div className="relative max-w-5xl mx-auto px-4 text-center ">
          <p className="uppercase tracking-[0.35em] text-accent text-sm">
            Our Workflow
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Painting Process
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-slate-300 leading-7">
            A simple and systematic process that ensures
            quality workmanship, smooth finishes and
            long-lasting results.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-5xl mx-auto mt-10 px-4 pb-16">
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10"></div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-5 items-start"
              >
                {/* Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent text-deepblue font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-slate-300 leading-7">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready To Transform Your Space?
          </h2>

          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Premium painting services with expert workmanship,
            quality materials and timely project completion.
          </p>

          <a
            href="/quote"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              px-6
              py-3
              rounded-full
              bg-accent
              text-deepblue
              font-semibold
              hover:bg-orange-400
              transition
            "
          >
            Get Free Quote →
          </a>
        </div>
      </section>
    </>
  );
}