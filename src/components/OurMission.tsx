const OurMission = () => {
  return (
    <section id="our-mission" className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-bg3.png')` }}
      >
        <div className="absolute inset-0 bg-qmos-primary/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="bg-black p-2 px-4 rounded-lg text-4xl md:text-5xl font-bold text-qmos-light mb-6 inline-block">
            Our Mission
          </h2>
        </div>
        <div className="max-w-6xl mx-auto overflow-hidden rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="aspect-square lg:aspect-auto">
              <img
                src="/images/hero-bg3-1.png"
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm">
              <h2 className="text-xl text-center p-2 border border-white font-bold text-white mb-6">
                Why QMOS Technology ?
              </h2>
              <div className="space-y-6 text-white/90 text-center">
                <p className="text-lg leading-tight">
                  For semiconductor OEMs, fabless design houses, and electronic
                  system design firms, QMOS provides excellent semiconductor
                  design services.
                </p>
                <h2 className="text-xl text-center p-2 border border-white font-bold text-white mb-6">
                  Our Working Model
                </h2>
                <p className="text-md leading-relaxed">
                  The semiconductor manufacturing involves intricate processes
                  to create electronic components. Initially, a silicon wafer is
                  prepared and undergoes photolithography, deposition, etching,
                  and doping to form transistors and interconnects. Subsequent
                  steps include testing and packaging. Precision and cleanliness
                  are crucial to ensure the production of high-quality and
                  reliable semiconductor devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
