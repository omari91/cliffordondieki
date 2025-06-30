import { Link } from "react-scroll";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import profileImage from "../assets/clifford.png";
import { socialLinks } from "../constants/navigation";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src={profileImage}
            alt="Clifford Ondieki"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Animated Introduction */}
        <h1 className="mt-4 text-3xl font-bold text-gray-800">
          Hi, I'm <span className="text-blue-500">Clifford Ondieki</span>,
        </h1>
        <p className="text-lg text-gray-600">
          M.Sc. Engineering Management Student
        </p>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 border-2 border-blue-500 rounded-full p-2 transition duration-300 hover:bg-blue-500 hover:text-white"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 border-2 border-green-500 rounded-full p-2 transition duration-300 hover:bg-green-500 hover:text-white"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* CTA Button */}
        <Link
          to="testimonials"
          smooth={true}
          duration={500}
          className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 cursor-pointer transition-colors duration-200"
        >
          Let's Connect
        </Link>
      </div>
    </section>
  );
};

export default Hero;