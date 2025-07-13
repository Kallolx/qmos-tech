import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";
import service4 from "@/assets/service-4.jpg";
import service5 from "@/assets/service-5.jpg";
import service6 from "@/assets/service-6.jpg";
import servicesBg from "@/assets/services-bg.jpg";

const OurServices = () => {
  const services = [
    {
      title: "RTL DEVELOPMENT & VERIFICATION",
      image: service1,
      description: "Complete RTL design and verification solutions for complex semiconductor projects."
    },
    {
      title: "RTL TO GDSII (P&R) SERVICES",
      image: service2,
      description: "Full physical design flow from RTL to manufacturable GDSII layout."
    },
    {
      title: "DFT SERVICES",
      image: service3,
      description: "Design for Test solutions ensuring high test coverage and manufacturability."
    },
    {
      title: "FPGA DEVELOPMENT",
      image: service4,
      description: "FPGA design, implementation, and optimization for rapid prototyping."
    },
    {
      title: "PHYSICAL DESIGN",
      image: service5,
      description: "Complete physical design services including floorplanning and timing closure."
    },
    {
      title: "EMBEDDED SOFTWARE",
      image: service6,
      description: "Embedded software development for semiconductor and IoT applications."
    }
  ];

  return (
    <section id="services" className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-qmos-primary/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-qmos-light mb-6">
            Our Services
          </h2>
          <p className="text-xl text-qmos-light/90 max-w-3xl mx-auto">
            Comprehensive semiconductor design services tailored to meet your specific requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-qmos-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;