import { motion } from 'framer-motion';
import { scaleIn, fadeRight, staggerContainer, smooth } from '../utils/motion';
import { site } from '../data/site';

const features = [
  'Digital & Physical Cards',
  'No Expiration Date',
  'Available in Any Amount',
];

const GiftCards = () => {
  return (
    <section id="gift-cards" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={smooth}
          className="bg-neutral-light rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row"
        >
          <motion.div
            className="md:w-1/2 p-12 flex flex-col justify-center"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={fadeRight}
              transition={smooth}
              className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6"
            >
              Give the Gift of Flavor
            </motion.h2>
            <motion.p
              variants={fadeRight}
              transition={smooth}
              className="text-lg text-neutral-dark mb-8 leading-relaxed"
            >
              Perfect for birthdays, anniversaries, or just to say thank you. Our
              gift cards can be used for any meal at Fountain Grill.
            </motion.p>
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeRight}
                  transition={smooth}
                  className="flex items-center gap-3"
                >
                  <svg
                    className="w-5 h-5 text-primary shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-accent font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
            <motion.a
              variants={fadeRight}
              transition={smooth}
              href={site.links.giftCards}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-fit hover:scale-105"
            >
              Purchase Gift Card
            </motion.a>
          </motion.div>
          <div className="md:w-1/2 relative min-h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200"
              alt="Gift Cards"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftCards;
