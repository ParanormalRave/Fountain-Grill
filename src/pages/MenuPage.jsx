import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { menu, menuTabs } from '../data/menu';
import { site } from '../data/site';
import { fadeUp, staggerContainer, reveal, smooth } from '../utils/motion';

const MenuPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Resolve the active tab; fall back to food for unknown/missing categories.
  const activeKey = menu[category] ? category : 'food';
  const activeMenu = menu[activeKey];

  return (
    <div className="bg-secondary min-h-screen">
      {/* Header banner */}
      <div className="bg-accent text-secondary py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.15)}
        >
          <motion.p
            variants={fadeUp}
            transition={smooth}
            className="uppercase tracking-[0.3em] text-primary text-sm font-semibold mb-3"
          >
            Fountain Grill
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={smooth}
            className="text-5xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Menus
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={smooth}
            className="opacity-80 max-w-2xl mx-auto"
          >
            Fresh ingredients, bold flavor, and dishes made with care — served
            from 11am daily.
          </motion.p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-secondary/95 backdrop-blur border-b border-neutral-light">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-2 py-4">
          {menuTabs.map((tab) => {
            const isActive = tab.key === activeKey;
            return (
              <button
                key={tab.key}
                onClick={() => navigate(`/menu/${tab.key}`)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-secondary'
                    : 'text-accent hover:text-primary'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {activeMenu.note && (
              <p className="text-center text-neutral-dark italic mb-12 max-w-2xl mx-auto">
                {activeMenu.note}
              </p>
            )}

            {activeMenu.sections.map((section) => (
              <section key={section.title} className="mb-16">
                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-3xl font-serif font-bold text-primary whitespace-nowrap">
                    {section.title}
                  </h2>
                  <span className="flex-grow h-px bg-neutral-light" />
                </div>
                {section.note && (
                  <p className="text-sm text-neutral-dark italic mb-6">
                    {section.note}
                  </p>
                )}

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-6"
                  variants={staggerContainer(0.06)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {section.items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={fadeUp}
                      transition={smooth}
                      className="group border-b border-neutral-light/70 pb-4"
                    >
                      <div className="flex justify-between items-baseline gap-3">
                        <h3 className="text-lg font-semibold text-accent group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="text-primary font-bold whitespace-nowrap">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-neutral-dark text-sm mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          {...reveal()}
          className="text-center bg-neutral-light rounded-2xl p-10 mt-8"
        >
          <h3 className="text-3xl font-serif font-bold text-accent mb-3">
            {activeKey === 'catering'
              ? 'Planning an event?'
              : 'Hungry yet?'}
          </h3>
          <p className="text-neutral-dark mb-6 max-w-xl mx-auto">
            {activeKey === 'catering'
              ? 'Let us cater your next gathering. Reach out and we’ll build the perfect spread.'
              : 'Order online for pickup or stop by — we’d love to serve you.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {activeKey === 'catering' ? (
              <Link to="/#contact" className="btn-primary hover:scale-105">
                Request Catering
              </Link>
            ) : (
              <a
                href={site.links.order}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover:scale-105"
              >
                Order Online
              </a>
            )}
            <Link
              to="/"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-md font-semibold hover:bg-primary hover:text-secondary transition-all"
            >
              ← Back Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;
