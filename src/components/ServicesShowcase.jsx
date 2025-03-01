function ServicesShowcase() {
  return (
    <section id="services" className="services-showcase">
      <h2 className="section-title" data-aos="fade-up">Take A Look At Our<br />Professional Services</h2>
      <div className="showcase-images">
        <div className="showcase-image" data-aos="fade-right" data-aos-delay="200">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Office Cleaning" />
        </div>
        <div className="showcase-image" data-aos="fade-left" data-aos-delay="400">
          <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Laundry Service" />
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase