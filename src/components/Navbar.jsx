import { useState } from 'react'
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

function Navbar({ cartItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-icon">🧹</span>
          <span className="logo-text">HOMIGO</span>
        </div>
      </div>
      
      {/* Mobile menu toggle button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      {/* Navigation links - will slide in from left on mobile */}
      <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <a href="#home" className="nav-link active" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#cart" className="nav-link cart" onClick={() => setIsMenuOpen(false)}>
            Cart ({cartItems})
          </a>
        </div>
      </div>
      
      <button className="login-button">
        <FaUser className="login-icon" />
        Login
      </button>
    </nav>
  )
}

export default Navbar