import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  
  const faqItems = [
    {
      id: 1,
      question: "What is included in the basic cleaning service?",
      answer: "Our basic cleaning service includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. We focus on high-traffic areas and ensure all visible surfaces are clean and sanitized."
    },
    {
      id: 2,
      question: "Can I book the same cleaner always?",
      answer: "Yes! We understand the importance of consistency and trust. You can request the same cleaner for all your appointments, and we'll do our best to accommodate your preference based on their availability."
    },
    {
      id: 3,
      question: "Do You Offer Weekly Cleaning Service?",
      answer: "Yes, we offer flexible scheduling options including weekly, bi-weekly, and monthly cleaning services. Our weekly service is popular for busy households and offices that need consistent maintenance."
    },
    {
      id: 4,
      question: "Are You Properly Using Cleaning Staff?",
      answer: "All our cleaning staff are professionally trained, background-checked, and insured. We ensure they follow our strict cleaning protocols and use proper techniques and equipment for each task."
    }
  ]
  
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="section-title" data-aos="fade-up">
          Frequently Asked<br />
          Questions
        </h2>
        
        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <h3>{item.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: activeIndex === index ? '300px' : '0',
                  padding: activeIndex === index ? '1.5rem' : '0 1.5rem',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-out'
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ