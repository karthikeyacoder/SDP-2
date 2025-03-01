function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-content" data-aos="fade-right">
          <h2 className="section-title">How Our Services Works?</h2>
          
          <div className="step" data-aos="fade-up" data-aos-delay="100">
            <h3 className="step-title">1.Schedule Your Service</h3>
            <p className="step-description">
              Schedule Your Cleaning Service Today For A Spotless And Refreshed Space!
            </p>
          </div>
          
          <div className="step-divider" data-aos="fade-up" data-aos-delay="200"></div>
          
          <div className="step" data-aos="fade-up" data-aos-delay="300">
            <h3 className="step-title">2.Make Your Payment</h3>
          </div>
          
          <div className="step-divider" data-aos="fade-up" data-aos-delay="400"></div>
          
          <div className="step" data-aos="fade-up" data-aos-delay="500">
            <h3 className="step-title">3.Get Your Home Cleaned</h3>
          </div>
        </div>
        
        <div className="how-it-works-image" data-aos="fade-left" data-aos-delay="200">
          <img 
            src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
            alt="Cleaning Service Staff" 
          />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks