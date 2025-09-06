import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedItem, setSelectedItem] = useState({ menuIndex: null, submenuIndex: null });
  const dropdownRefs = useRef([]);
  const timeoutRef = useRef(null);

  const menuItems = [
    {
      "title": "Home",
      "path": "/"
    },
    {
      "title": "About Me",
      "path": "/about",
      "children": [
        { "name": "Profile / Biography", "path": "/about/profile", "component": "Profile" },
        { "name": "Qualifications", "path": "/about/qualifications", "component": "Qualifications" },
        { "name": "Family Tree", "path": "/about/family", "component": "FamilyTree" },
        { "name": "Mentors & Inspirations", "path": "/about/mentors", "component": "Mentors" }
      ]
    },
    {
      "title": "My Ventures",
      "path": "/ventures",
      "children": [
        { "name": "Manipal Physiotherapy & Fitness Centre (2004)", "path": "/ventures/manipal-physio", "component": "ManipalPhysio" },
        { "name": "Manipal Sports Injury Clinic (2006)", "path": "/ventures/sports-injury", "component": "ManipalSportsInjury" },
        { "name": "Manipal Pain & Spine Clinic (2007)", "path": "/ventures/pain-spine", "component": "ManipalPainSpine" },
        { "name": "Manipal Neuro Diagnostic Centre (2008)", "path": "/ventures/neuro-diagnostic", "component": "ManipalNeuroDiagnostic" },
        { "name": "Fitness Zone (2013)", "path": "/ventures/fitness-zone", "component": "FitnessZone" },
        { "name": "Hitek Physiotherapy Centre (2024)", "path": "/ventures/hitek", "component": "HitekPhysiotherapy" },
        { "name": "Pro Spine (2024)", "path": "/ventures/pro-spine", "component": "ProSpine" },
        { "name": "Sujla Foundation (2012)", "path": "/ventures/sujla", "component": "SujlaFoundation" }
      ]
    },
    {
      "title": "Achievements",
      "path": "/achievements",
      "children": [
        { "name": "Awards & Recognitions", "path": "/achievements/awards", "component": "Awards" },
        { "name": "Media Coverage", "path": "/achievements/media", "component": "MediaCoverage" },
        { "name": "Memberships", "path": "/achievements/memberships", "component": "Memberships" }
      ]
    },
    {
      "title": "Knowledge Hub",
      "path": "/knowledge",
      "children": [
        { "name": "Areas of Expertise", "path": "/knowledge/expertise", "component": "Expertise" },
        { "name": "Workshops & Training", "path": "/knowledge/workshops", "component": "Workshops" },
        { "name": "Articles & Publications", "path": "/knowledge/articles", "component": "Articles" },
        { "name": "Motivator's Corner", "path": "/knowledge/motivator", "component": "Motivator" }
      ]
    },
    {
      "title": "Gallery & Contact",
      "path": "/gallery-contact",
      "children": [
        { "name": "Photo Gallery", "path": "/gallery/photos", "component": "PhotoGallery" },
        { "name": "Video Gallery", "path": "/gallery/videos", "component": "VideoGallery" },
        { "name": "Testimonials", "path": "/gallery/testimonials", "component": "Testimonials" },
        { "name": "Contact Me", "path": "/contact", "component": "Contact" }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (menuItems[index].children) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent flickering
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-md relative z-50 rounded-2xl">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">        

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={el => dropdownRefs.current[index] = el}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children ? (
                    <button
                      onClick={() => handleMenuClick(index)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedItem.menuIndex === index
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        selectedItem.menuIndex === index
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => handleMenuClick(index)}
                    >
                      {item.title}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === index && (
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.path}
                            onClick={() => handleSubmenuClick(index, childIndex)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                              selectedItem.menuIndex === index && selectedItem.submenuIndex === childIndex
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setActiveDropdown(activeDropdown === 'mobile' ? null : 'mobile')}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {activeDropdown === 'mobile' && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <button
                      onClick={() => {
                        setActiveDropdown(activeDropdown === index ? 'mobile' : index);
                      }}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        selectedItem.menuIndex === index
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        selectedItem.menuIndex === index
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        handleMenuClick(index);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.title}
                    </Link>
                  )}
                  
                  {/* Mobile Submenu */}
                  {item.children && activeDropdown === index && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          onClick={() => {
                            handleSubmenuClick(index, childIndex);
                            setActiveDropdown(null);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                            selectedItem.menuIndex === index && selectedItem.submenuIndex === childIndex
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;