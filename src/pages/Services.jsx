import React from "react";

import interior from "../assets/services/interior.jpeg";
import exterior from "../assets/services/exterior.jpeg";
import residential from "../assets/services/residential.jpeg";
import commercial from "../assets/services/commercial.jpeg";
import waterproofing from "../assets/services/waterproofing.jpeg";
import repainting from "../assets/services/Repainting.jpeg";
import jetwash from "../assets/services/jetwash.jpeg";
import woodPolish from "../assets/services/woodpolish.jpeg";

const services = [
  {
    title: "Interior Painting",
    image: interior,
    desc: "Transform your interiors with premium paints, elegant color combinations, smooth finishes and expert craftsmanship that enhance every room.",
  },
  {
    title: "Exterior Painting",
    image: exterior,
    desc: "Protect and beautify your building with weather-resistant coatings designed to withstand heat, rain and environmental damage.",
  },
  {
    title: "Residential Painting",
    image: residential,
    desc: "Complete painting solutions for homes, villas, apartments and gated communities with clean execution and attention to detail.",
  },
  {
    title: "Commercial Painting",
    image: commercial,
    desc: "Professional painting services for offices, showrooms, retail spaces and commercial buildings with minimal disruption.",
  },
  {
    title: "Waterproof Coating",
    image: waterproofing,
    desc: "Advanced waterproofing solutions that prevent leakage, dampness, seepage and structural damage.",
  },
  {
    title: "Repainting",
    image: repainting,
    desc: "Restore old walls and surfaces with fresh colours and premium repainting solutions.",
  },
  {
    title: "Jet Wash Cleaning",
    image: jetwash,
    desc: "High-pressure cleaning that removes dirt, algae and old paint residue before repainting.",
  },
  {
    title: "Wood Door Polishing",
    image: woodPolish,
    desc: "Professional wood polishing that restores shine, enhances natural wood grain, protects surfaces from wear and gives doors a smooth premium finish.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="uppercase tracking-[0.35em] text-accent text-sm">
            Professional Painting Services
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Complete Painting Solutions
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-slate-300 leading-8">
            Interior, exterior, residential, commercial,
            waterproofing, texture painting and repainting
            services delivered with premium materials and
            trusted workmanship.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="space-y-10">

          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                grid lg:grid-cols-[320px_1fr]
                gap-8
                items-center
                border-b
                border-white/10
                pb-10
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Image */}

              <div className="flex justify-center">
                <div
                  className="flex items-center justify-center"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-w-[400px] object-contain rounded-3xl hover:scale-105 transition-all duration-500"/>
                </div>
              </div>
              {/* Content */}
              <div>
                <span className="text-accent uppercase tracking-[0.3em] text-xs">
                  Premium Service
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  {service.title}
                </h2>

                <div className="w-20 h-1 bg-accent rounded-full mt-4"></div>

                <p className="mt-5 text-slate-300 leading-8">
                  {service.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                    ✓ Premium Materials
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                    ✓ Expert Team
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                    ✓ Clean Finish
                  </span>

                  <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-sm border border-white/10">
                    ✓ Long Lasting
                  </span>
                </div>

                <a
                  href="/quote"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-6
                    text-accent
                    font-semibold
                    hover:text-orange-300
                    transition
                  "
                >
                  Get Free Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}