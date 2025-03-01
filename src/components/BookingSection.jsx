import { useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'regular',
    date: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData)
    alert('Booking request submitted! We will contact you shortly.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'regular',
      date: '',
      message: ''
    })
  }

  return (
    <section id="booking" className="booking-section">
      <div className="booking-container">
        <div className="booking-content" data-aos="fade-right">
          <h2 className="section-title">
            Requesting A Free<br />
            Cleaning Quote?
          </h2>
          <p className="booking-subtitle">
            Get started today! Our team will contact you to discuss your cleaning needs and provide a customized quote.
          </p>
          
          <div className="contact-info">
            <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h3>Our Location</h3>
                <p>KL University</p>
              </div>
            </div>
            
            <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
              <FaPhoneAlt className="contact-icon" />
              <div>
                <h3>Call Us</h3>
                <p>7416191169</p>
              </div>
            </div>
            
            <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
              <FaCalendarAlt className="contact-icon" />
              <div>
                <h3>Working Hours</h3>
                <p>Mon-Sat: 8AM - 7PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="booking-form-container" data-aos="fade-left">
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Request a Quote</h3>
            
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Your Phone" 
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <select 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="regular">Regular Cleaning</option>
                <option value="deep">Deep Cleaning</option>
                <option value="window">Window Cleaning</option>
                <option value="office">Office Cleaning</option>
                <option value="laundry">Laundry Service</option>
              </select>
            </div>
            
            <div className="form-group">
              <input 
                type="date" 
                name="date" 
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Additional Information" 
                value={formData.message}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Get Free Quote</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BookingSection