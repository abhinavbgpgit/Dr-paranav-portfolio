import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFacebookF, FaWhatsapp, FaDribbble, FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
  <header className="bg-white shadow-sm rounded-xl flex items-center pl-4 pr-24 py-1 mt-10">
      {/* Left Icon Section */}
  <Link to="/" className=" bg-blue-800 w-20 h-16 rounded-l-xl flex items-center justify-center">
        <FaHome className="text-white text-lg" />
      </Link>

      {/* Navigation Links */}
  <nav className="flex gap-6 ml-6 font-semibold text-sm mx-auto mr-8">
        <Link to="/resume" className="hover:text-blue-600">RESUME</Link>
        <Link to="/awards" className="hover:text-blue-600">AWARDS</Link>
        <Link to="/blog" className="hover:text-blue-600">BLOG</Link>
        <Link to="/gallery" className="hover:text-blue-600">GALLERY</Link>
        <Link to="/in-news" className="hover:text-blue-600">INNEWS</Link>
        <Link to="/contact" className="hover:text-blue-600">CONTACT</Link>
      </nav>

      {/* Social Icons shifted to the far right */}
      <div className="flex gap-4 text-black text-sm ml-auto">
        <a href="#" className="group">
          <FaWhatsapp className="text-2xl group-hover:text-green-500 transition-colors duration-200" />
        </a>
        <a href="#" className="group">
          <FaFacebookF className="text-2xl group-hover:text-blue-600 transition-colors duration-200" />
        </a>
        <a href="#" className="group">
          <FaXTwitter className="text-2xl group-hover:text-black transition-colors duration-200" />
        </a>
      </div>

  {/* Hire Me Button removed as requested */}
    </header>
  );
};

export default Header;