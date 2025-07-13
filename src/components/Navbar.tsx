import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-qmos-primary text-qmos-light px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          QMOS Technology
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#know-more" className="hover:text-accent transition-colors">Know More</a>
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-qmos-light hover:text-accent hover:bg-transparent p-0 h-auto font-normal">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border shadow-elevated">
              <DropdownMenuItem>RTL Development & Verification</DropdownMenuItem>
              <DropdownMenuItem>RTL to GDSII (P&R) Services</DropdownMenuItem>
              <DropdownMenuItem>DFT Services</DropdownMenuItem>
              <DropdownMenuItem>FPGA Development</DropdownMenuItem>
              <DropdownMenuItem>Physical Design</DropdownMenuItem>
              <DropdownMenuItem>Embedded Software</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a href="#career" className="hover:text-accent transition-colors">Career</a>
          <a href="#contacts" className="hover:text-accent transition-colors">Contacts</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className={`h-0.5 bg-qmos-light transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`h-0.5 bg-qmos-light transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 bg-qmos-light transition-all ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#know-more" className="hover:text-accent transition-colors">Know More</a>
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#career" className="hover:text-accent transition-colors">Career</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Contacts</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;