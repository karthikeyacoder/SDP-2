import { useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'

function TestimonialsCarousel() {
  const topRowRef = useRef(null)
  const bottomRowRef = useRef(null)
  
  // Testimonials data
  const topRowTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "The cleaning team was professional and thorough. My home has never looked better!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Office Manager",
      text: "We've been using HOMIGO for our office cleaning needs for over a year. Consistently excellent service!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Apartment Resident",
      text: "I love how they pay attention to the small details. Everything sparkles after they're done!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Business Owner",
      text: "Reliable, professional, and thorough. I highly recommend their services to anyone looking for quality cleaning.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      id: 5,
      name: "Jessica Taylor",
      role: "Real Estate Agent",
      text: "The best cleaning service I've ever used. They're always on time and do an amazing job.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/5.jpg"
    },
  ]
  
  const bottomRowTestimonials = [
    {
      id: 6,
      name: "Robert Wilson",
      role: "Homeowner",
      text: "Their eco-friendly cleaning products are a huge plus for me. My allergies have improved since I started using their services.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
      id: 7,
      name: "Amanda Lee",
      role: "Working Professional",
      text: "I appreciate how flexible they are with scheduling. Makes my busy life so much easier!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
      id: 8,
      name: "Thomas Brown",
      role: "Homeowner",
      text: "The staff is always friendly and professional. They treat my home with respect.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
      id: 9,
      name: "Sophia Martinez",
      role: "Apartment Manager",
      text: "I've tried several cleaning services, and HOMIGO is by far the best. Worth every penny!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
      id: 10,
      name: "James Anderson",
      role: "Homeowner",
      text: "Consistent quality every time. I never have to worry about the cleanliness of my home anymore.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/10.jpg"
    },
  ]

  useEffect(() => {
    // Animation for the top row (left to right)
    const animateTopRow = () => {
      if (topRowRef.current) {
        const firstCard = topRowRef.current.firstElementChild
        const cardWidth = firstCard.offsetWidth + 20 // card width + margin
        
        topRowRef.current.style.transition = 'transform 1s ease-in-out'
        topRowRef.current.style.transform = `translateX(-${cardWidth}px)`
        
        setTimeout(() => {
          topRowRef.current.style.transition = 'none'
          topRowRef.current.style.transform = 'translateX(0)'
          topRowRef.current.appendChild(firstCard)
        }, 1000)
      }
    }
    
    // Animation for the bottom row (right to left)
    const animateBottomRow = () => {
      if (bottomRowRef.current) {
        const cards = bottomRowRef.current.children
        const lastCard = cards[cards.length - 1]
        const cardWidth = lastCard.offsetWidth + 20 // card width + margin
        
        bottomRowRef.current.style.transition = 'none'
        bottomRowRef.current.style.transform = `translateX(-${cardWidth}px)`
        bottomRowRef.current.prepend(lastCard)
        
        setTimeout(() => {
          bottomRowRef.current.style.transition = 'transform 1s ease-in-out'
          bottomRowRef.current.style.transform = 'translateX(0)'
        }, 50)
      }
    }
    
    // Set intervals for animations
    const topInterval = setInterval(animateTopRow, 3000)
    const bottomInterval = setInterval(animateBottomRow, 3000)
    
    return () => {
      clearInterval(topInterval)
      clearInterval(bottomInterval)
    }
  }, [])

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title" data-aos="fade-up">
          What Our Clients Say<br />
          About Our Services
        </h2>
        
        <div className="testimonials-carousel">
          {/* Top row - left to right */}
          <div className="carousel-row" ref={topRowRef} data-aos="fade-left">
            {topRowTestimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row - right to left */}
          <div className="carousel-row" ref={bottomRowRef} data-aos="fade-right">
            {bottomRowTestimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-header">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star-icon" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel