import { FaArrowRight } from 'react-icons/fa'

function NewsArticles() {
  const articles = [
    {
      id: 1,
      title: "How to Properly Clean Tiles and Grout",
      category: "Cleaning Tips",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt: "Learn the best techniques for keeping your tiles spotless and grout lines clean."
    },
    {
      id: 2,
      title: "Eco-Friendly Cleaning Products You Should Try",
      category: "Green Cleaning",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt: "Discover environmentally friendly cleaning solutions that are effective and safe."
    },
    {
      id: 3,
      title: "How Regular Cleaning Affects Your Health",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      excerpt: "The surprising ways a clean home can improve your physical and mental wellbeing."
    }
  ]

  return (
    <section id="news" className="news-articles-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">News & Articles</h2>
          <a href="#" className="view-all-link">
            View all articles <FaArrowRight className="arrow-icon" />
          </a>
        </div>
        
        <div className="articles-grid">
          {articles.map((article, index) => (
            <div 
              className="article-card" 
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="article-image">
                <img src={article.image} alt={article.title} />
                <div className="article-category">{article.category}</div>
              </div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <a href="#" className="read-more-link">
                  Read More <FaArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsArticles