import { motion} from 'framer-motion'
const GiftCards = () => {
  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }
  return (
    <section id="gift-cards" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={fadeScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="bg-neutral-light rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-6">
                Give the Gift of Flavor
              </h2>
              <p className="text-lg text-neutral-dark mb-8 leading-relaxed">
                Perfect for birthdays, anniversaries, or just to say thank you. Our gift cards can
                be used for any meal at Fountain Grill.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-accent font-medium">Digital & Physical Cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-accent font-medium">No Expiration Date</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-accent font-medium">Available in Any Amount</span>
                </div>
              </div>
              <button className="btn-primary w-fit">Purchase Gift Card</button>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200"
                alt="Gift Cards"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GiftCards
