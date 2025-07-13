const ClientLogos = () => {
  // Placeholder logos - in real implementation these would be actual client logos
  const logos = [
    { name: "Client 1", placeholder: "C1" },
    { name: "Client 2", placeholder: "C2" },
    { name: "Client 3", placeholder: "C3" },
    { name: "Client 4", placeholder: "C4" },
  ];

  return (
    <section className="bg-qmos-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-32 h-20 bg-qmos-light rounded-lg flex items-center justify-center shadow-card hover:shadow-elevated transition-all hover:scale-105">
                <span className="text-qmos-primary font-bold text-2xl">
                  {logo.placeholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;