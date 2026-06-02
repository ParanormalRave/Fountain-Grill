// import {fg_vid} from './fg_grill.mp4'
const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover "
      >
        <source
          src="https://res.cloudinary.com/dgcjcbsi5/video/upload/fg_grill_kgrknl.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Content */}
      <div className="relative z-0 flex flex-col items-center justify-center h-full text-center px-4 bg-transparent">
        <h1 className="text-5xl md:text-7xl text-secondary font-serif font-bold mb-6 drop-shadow-lg">
          Taste the Tradition
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-10 max-w-2xl font-light drop-shadow-md">
          Experience the finest grill in town, where every meal is a celebration of flavor.
        </p>
        <button className="btn-primary text-lg shadow-xl hover:scale-105 transform transition-all">
          Order Now
        </button>
      </div>

      {/* Bottom Gradient for smoother transition */}
      <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-t from-secondary to-transparent"></div>
    </div>
  )
}

export default Hero
