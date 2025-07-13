import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-qmos-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-qmos-light mb-6 leading-tight">
            WHERE SILICON MEETS INNOVATION
          </h1>
          <p className="text-xl text-qmos-light/90 mb-8 leading-relaxed">
            For semiconductor OEMs, fabless design houses, and electronic system design firms, 
            QMOS provides excellent semiconductor design services.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-qmos-light px-8 py-4 text-lg font-semibold rounded-xl shadow-elevated transition-all hover:scale-105"
          >
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;