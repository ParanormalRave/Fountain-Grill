import { motion } from 'framer-motion'
const HonorFlight = () => {
  const fadeSlide = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 1 },
  }
  return (
    <section id="honor-flight" className="section-padding bg-accent text-secondary">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Honor Flight</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            We are proud supporters of the Honor Flight Network. It is our privilege to honor those
            who have sacrificed so much for our freedom.
          </p>
        </motion.div>
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-left">
            <div className="md:w-1/2">
              <img
                src="https://fountaingrillva.com/wp-content/uploads/2025/02/Honor-Flight-Banner1-768x256.png"
                alt="Honor Flight"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-3xl font-serif font-semibold text-primary">
                Supporting Our Veterans
              </h3>
              <p className="text-lg opacity-80">
                At Fountain Grill, we host regular fundraising events and provide special meals for
                veterans participating in the Honor Flight program.
              </p>
              <p className="text-lg opacity-80">
                For every meal sold during our monthly "Honor Days," a portion of the proceeds goes
                directly to funding flights for our local heroes to visit their memorials in
                Washington, D.C.
              </p>
              <button className="bg-primary text-secondary px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                Learn How to Help
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HonorFlight
