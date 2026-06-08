import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="relative h-[88vh] w-full overflow-hidden">
      {/* Background Video (opening video — kept as-is) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dgcjcbsi5/video/upload/fg_grill_kgrknl.mp4"
          type="video/mp4"
        />
      </video>

      {/* Darkening overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 via-accent/20 to-accent/60" />

      {/* Overlay Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.span
          variants={item}
          className="uppercase tracking-[0.35em] text-secondary/90 text-sm md:text-base mb-5 drop-shadow"
        >
          Ashburn, Virginia
        </motion.span>
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl text-secondary font-serif font-bold mb-6 drop-shadow-lg"
        >
          Taste the Tradition
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-secondary mb-10 max-w-2xl font-light drop-shadow-md"
        >
          {site.tagline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
          <a
            href={site.links.order}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg shadow-xl hover:scale-105 transform transition-all"
          >
            Order Now
          </a>
          <Link
            to="/menu/food"
            className="text-lg px-8 py-3 rounded-md font-semibold border-2 border-secondary text-secondary hover:bg-secondary hover:text-accent transition-all"
          >
            View Menu
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          className="w-7 h-7 text-secondary/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

      {/* Bottom Gradient for smoother transition */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-secondary to-transparent" />
    </div>
  );
};

export default Hero;
