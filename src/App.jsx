import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Reviews from './pages/Reviews.jsx'
import Quote from './pages/Quote.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Certification from './components/Certification.jsx'
import Testimonials from './components/Testimonials.jsx'
import ReviewsList from './pages/ReviewsList.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-deepblue/95 to-deepblue">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/reviewsList" element={<ReviewsList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
