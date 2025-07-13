import GridLines from "react-gridlines";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "/images/i-1.svg",
      title: "STRATEGY",
      description:
        "Together with our esteemed clients local colleges, academicians and industry leaders we work to cultivate top-tier talent that will meet our esteemed clients ever-changing needs.",
    },
    {
      icon: "/images/i-2.svg",
      title: "VALUE SUMMARY",
      description:
        "We collaborate closely with our clients to fully grasp their needs to deliver a competitive, high-quality service on time.",
    },
    {
      icon: "/images/i-3.svg",
      title: "GLOBAL RESEARCH",
      description:
        "Our global panel of technical consultants has over 2 years of expertise working for top semiconductor firms.",
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-20 bg-qmos-primary overflow-hidden">
      <div className="absolute inset-0">
        <GridLines
          className="w-full h-full"
          cellWidth={64}
          strokeWidth={2}
          cellWidth2={64}
          lineColor="rgba(255, 255, 255, 0.05)"
        />
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="bg-black p-2 px-4 rounded-lg text-4xl md:text-5xl font-bold text-qmos-light mb-6 inline-block">
            Why Choose Us ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="md:bg-white p-8 rounded-2xl shadow-card transition-all duration-300 text-center relative"
            >
              <div className="bg-white rounded-xl shadow-[0_12px_15px_-3px_rgba(0,0,0,0.75)] p-4 relative z-10 mx-2 flex flex-col items-center justify-center min-h-[340px] transition-all duration-300 hover:scale-95 cursor-pointer">
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img
                    src={feature.icon}
                    alt={feature.title + " icon"}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-extrabold text-qmos-primary mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
