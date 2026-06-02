import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


 const fadeSlide = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
const MenuPreview = () => {
 
  const categories = [
    {
      name: 'Food Menu',
      image:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800',
      path: '/menu/breakfast',
    },
    {
      name: 'Drink Menu',
      image:
      
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
      path: '/menu/lunch',
    },
    {
      name: 'Kids Menu',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
      path: '/menu/dinner',
    },
    {
      name: 'Catering Menu',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800',
      path: '/menu/desserts',
    },
  ]

  return (
    <section id="menu" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Our Menu</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            From sunrise to sunset, we serve dishes prepared with the freshest ingredients and a
            dash of love.
          </p>
        </div>

        <motion.div
          variants={fadeSlide}
          initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{duration: 1.0, delay: 0.3}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={cat.path}
                className="group relative overflow-hidden rounded-lg shadow-md aspect-square"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-serif font-bold text-secondary">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-secondary transition-all"
          >
            View More / Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MenuPreview
