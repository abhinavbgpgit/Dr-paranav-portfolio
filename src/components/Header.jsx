import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaTrophy,
  FaRegNewspaper,
  FaImages,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const baseTile =
    "w-20 h-16 flex flex-col items-center justify-center rounded-md transition-colors";
  const tileClass = ({ isActive }) =>
    [
      baseTile,
      isActive
        ? "bg-blue-800 text-white"
        : "hover:bg-blue-400 hover:text-white text-black",
    ].join(" ");

  return (
    <header className="bg-white shadow-sm rounded-xl flex items-center pl-4 pr-24 py-1 mt-10">
      {/* Left Icon Section (Home/About) */}
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              "w-20 h-16 rounded-l-xl flex flex-col items-center justify-center transition-colors",
              isActive ? "bg-blue-800 text-white" : "hover:bg-blue-400 hover:text-white text-black",
            ].join(" ")
          }
        >
          <FaHome className="text-lg" />
          <span className="mt-0.5 text-xs font-semibold">About</span>
        </NavLink>
      </div>

      {/* Navigation Links with icons (except MORE) */}
      <nav className="flex gap-6 ml-6 font-semibold text-xs mx-auto mr-8">
        <NavLink to="/resume" className={tileClass}>
          <FaBriefcase className="text-lg" />
          <span className="mt-0.5">Resume</span>
        </NavLink>
        <NavLink to="/awards" className={tileClass}>
          <FaTrophy className="text-lg" />
          <span className="mt-0.5">Awards</span>
        </NavLink>
        <NavLink to="/blog" className={tileClass}>
          <FaRegNewspaper className="text-lg" />
          <span className="mt-0.5">Blog</span>
        </NavLink>
        <NavLink to="/gallery" className={tileClass}>
          <FaImages className="text-lg" />
          <span className="mt-0.5">Gallery</span>
        </NavLink>
        <NavLink to="/in-news" className={tileClass}>
          <FaNewspaper className="text-lg" />
          <span className="mt-0.5">InNews</span>
        </NavLink>
        <NavLink to="/contact" className={tileClass}>
          <FaEnvelope className="text-lg" />
          <span className="mt-0.5">Contact</span>
        </NavLink>

        {/* MORE with click-to-open dropdown (no icon) */}
        <div className="relative" ref={moreRef}>
          <div className="inline-flex items-center h-16">
            <NavLink
              to="/more"
              className={({ isActive }) =>
                [
                  "px-2 py-1 rounded-md font-semibold text-sm transition-colors",
                  isActive ? "bg-blue-800 text-white" : "hover:bg-blue-400 hover:text-white text-black",
                ].join(" ")
              }
            >
              MORE
            </NavLink>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isMoreOpen}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMoreOpen((v) => !v);
              }}
              className="ml-1 h-5 w-5 flex items-center justify-center rounded transition-colors hover:bg-blue-400 hover:text-white focus:outline-none"
              title="Open more menu"
            >
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Dropdown panel */}
          {isMoreOpen && (
            <div
              role="menu"
              className="absolute left-0 mt-2 w-44 rounded-md border border-gray-200 bg-white shadow-lg py-2 z-50"
            >
              <NavLink
                to="/more/about"
                className={({ isActive }) =>
                  [
                    "block px-3 py-2 rounded-sm transition-colors",
                    isActive ? "bg-blue-800 text-white" : "text-gray-700 hover:bg-blue-400 hover:text-white",
                  ].join(" ")
                }
                onClick={() => setIsMoreOpen(false)}
                role="menuitem"
              >
                About Practice
              </NavLink>
              <NavLink
                to="/more/services"
                className={({ isActive }) =>
                  [
                    "block px-3 py-2 rounded-sm transition-colors",
                    isActive ? "bg-blue-800 text-white" : "text-gray-700 hover:bg-blue-400 hover:text-white",
                  ].join(" ")
                }
                onClick={() => setIsMoreOpen(false)}
                role="menuitem"
              >
                Services
              </NavLink>
              <NavLink
                to="/more/faqs"
                className={({ isActive }) =>
                  [
                    "block px-3 py-2 rounded-sm transition-colors",
                    isActive ? "bg-blue-800 text-white" : "text-gray-700 hover:bg-blue-400 hover:text-white",
                  ].join(" ")
                }
                onClick={() => setIsMoreOpen(false)}
                role="menuitem"
              >
                FAQs
              </NavLink>
              <NavLink
                to="/more/downloads"
                className={({ isActive }) =>
                  [
                    "block px-3 py-2 rounded-sm transition-colors",
                    isActive ? "bg-blue-800 text-white" : "text-gray-700 hover:bg-blue-400 hover:text-white",
                  ].join(" ")
                }
                onClick={() => setIsMoreOpen(false)}
                role="menuitem"
              >
                Downloads
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Right CTA */}
      <div className="flex gap-4 text-black text-sm ml-auto">
        <button className="rounded-full w-[160px] bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 hover:shadow-md transition-colors shadow-sm">
          Call for Seminar
        </button>
      </div>
    </header>
  );
};

export default Header;