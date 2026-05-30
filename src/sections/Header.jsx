import { useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Logo from "../assets/logosaas.png";
import MenuIcon from "../assets/menu.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80">
      
      {/* Top Bar */}
      <div className="flex justify-center gap-4 items-center bg-black text-white text-sm py-2">
        <p className="hidden md:block">
          Streamline your workflow and boost your productivity
        </p>

        <a
          href="#cta"
          className="flex items-center gap-2 hover:text-purple-300 transition"
        >
          Get started for free
          <FaArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* Navbar */}
      <div className="container mx-auto px-5 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-black/70">
            <a href="#about" className="hover:text-black transition">
              About
            </a>

            <a href="#features" className="hover:text-black transition">
              Features
            </a>

            <a href="#testimonials" className="hover:text-black transition">
              Customers
            </a>

            <a href="#pricing" className="hover:text-black transition">
              Pricing
            </a>

            <a
              href="#cta"
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Get for Free
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <img src={MenuIcon} alt="menu" className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 bg-white rounded-xl p-4 shadow-lg">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#features" onClick={() => setIsOpen(false)}>
              Features
            </a>

            <a href="#testimonials" onClick={() => setIsOpen(false)}>
              Customers
            </a>

            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </a>

            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white text-center py-3 rounded-lg"
            >
              Get for Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
