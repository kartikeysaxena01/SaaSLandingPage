import Logosaas from "../assets/logosaas.png";
import Social from "../assets/social-insta.svg";
import Social_L from "../assets/social-linkedin.svg";
import Social_Youtube from "../assets/social-youtube.svg";
import Social_X from "../assets/social-x.svg";
const Footer = () => {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-5">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          
          {/* Logo */}
          <img
            src={Logosaas}
            alt="Logo"
            className="h-12 w-auto"
          />

          {/* Description */}
          <p className="mt-6 max-w-md text-gray-400">
            Build better habits, stay productive, and achieve your goals
            with a powerful platform designed to help you succeed.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-300">
            <a href="#" className="hover:text-white transition">
              Features
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              Testimonials
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
          <div className="py-10 gap-10 max-w-6xl mx-auto flex flex-row items-center text-center">
            
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={Social} alt="instaLogo" className="h-12 w-auto cursor-pointer"/>
              </a>
               <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src={Social_L} alt="linkedin" className="h-12 w-auto cursor-pointer"/>
              </a>
               <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
              <img src={Social_Youtube} alt="yotube" className="h-12 w-auto cursor-pointer"/>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src={Social_X} alt="yotube" className="h-12 w-auto cursor-pointer"/>
              </a>
          </div>
          {/* Divider */}
          <div className="w-full h-px bg-gray-800 my-8"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
