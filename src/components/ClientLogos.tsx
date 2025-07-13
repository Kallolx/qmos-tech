const ClientLogos = () => {
  // Placeholder logos - in real implementation these would be actual client logos
  const logos = [
    { name: "Client 1", src: "/images/c-1.svg" },
    { name: "Client 2", src: "/images/c-2.svg" },
    { name: "Client 3", src: "/images/c-3.svg" },
    { name: "Client 4", src: "/images/c-4.svg" },
  ];

  return (
    <section className="bg-qmos-primary py-12">
      <div className="container mx-auto text-center">
          <h2 className="bg-black p-2 px-4 rounded-lg text-4xl md:text-5xl font-bold text-qmos-light mb-6 inline-block">
            Our Clients
          </h2>
        </div>
      <div className="container mx-auto px-6 mb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-auto w-auto object-contain transition-all hover:scale-95"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;