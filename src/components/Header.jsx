
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-deepblue/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Desktop + Mobile Header */}
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-16 lg:h-16 rounded-full overflow-hidden shadow-lg border border-white/10">
              <img
                src={logo}
                alt="Dhanalakshmi Painting Contractor"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-white font-bold text-base sm:text-lg lg:text-xl whitespace-nowrap">
                Dhanalakshmi Painting
              </h1>

              <p className="text-slate-300 text-sm lg:text-base">
                Contractor
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-xl text-accent font-semibold"
                  : "text-xl text-white hover:text-accent transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? " text-xl text-accent font-semibold"
                  : "text-xl text-white hover:text-accent transition"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-xl text-accent font-semibold"
                  : "text-xl text-white hover:text-accent transition"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-xl text-accent font-semibold"
                  : "text-xl text-white hover:text-accent transition"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="tel:+919941588083"
              className="px-4 py-2 rounded-xl bg-accent text-deepblue font-semibold hover:bg-orange-400 transition"
            >
              Call
            </a>

            <a
              href="https://wa.me/919941588083"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500 transition"
            >
              WhatsApp
            </a>

            <a
              href="/quote"
              className="px-4 py-2 rounded-xl bg-white text-deepblue font-semibold hover:bg-slate-200 transition"
            >
              Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-5 flex justify-center">
            <div className="bg-slate-900 rounded-2xl  p-6 space-y-5 ">

              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? " block text-xl text-accent font-semibold"
                    : " block text-xl text-white hover:text-accent transition"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? " block text-xl text-accent font-semibold"
                    : " block text-xl text-white hover:text-accent transition"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? " block text-xl text-accent font-semibold"
                    : " block text-xl text-white hover:text-accent transition"
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? " block text-xl text-accent font-semibold"
                    : " block text-xl text-white hover:text-accent transition"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}