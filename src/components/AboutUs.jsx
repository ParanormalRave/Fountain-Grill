import { delay, motion } from 'framer-motion'
const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }
  const fadeSlide = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
                alt="Our Story"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              variants={fadeSlide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h2 className="text-xl md:text-5xl font-serif font-bold text-primary mb-4">
                Our Story
              </h2>
              <p className="text-lg text-accent mb-6 leading-relaxed">
                Welcome to Fountain Grill, your go-to destination for an American-themed dining
                experience located in Ashburn, Virginia. Our full-service bar and grill offers a
                diverse menu that showcases everything from hearty burgers and tantalizing wings to
                scrumptious sandwiches, flavorful entrees, and fresh salads.
              </p>
              <p className="text-lg text-accent mb-6 leading-relaxed">
                At Fountain Grill, we’re passionate about providing you with the highest quality
                ingredients, ensuring that each dish we serve is not only delicious but also made
                with care and attention. Our commitment to freshness and flavor is evident in every
                bite, and our friendly and attentive staff is dedicated to ensuring that your dining
                experience is nothing short of exceptional.
              </p>
              <p className="text-lg text-accent mb-6 leading-relaxed">
                We’re proud to be a part of the local community and to have the opportunity to serve
                you. Whether you’re joining us for a meal with friends or celebrating a special
                occasion, we look forward to welcoming you to Fountain Grill and providing you with
                an unforgettable dining experience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
