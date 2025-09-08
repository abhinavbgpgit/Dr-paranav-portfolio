// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import menuItems from './menuItems';
import logo from '../assets/logo/logo.png'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedItem, setSelectedItem] = useState({ menuIndex: null, submenuIndex: null });
  const dropdownRefs = useRef([]);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Auto-highlight based on route
  useEffect(() => {
    menuItems.forEach((item, menuIndex) => {
      if (location.pathname === item.path) {
        setSelectedItem({ menuIndex, submenuIndex: null });
      }
      item.children?.forEach((child, childIndex) => {
        if (location.pathname === child.path) {
          setSelectedItem({ menuIndex, submenuIndex: childIndex });
        }
      });
    });
  }, [location.pathname]);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (menuItems[index].children) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleSubmenuClick = (menuIndex, submenuIndex) => {
    setSelectedItem({ menuIndex, submenuIndex });
    setActiveDropdown(null);
  };

  const handleMenuClick = (index) => {
    if (!menuItems[index].children) {
      setSelectedItem({ menuIndex: index, submenuIndex: null });
      setActiveDropdown(null);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown !== null &&
        activeDropdown !== 'mobile' &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Dropdown fade animation (no movement)
  const dropdownVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
  };

  // Mobile menu slide
  const mobileMenuVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 rounded-b-2xl shadow-sm h-24">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 h-24">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-bold text-xl text-gray-800"
        >
          <Link to="/" className="no-underline flex items-center">
            <img
              src={logo}
              alt="Dr. Manipal Logo"
              className="h-12 w-auto"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 relative">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              ref={(el) => (dropdownRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children ? (
                <button
                  onClick={() => handleMenuClick(index)}
                  className={`relative px-5 py-3 font-medium rounded-lg transition-colors duration-300 ${
                    selectedItem.menuIndex === index
                      ? 'text-white bg-blue-600'
                      : 'text-gray-700 hover:text-white hover:bg-blue-600'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.title}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      } ${
                        selectedItem.menuIndex === index
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-white'
                      }`}
                    />
                  </span>
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => handleMenuClick(index)}
                  className={`relative px-5 py-3 font-medium rounded-lg transition-colors duration-300 ${
                    selectedItem.menuIndex === index
                      ? 'text-white bg-blue-600'
                      : 'text-gray-700 hover:text-white hover:bg-blue-600'
                  }`}
                >
                  {item.title}
                </Link>
              )}

              {/* Animated Dropdown — Fade only, no movement */}
              <AnimatePresence>
                {item.children && activeDropdown === index && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                  >
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          to={child.path}
                          onClick={() => handleSubmenuClick(index, childIndex)}
                          className={`block px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                            selectedItem.menuIndex === index &&
                            selectedItem.submenuIndex === childIndex
                              ? 'bg-blue-50 text-blue-700'
                              : 'text-gray-800 hover:bg-blue-50 hover:text-blue-700'
                          }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {activeDropdown === 'mobile' && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === index ? 'mobile' : index)
                      }
                      className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-lg transition-colors ${
                        selectedItem.menuIndex === index
                          ? 'text-white bg-blue-600'
                          : 'text-gray-700 hover:text-white hover:bg-blue-600'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => {
                        handleMenuClick(index);
                        setActiveDropdown(null);
                      }}
                      className={`block w-full px-4 py-3 font-medium rounded-lg transition-colors ${
                        selectedItem.menuIndex === index
                          ? 'text-white bg-blue-600'
                          : 'text-gray-700 hover:text-white hover:bg-blue-600'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Mobile Submenu — Fade in place */}
                  <AnimatePresence>
                    {item.children && activeDropdown === index && (
                      <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.35 } }}
                        exit={{ opacity: 0, transition: { duration: 0.25 } }}
                        className="ml-2 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                      >
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              to={child.path}
                              onClick={() => {
                                handleSubmenuClick(index, childIndex);
                                setActiveDropdown(null);
                              }}
                              className={`block px-5 py-3 text-sm font-medium transition-colors ${
                                selectedItem.menuIndex === index &&
                                selectedItem.submenuIndex === childIndex
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-800 hover:bg-blue-50 hover:text-blue-700'
                              }`}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header