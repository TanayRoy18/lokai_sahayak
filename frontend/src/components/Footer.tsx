import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Border Line */}
      <div className="border-t border-gray-800" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center justify-center gap-16 text-gray-400 text-sm text-center">
          
          {/* Left Group */}
          <div className="flex items-center gap-2">
            <span>© {currentYear} Lokai Sahayak. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for India</span>
          </div>

          {/* Middle Group (Gradient above Hindi text) */}
          <div className="flex flex-col items-center gap-1">
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-1 w-24 rounded-full"></div>
            <span>सेवा • सहायता • समाधान</span>
          </div>

          {/* Right Group */}
          <div>
            <span>Empowering Digital India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
