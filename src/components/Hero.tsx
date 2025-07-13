import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-[calc(100vh-6rem)] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero-bg.png')` }}
      >
        <div className="absolute inset-0 bg-qmos-primary/70 md:hidden"></div>
      </div>
      
      {/* Main Container */}
      <div className="container relative h-full mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Content Section */}
        <div className="relative z-10 w-full md:w-1/2 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-6xl font-bold text-qmos-light mb-6 leading-tight animate-fadeIn">
              WHERE SILICON MEETS INNOVATION
            </h1>
            <p className="text-lg md:text-xl text-qmos-light/90 mb-8 leading-relaxed">
              For semiconductor OEMs, fabless design houses, and electronic system design firms, 
              QMOS provides excellent semiconductor design services.
            </p>
            <Button 
              size="lg" 
              className="bg-black hover:bg-white text-qmos-light hover:text-black px-8 py-4 text-lg font-semibold rounded-xl shadow-elevated transition-all"
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;