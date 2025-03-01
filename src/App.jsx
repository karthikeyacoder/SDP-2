import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesShowcase from './components/ServicesShowcase'
import ServicesGrid from './components/ServicesGrid'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import FAQ from './components/FAQ'
import BookingSection from './components/BookingSection'
import NewsArticles from './components/NewsArticles'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'

function App() {
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    })
  }, [])

  return (
    <div className="app-container">
      {/* Cursor Follower */}
      <CursorFollower />
      
      {/* Navigation Bar */}
      <Navbar cartItems={cartItems} />

      {/* Hero Section */}
      <Hero />

      {/* Services Showcase Section */}
      <ServicesShowcase />

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* What Makes Us Different Section */}
      <WhatMakesUsDifferent />
      
      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel />
      
      {/* FAQ Section */}
      <FAQ />
      
      {/* Booking Section */}
      <BookingSection />
      
      {/* News & Articles Section */}
      <NewsArticles />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App