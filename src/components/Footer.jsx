import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column" data-aos="fade-up">
              <div className="footer-logo">
                <span className="logo-icon">🧹</span>
                <span className="logo-text">HOMIGO</span>
              </div>
              <p className="footer-description">
                Professional cleaning services for homes and offices. We provide high-quality, reliable, and eco-friendly cleaning solutions.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaLinkedinIn /></a>
              </div>
            </div>
            
            <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
              <h3 className="footer-heading">Pages</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
              <h3 className="footer-heading">Services</h3>
              <ul className="footer-links">
                <li><a href="#">Regular Cleaning</a></li>
                <li><a href="#">Deep Cleaning</a></li>
                <li><a href="#">Window Cleaning</a></li>
                <li><a href="#">Office Cleaning</a></li>
                <li><a href="#">Laundry Service</a></li>
              </ul>
            </div>
            
            <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="contact-list">
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <span>7416191169</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>info@homigo.com</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>KL UNIVERSITY,INDIA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">© 2025 HOMIGO. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer