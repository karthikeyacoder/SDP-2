import { FaCheckCircle } from 'react-icons/fa'

function WhatMakesUsDifferent() {
  return (
    <section id="what-makes-us-different" className="what-makes-us-different">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content" data-aos="fade-right">
            <h2 className="section-title">What makes us<br />different?</h2>
            
            <ul className="features-list">
              <li className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <FaCheckCircle className="feature-icon" />
                <div className="feature-text">
                  <h3>Attention to detail</h3>
                  <p>We focus on the smallest details to ensure your space is perfectly clean.</p>
                </div>
              </li>
              
              <li className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <FaCheckCircle className="feature-icon" />
                <div className="feature-text">
                  <h3>Eco-friendly products</h3>
                  <p>We use environmentally friendly cleaning products that are safe for your family and pets.</p>
                </div>
              </li>
              
              <li className="feature-item" data-aos="fade-up" data-aos-delay="300">
                <FaCheckCircle className="feature-icon" />
                <div className="feature-text">
                  <h3>Trained professionals</h3>
                  <p>Our cleaning staff are fully trained, insured, and background checked.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="video-container" data-aos="fade-left" data-aos-delay="200">
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
                title="Cleaning Service Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatMakesUsDifferent