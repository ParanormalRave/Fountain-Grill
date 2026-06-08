import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, reveal, smooth } from '../utils/motion';

const categories = [
  {
    name: 'Food Menu',
    image:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=800',
    path: '/menu/food',
  },
  {
    name: 'Drink Menu',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
    path: '/menu/drink',
  },
  {
    name: "Kid's Menu",
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    path: '/menu/kids',
  },
  {
    name: 'Catering Menu',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800',
    path: '/menu/catering',
  },
];

const MenuPreview = () => {
  return (
    <section id="menu" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto">
        <motion.div {...reveal()} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
            Our Menu
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            From hand-crafted Angus burgers and crispy wings to fresh bowls,
            salads, and signature cocktails — every dish is made with the
            freshest ingredients and a dash of love.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={fadeUp} transition={smooth}>
              <Link
                to={cat.path}
                className="group relative block overflow-hidden rounded-lg shadow-md aspect-square hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-secondary">
                      {cat.name}
                    </h3>
                    <span className="text-secondary/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View menu →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-secondary transition-all"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
