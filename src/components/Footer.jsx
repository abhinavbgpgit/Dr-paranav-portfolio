import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 bg-white  ">
      <div className="w-[60%] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600">
        <p className="mb-3 sm:mb-0">© 2025 Dr. Pranav. All rights reserved.</p>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-blue-600 transition-colors`
            }
            aria-label="Home"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-600 transition-colors`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-blue-600 transition-colors`
            }
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </footer>
  );
}