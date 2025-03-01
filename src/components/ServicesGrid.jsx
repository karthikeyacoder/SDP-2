import { 
  FaBroom, 
  FaSprayCan, 
  FaDesktop, 
  FaWindowMaximize, 
  FaTshirt 
} from 'react-icons/fa'

function ServicesGrid() {
  const services = [
    {
      icon: <FaBroom />,
      title: "Floor Cleaning",
      description: "Keep Your Floors Spotless With Deep Cleaning Solutions For Tiles, Wood, And Carpets."
    },
    {
      icon: <FaSprayCan />,
      title: "Dust Cleaning –",
      description: "Eliminate Dust And Allergens With Thorough Wiping And Surface Sanitization."
    },
    {
      icon: <FaDesktop />,
      title: "Appliance Cleaning-",
      description: "Ensure Your Appliances Shine And Function Efficiently With Expert Cleaning.."
    },
    {
      icon: <FaWindowMaximize />,
      title: "Window Cleaning-",
      description: "Get Streak-Free, Crystal-Clear Windows For A Brighter Home Or Office."
    },
    {
      icon: <FaBroom />,
      title: "Vacuum Cleaning –",
      description: "Powerful Vacuuming To Remove Dirt, Dust, And Pet Hair From All Surfaces."
    },
    {
      icon: <FaTshirt />,
      title: "Laundry Cleaning –",
      description: "Fresh, Clean, And Neatly Folded Clothes With Our Professional Laundry Care."
    }
  ]

  return (
    <section className="services-grid">
      {services.map((service, index) => (
        <div 
          className="service-card" 
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="service-icon">
            {service.icon}
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">
            {service.description}
          </p>
        </div>
      ))}

      <div className="browse-services-button-container" data-aos="fade-up">
        <button className="browse-services-button">Browse Our Services</button>
      </div>
    </section>
  )
}

export default ServicesGrid