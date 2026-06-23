import React from "react";

import painterHome from "../assets/about/painterHome.jpg";
import luxuryLivingRoom from "../assets/about/luxuryLivingRoom.jpg";
import accentWall from "../assets/about/accentWall.jpg";
import colorConsultation from "../assets/about/colorConsultation.jpg";
import colorWall from "../assets/about/colorWall.jpg"

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">

      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-black/30">

        {/* Content + Images Grid */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div
              className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      bg-accent/10
      border
      border-accent/20
      text-accent
      text-sm
      font-medium
      mb-6
    "
            >
              ✨ 18+ Years of Painting Excellence
            </div>

            <h1
              className="
      text-5xl
      md:text-6xl
      font-black
      leading-tight
      bg-gradient-to-r
      from-white
      via-gray-100
      to-accent
      bg-clip-text
      text-transparent
    "
            >
              Transforming Spaces With
              Premium Painting Solutions
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-200">
              Dhanalakshmi Painting Contractor has been helping
              homeowners, apartment owners, offices, and commercial
              spaces achieve beautiful interiors and durable exteriors
              for more than 18 years.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              We combine expert craftsmanship, premium materials,
              modern color consultation, and meticulous surface
              preparation to create finishes that look stunning and
              last for years.
            </p>

            <p className="mt-4 text-gray-300 leading-8">
              From luxury living rooms and textured feature walls to
              complete exterior repainting and waterproofing
              solutions, every project is handled with precision,
              professionalism, and attention to detail.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">

              <div
                className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        text-center
      "
              >
                <h3 className="text-3xl font-black text-accent">
                  18+
                </h3>
                <p className="text-sm text-gray-300">
                  Years Experience
                </p>
              </div>

              <div
                className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        text-center
      "
              >
                <h3 className="text-3xl font-black text-accent">
                  500+
                </h3>
                <p className="text-sm text-gray-300">
                  Completed Projects
                </p>
              </div>

              <div
                className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        text-center
      "
              >
                <h3 className="text-3xl font-black text-accent">
                  100%
                </h3>
                <p className="text-sm text-gray-300">
                  Client Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full" />

            <div className="relative z-10 space-y-4">

              <div className="grid grid-cols-2 gap-4">

                <div className="h-[320px] overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src={painterHome}
                    alt=""
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="h-[320px] overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src={luxuryLivingRoom}
                    alt=""
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

              </div>

              <div className="h-[240px] overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src={colorConsultation}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* SECOND SECTION */}
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">

        {/* WHY CHOOSE US */}
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/20">

          <img
            src={accentWall}
            alt=""
            className="w-full h-72 object-cover hover:scale-105 transition duration-700"
          />

          <div className="p-8 md:p-10">

            <div className="text-accent uppercase tracking-[0.25em] text-sm">
              Why Choose Us
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Painting Expertise You Can Trust
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Our reputation has been built on quality workmanship,
              reliable service, and long-lasting results. We understand
              Chennai's climate and recommend the right products and
              finishes to ensure beauty, durability, and protection.
            </p>

            <ul className="mt-8 space-y-4 text-gray-200">

              <li>
                ✓ 18+ years of professional painting experience
              </li>

              <li>
                ✓ Premium interior and exterior painting solutions
              </li>

              <li>
                ✓ Waterproofing and crack-prevention systems
              </li>

              <li>
                ✓ Designer texture and accent wall finishes
              </li>

              <li>
                ✓ Personalized color consultation support
              </li>

              <li>
                ✓ Clean execution and on-time project completion
              </li>

            </ul>

          </div>

        </div>

        {/* EXPERIENCE CARD */}
        <div className="
          overflow-hidden
          rounded-[2rem]
          border
          border-accent/20
          bg-white/5
          backdrop-blur-xl
          shadow-2xl
          shadow-accent/10
        ">

              <img
                src={colorWall}
                alt="Color Wall"
                className="
              w-full
              h-64
              object-cover
              hover:scale-105
              transition
              duration-700
            "
              />

              <div className="p-8">

                <div className="
              uppercase
              tracking-[0.24em]
              text-l
              text-accent
            ">
                  Trusted by Homeowners
                </div>

                <h3 className="
              mt-4
              text-2xl
              font-semibold
              text-white
            ">
                  Premium Interior Finishes
                </h3>

                <p className="
              mt-4
              text-gray-300
              leading-7
            ">
                  We have delivered high-quality finishes
                  for apartments, villas, offices, retail
                  showrooms and commercial spaces.
                </p>

                <div className="
              mt-6
              space-y-3
              text-gray-200
            ">

                  <p>✓ Premium Accent Walls</p>

                  <p>✓ Luxury Living Room Finishes</p>

                  <p>✓ Waterproofing Solutions</p>

                  <p>✓ Modern Color Consultation</p>

                  <p>✓ Long-lasting Exterior Protection</p>

                </div>
              </div>

        </div>

      </div>

    </section>
  );
}

