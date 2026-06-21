import React from 'react'

export default function About(){
  return (
    <section className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20">
        <h1 className="text-4xl md:text-5xl font-black text-white">About Dhanalakshmi Painting Contractor</h1>
        <p className="mt-6 text-lg leading-8 text-gray-200">With more than 18 years of trusted experience, we bring craftsmanship, color expertise, and the highest quality finishes to every home and business in Chennai. Our team is proud to work with Asian Paints products and deliver uniquely styled interiors, premium exterior coatings, and long-lasting waterproof solutions.</p>
        <p className="mt-4 text-gray-300 leading-8">Every project is approached like a design story: careful surface preparation, a polished palette selection, and finishes that balance elegance with durability. We specialize in modern living spaces, commercial facades, textured feature walls, and complete repaint projects that transform the way a space feels.</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20">
          <h2 className="text-3xl font-semibold text-white">Why choose us for your next paint project?</h2>
          <p className="text-gray-300 leading-8">As a contractor with over 18 years in the industry, we understand how to deliver consistent results that stand up to Chennai's weather and daily use. Our projects are built on strong communication, clean execution, and premium materials from Asian Paints, Berger, and other trusted brands.</p>
          <ul className="grid gap-3 text-gray-200 list-disc list-inside">
            <li>18+ years of painting and restoration expertise</li>
            <li>Asian Paints-approved finishes and coatings</li>
            <li>Interior, exterior, waterproofing, texture and specialty finishes</li>
            <li>Design-led color consultation for unique, modern styling</li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-accent/20 bg-accent/10 p-8 text-gray-100 shadow-2xl shadow-accent/15">
          <div className="uppercase tracking-[0.24em] text-sm text-accent">Trusted by homeowners & businesses</div>
          <h3 className="mt-4 text-2xl font-semibold">Asian Paints Work Experience</h3>
          <p className="mt-3 text-gray-200 leading-7">We have delivered high-quality finishes for residential apartments, offices, retail showrooms and boutique spaces. Our team knows the best Asian Paints product combinations for durability, washability, and elegant color depth.</p>
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-100">
            <p>✓ Interior accent walls with refined textures</p>
            <p>✓ Smooth exterior coatings built for long-term protection</p>
            <p>✓ Waterproofing and surface preparation from start to finish</p>
            <p>✓ Personalized color guidance that makes your space stand out</p>
          </div>
        </div>
      </div>
    </section>
  )
}
