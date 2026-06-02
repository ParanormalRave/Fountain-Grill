const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-4">Visit Us</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            We'd love to hear from you. Stop by for a meal or reach out with any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-1">Location</h4>
                <p className="text-neutral-dark">
                  44927 George Washington Blvd STE 125,
                  <br /> Ashburn, VA 20147 
                  </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-1">Hours</h4>
                <p className="text-neutral-dark">
                  Sun-Thur: 11am - 9pm
                  <br />
                  Fri-Sat: 11am - 10pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-1">Contact</h4>
                <p className="text-neutral-dark">
                  (571) 918-0142
                  <br />
                  hello@fountaingrill.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-secondary p-8 rounded-lg shadow-sm border border-neutral-light">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-accent mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-neutral-light rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
