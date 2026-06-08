import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, fadeRight, staggerContainer, reveal, smooth } from '../utils/motion';
import { site } from '../data/site';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...reveal()} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">
            Visit Us
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            We&rsquo;d love to hear from you. Stop by for a meal or reach out with
            any questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={fadeLeft} transition={smooth} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-1">Location</h4>
                <p className="text-neutral-dark">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline text-sm"
                >
                  Get directions →
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeLeft} transition={smooth} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-1">Hours</h4>
                {site.hours.map((h) => (
                  <p key={h.days} className="text-neutral-dark">
                    <span className="font-medium">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeLeft} transition={smooth} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-1">Contact</h4>
                <p className="text-neutral-dark">
                  <a href={site.phoneHref} className="hover:text-primary transition-colors">
                    {site.phone}
                  </a>
                  <br />
                  <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                    {site.email}
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUp} transition={smooth} className="rounded-lg overflow-hidden shadow-md border border-neutral-light">
              <iframe
                title="Fountain Grill location"
                src="https://www.google.com/maps?q=Fountain+Grill+44927+George+Washington+Blvd+Ashburn+VA+20147&output=embed"
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={smooth}
            className="bg-secondary p-8 rounded-lg shadow-sm border border-neutral-light"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your Email"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-accent mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="Your Phone (optional)"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-accent mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="How can we help? (catering, reservations, private events...)"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full btn-primary hover:scale-[1.02]">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
