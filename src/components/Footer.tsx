import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your feedback. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contacts" className="bg-qmos-primary text-qmos-light pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Logo & About Us */}
          <div>
            <div className="text-2xl font-bold mb-6">QMOS Technology</div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-qmos-light/80 leading-relaxed">
                Leading semiconductor design services company providing innovative solutions 
                for RTL development, verification, and physical design to help our clients 
                achieve their technological goals.
              </p>
            </div>
          </div>

          {/* Feedback Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Feedback</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-qmos-light/10 border-qmos-light/20 text-qmos-light placeholder:text-qmos-light/60"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-qmos-light/10 border-qmos-light/20 text-qmos-light placeholder:text-qmos-light/60"
                required
              />
              <Textarea
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="bg-qmos-light/10 border-qmos-light/20 text-qmos-light placeholder:text-qmos-light/60 min-h-[100px]"
                required
              />
              <Button 
                type="submit"
                className="bg-accent hover:bg-accent/90 text-qmos-light w-full"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">QMOS Technology</h4>
                <div className="text-qmos-light/80 space-y-2">
                  <p>1234 Silicon Valley Drive</p>
                  <p>Tech Hub, California 94000</p>
                  <p>United States</p>
                  <p className="flex items-center gap-2 mt-4">
                    <Mail className="w-4 h-4" />
                    info@qmostech.com
                  </p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-qmos-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-qmos-light/80">
              <a href="#terms" className="hover:text-accent transition-colors">Terms and Conditions</a>
              <span>&copy; 2024 QMOS Technology. All rights reserved.</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-qmos-light/80 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-qmos-light/80 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-qmos-light/80 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;