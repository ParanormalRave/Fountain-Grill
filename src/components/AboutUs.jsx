import { motion } from 'framer-motion';
import { fadeLeft, fadeRight, fadeUp, staggerContainer, smooth } from '../utils/motion';
import { site } from '../data/site';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 w-full">
            <motion.img
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={smooth}
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
              alt="Inside Fountain Grill"
              className="rounded-lg shadow-2xl w-full h-[320px] sm:h-[420px] md:h-[500px] object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <motion.div
              variants={staggerContainer(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={fadeRight}
                transition={smooth}
                className="uppercase tracking-[0.3em] text-primary text-sm font-semibold"
              >
                Our Story
              </motion.span>
              <motion.h2
                variants={fadeRight}
                transition={smooth}
                className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-accent mt-2 mb-6"
              >
                A Neighborhood Bar &amp; Grill
              </motion.h2>
              <motion.p
                variants={fadeRight}
                transition={smooth}
                className="text-lg text-accent mb-6 leading-relaxed"
              >
                Welcome to Fountain Grill, your go-to destination for an
                American-themed dining experience in Ashburn, Virginia. Our
                full-service bar and grill offers a diverse menu — from hearty
                burgers and tantalizing wings to scrumptious sandwiches,
                flavorful entrees, and fresh salads.
              </motion.p>
              <motion.p
                variants={fadeRight}
                transition={smooth}
                className="text-lg text-accent mb-6 leading-relaxed"
              >
                We&rsquo;re passionate about the highest quality ingredients,
                ensuring each dish is not only delicious but made with care. Our
                commitment to freshness and flavor shows in every bite, and our
                friendly staff is dedicated to making your visit exceptional.
              </motion.p>
              <motion.p
                variants={fadeRight}
                transition={smooth}
                className="text-lg text-accent mb-8 leading-relaxed"
              >
                Proudly co-owned by {site.owners[0]} and {site.owners[1]},
                we&rsquo;re grateful to be part of this community — and we look
                forward to welcoming you, whether for a meal with friends or a
                special celebration.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={smooth}
                className="flex flex-wrap gap-3"
              >
                {site.perks.map((perk) => (
                  <span
                    key={perk}
                    className="px-4 py-2 rounded-full bg-neutral-light text-accent text-sm font-medium"
                  >
                    {perk}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
