import { Award, Users, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over a decade of experience in semiconductor design with proven track record of successful project deliveries."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled engineers with deep knowledge in RTL design, verification, and physical implementation."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development methodologies ensuring quick turnaround times without compromising on quality."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-qmos-primary mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver exceptional semiconductor design services that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-qmos-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;