import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ReactComponent as CliffordLogo } from "../assets/CliffordLogoI.svg";
import { socialLinks } from "../constants/navigation";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="/" className="flex items-center justify-center md:justify-start">
            <CliffordLogo className="h-12 w-auto text-white fill-white" /> 
          </a>
          <p className="text-gray-400 text-sm">M.Sc. Engineering Management Student</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 text-2xl transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-2xl transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Clifford Ondieki. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;