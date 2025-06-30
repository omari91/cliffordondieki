import { Link } from "react-router-dom";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profileImage from "../assets/clifford.png";
import { socialLinks } from "../constants/navigation";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-8">
          <img
            src={profileImage}
            alt="Clifford Ondieki"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Animated Introduction */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-blue-500">Clifford Ondieki</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          M.Sc. Engineering Management Student
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Passionate about healthcare technology innovation and product operations. 
          Currently pursuing advanced studies in Engineering Management while driving 
          impactful solutions in the HealthTech space.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 border-2 border-blue-500 rounded-full p-3 transition duration-300 hover:bg-blue-500 hover:text-white transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 border-2 border-green-500 rounded-full p-3 transition duration-300 hover:bg-green-500 hover:text-white transform hover:scale-110"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
          >
            Learn More About Me
          </Link>
          <Link
            to="/experience"
            className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-200"
          >
            View My Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;