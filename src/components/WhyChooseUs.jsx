import { FaCheckCircle, FaUsers, FaStar, FaClock } from 'react-icons/fa'

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Our cleaning services<br />
          have no comparison
        </h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          The numbers speak for themselves
        </p>

        <div className="stats-container" data-aos="fade-up" data-aos-delay="200">
          <div className="stat-item">
            <div className="stat-icon">
              <FaUsers />
            </div>
            <div className="stat-number">12,345+</div>
            <div className="stat-label">Happy Customers</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaStar />
            </div>
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <FaClock />
            </div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs