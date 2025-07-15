import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Linkedin, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer
      id="contacts"
      className="bg-qmos-primary text-qmos-light pt-8 pb-8"
      role="contentinfo"
    >
      
        <div className="container mx-auto p-4 px-8 border border-white/50 rounded-xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center text-center md:text-left">
            {/* Company Logo & About Us */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {/* Logo */}
              <div className="mb-6">
                <img src="/images/logo.svg" alt="Qmos Technology Logo" />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">About Us</h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                    >
                      Overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#why-choose-us"
                      className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                    >
                      Why Choose Us?
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feedback Form */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left mt-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full max-w-md"
              >
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
                  className="bg-black hover:bg-white text-qmos-light hover:text-black w-full"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-center md:items-center text-center md:text-left">            
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>
                  <h4 className="font-semibold text-lg mb-2">
                    QMOS Technology
                  </h4>
                  <div className="text-qmos-light/80 space-y-2">
                    <address>
                      <p>House-418, Block-I, Road-4</p>
                      <p>Bashundhara R/A, Dhaka, 1229</p>
                      <p>Phone: +880 1779-360042</p>
                      <p className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                        <a
                          href="mailto:info@qmostechnology.com"
                          className="flex items-center gap-2 text-md text-background hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          info@qmostechnology.com
                        </a>
                      </p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-qmos-light/80">
                <a
                  href="#terms"
                  className="hover:text-gray-400 transition-colors"
                >
                  Security | Your Privacy | Terms
                </a>
              </div>

              <div>
                <span>
                  &copy; Copyright 2025 {""}
                  <a
                    href="https://qourin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block font-normal text-background hover:underline"
                  >
                    QOURIN
                    <sup className="text-xs absolute -top-1 -right-3">™</sup>
                  </a>
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-qmos-light/80 hover:text-gray-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
