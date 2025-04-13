'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 text-xl font-bold">EnhanCV</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Log In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-5 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full">
                Log In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;