import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Reviews from './pages/Reviews'
import Quote from './pages/Quote'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Certification from './components/certification'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-deepblue/95 to-deepblue">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/quote" element={<Quote/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/certification" element={<Certification/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
