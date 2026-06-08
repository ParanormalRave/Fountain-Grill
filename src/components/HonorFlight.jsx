import { motion } from 'framer-motion';
import { fadeUp, fadeRight, staggerContainer, smooth } from '../utils/motion';
import { site } from '../data/site';

const HonorFlight = () => {
  return (
    <section
      id="honor-flight"
      className="section-padding bg-accent text-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={fadeUp}
            transition={smooth}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Honor Flight Meals
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={smooth}
            className="text-xl mb-12 max-w-3xl mx-auto opacity-90"
          >
            We are proud to deliver delicious meals to our beloved veterans
            throughout the DMV. It is our privilege to honor those who have
            sacrificed so much for our freedom.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-left">
          <motion.div
            className="md:w-1/2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={smooth}
          >
            <img
              src="https://fountaingrillva.com/wp-content/uploads/2025/02/Honor-Flight-Banner1-768x256.png"
              alt="Honor Flight"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 space-y-6"
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h3
              variants={fadeRight}
              transition={smooth}
              className="text-3xl font-serif font-semibold text-primary"
            >
              Supporting Our Veterans
            </motion.h3>
            <motion.p
              variants={fadeRight}
              transition={smooth}
              className="text-lg opacity-80"
            >
              We prepare cold-cut sandwiches, cheeseburgers, chicken sandwiches,
              wraps, and salads — each made with meticulous attention to quality
              and taste — and deliver them to all memorials and Virginia
              airports.
            </motion.p>
            <motion.p
              variants={fadeRight}
              transition={smooth}
              className="text-lg opacity-80"
            >
              Our team stays on-site to help distribute meals and follows a
              strict &ldquo;no trash left behind&rdquo; policy, taking all waste
              back to our store so the memorials stay pristine. Ice for coolers
              is available on request to keep everything fresh.
            </motion.p>
            <motion.div variants={fadeRight} transition={smooth}>
              <a
                href={site.phoneHref}
                className="inline-block bg-primary text-secondary px-8 py-3 rounded-md font-semibold hover:scale-105 transition-transform"
              >
                Call to Arrange Meals
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HonorFlight;
