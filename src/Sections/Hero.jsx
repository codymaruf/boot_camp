const Hero = () => {
  return (
    <section id='home' className="relative z-0 w-full h-screen overflow-hidden">
      {/* Background Video */}
      <img 
      src="/assets/gymmen1.jpg" 
      alt="background"
      className="absolute inset-0 z-10 w-full h-full object-cover opacity-40" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <img 
      src="/assets/bootcamp.jpg" 
      alt="background"
      className="rounded-full h-25" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Transform Your Body <br /><span className="text-gray"> at Boot Camp</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-8 text-gray">
          Sylhet's premier fitness destination — personal training, group workouts, and real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-white text-black px-3 py-2 rounded-full font-bold hover:bg-orange transition"
          >
            Join Now
          </a>
          <a
            href="#services"
            className="bg-gray-700 text-white px-3 py-2 rounded-full font-medium hover:bg-orange transition"
          >
            View Classes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
