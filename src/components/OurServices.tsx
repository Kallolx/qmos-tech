
const OurServices = () => {
  const services = [
    {
      title: "RTL DEVELOPMENT & VERIFICATION",
      image: "/images/service/1.png",
    },
    {
      title: "RTL TO GDS-II (P&R) SERVICES",
      image: "/images/service/2.png",
    },
    {
      title: "RTL SYNTHESIS & STATIC TIMING ANALYSIS",
      image: "/images/service/3.png",     
    },
    {
      title: "DESIGN SIGN-OFF SERVICES",
      image: "/images/service/4.png",   
    },
    {
      title: "DESIGN FOR TEST SERVICES",
      image: "/images/service/5.png",      
    },
    {
      title: "ANALOG DESIGN SERVICES",
      image: "/images/service/6.png",
    }
  ];

  return (
    <section id="services" className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-bg2.png')` }}
      >
        <div className="absolute inset-0 bg-qmos-primary/70 md:hidden"></div>
      </div>

      <div className="relative container mx-auto ">
        <div className="text-center mb-8">
          <h2 className="bg-black p-2 px-4 rounded-lg text-4xl md:text-5xl font-bold text-qmos-light mb-6 inline-block">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-qmos-light rounded-xl overflow-hidden  transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden bg-qmos-primary">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-6 md:p-8 text-center bg-gradient-to-b from-qmos-light to-qmos-light/95">
                <h3 className="text-lg md:text-2xl font-extrabold text-qmos-primary tracking-wide leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;