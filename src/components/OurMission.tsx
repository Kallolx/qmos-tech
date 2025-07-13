import missionBg from "@/assets/mission-bg.jpg";
import missionImage from "@/assets/mission-image.jpg";

const OurMission = () => {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${missionBg})` }}
      >
        <div className="absolute inset-0 bg-qmos-primary/75"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-background rounded-3xl shadow-elevated overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="aspect-square lg:aspect-auto">
              <img 
                src={missionImage}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-qmos-primary mb-6">
                Our Mission
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  To empower semiconductor companies with cutting-edge design solutions that 
                  accelerate innovation and drive technological advancement in the digital age.
                </p>
                <p className="text-lg leading-relaxed">
                  We are committed to delivering excellence in every project, from initial 
                  concept to final implementation, ensuring our clients stay ahead in the 
                  competitive semiconductor landscape.
                </p>
                <p className="text-lg leading-relaxed">
                  Our vision is to be the trusted partner for semiconductor design services, 
                  recognized for our technical expertise, innovation, and unwavering commitment 
                  to quality.
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