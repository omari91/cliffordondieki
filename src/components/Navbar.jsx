import { useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as CliffordLogo } from "../assets/CliffordLogo.svg";
import { navigationItems } from "../constants/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
            <CliffordLogo className="h-12 w-auto" />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden md:flex space-x-6 mx-auto">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button - Desktop */}
        <div className="ml-auto hidden md:inline-block">
          <a
            href="/Resume.pdf"
            download="Clifford_Resume.pdf"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none ml-4"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center py-4">
              {navigationItems.map((item) => (
                <li key={item.id} className="py-2">
                  <Link
                    to={item.id}
                    smooth={true}
                    duration={500}
                    onClick={handleNavClick}
                    className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="py-2">
                <a
                  href="/Resume.pdf"
                  download="Clifford_Resume.pdf"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;