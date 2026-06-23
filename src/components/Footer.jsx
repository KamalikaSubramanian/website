
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    const whatsappMessage =
    "Hello Dhanalakshmi Painting Contractor 🎨✨\n\n🏡 Excited to transform my property with a fresh and elegant new look!\nLooking forward to connecting with your team ✨ ";
  return (
    <footer className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
              Dhanalakshmi Painting
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              Contractor
            </p>

            <div className="w-16 h-1 bg-accent rounded-full mt-4 mx-auto md:mx-0"></div>

            <p className="mt-4 text-slate-300 text-sm md:text-base leading-7">
              Professional interior, exterior, waterproofing,
              texture painting and repainting solutions
              delivered with quality workmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="w-14 h-1 bg-accent rounded-full mt-3 mb-5 mx-auto md:mx-0"></div>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-accent transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-accent transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-slate-300 hover:text-accent transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-300 hover:text-accent transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Contact Us
            </h3>

            <div className="w-14 h-1 bg-accent rounded-full mt-3 mb-5 mx-auto md:mx-0"></div>

            <div className="space-y-4 text-slate-300">

              {/* Phone Numbers */}
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="text-lg">📞</span>

                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919941588083"
                    className="font-medium hover:text-accent transition"
                  >
                    +91 99415 88083
                  </a>

                  <a
                    href="tel:+919841967211"
                    className="font-medium hover:text-accent transition"
                  >
                    +91 98419 67211
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send?phone=919941588083&text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-green-400 transition"
              >
                <FaWhatsapp className="text-2xl text-green-500 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>

              {/* Email */}
              <a
                href="mailto:jaikumardhanush18@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-accent transition break-all"
              >
                <span className="text-lg">📧</span>

                <span>
                  jaikumardhanush18@gmail.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="max-w-xs">
                  📍 Aziz Nagar 1st Street,
                  Kodambakkam,
                  Chennai - 600024
                </span>
              </div>

            </div>
            {/* Instagram */}
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/dhanalakshmi_painting_works?igsh=djh3cG5iaDV2bnpk"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  via-pink-500
                  to-orange-400
                  px-4 py-3
                  text-white
                  shadow-lg
                  hover:scale-105
                  transition
                "
              >
                <FaInstagram className="text-md" />

                <div className="text-left">
                  <p className="font-semibold text-sm">
                    Follow on Instagram
                  </p>

                  <p className="text-xs opacity-90">
                    @dhanalakshmi_painting_works
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Dhanalakshmi Painting Contractor.
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}