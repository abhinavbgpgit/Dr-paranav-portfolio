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

// Menu data structure matching the document
const MENU_ITEMS = [
  {
    label: "Home",
    path: "/",
    children: [
      { label: "Welcome Message", path: "/welcome" },
      { label: "Mission / Tagline", path: "/mission" },
      { label: "Quick Highlights", path: "/highlights" },
    ],
  },
  {
    label: "About Me",
    path: "/about",
    children: [
      { label: "Profile / Biography", path: "/about/profile" },
      { label: "Qualifications", path: "/about/qualifications" },
      { label: "Family Tree", path: "/about/family" },
      { label: "Mentors & Inspirations", path: "/about/mentors" },
    ],
  },
  {
    label: "My Ventures",
    path: "/ventures",
    children: [
      { label: "Manipal Physiotherapy & Fitness Centre (2004)", path: "/ventures/manipal-physio" },
      { label: "Manipal Neuro Diagnostic Centre (2008)", path: "/ventures/neuro-diagnostic" },
      { label: "Fitness Zone (2013)", path: "/ventures/fitness-zone" },
      { label: "Hitek Physiotherapy Centre (2024)", path: "/ventures/hitek" },
      {
        label: "Pro Spine (2024)",
        path: "/ventures/pro-spine",
        children: [
          { label: "Pro Spine Academy programs", path: "/ventures/pro-spine/academy" },
        ],
      },
      { label: "Sujla Foundation (2012)", path: "/ventures/sujla" },
    ],
  },
  {
    label: "Achievements",
    path: "/achievements",
    children: [
      { label: "Awards & Recognitions", path: "/achievements/awards" },
      { label: "Media Coverage", path: "/achievements/media" },
      { label: "Memberships", path: "/achievements/memberships" },
    ],
  },
  {
    label: "Knowledge Hub",
    path: "/knowledge",
    children: [
      { label: "Areas of Expertise", path: "/knowledge/expertise" },
      { label: "Workshops & Training", path: "/knowledge/workshops" },
      { label: "Articles & Publications", path: "/knowledge/articles" },
      { label: "Motivator’s Corner", path: "/knowledge/motivator" },
    ],
  },
  {
    label: "Gallery & Contact",
    path: "/gallery-contact",
    children: [
      { label: "Photo Gallery", path: "/gallery/photos" },
      { label: "Video Gallery", path: "/gallery/videos" },
      { label: "Testimonials", path: "/gallery/testimonials" },
      { label: "Contact Me", path: "/contact" },
    ],
  },
];
const Header = () => {
  // State to track which dropdowns are open (by label)
  const [openMenus, setOpenMenus] = useState({});

  // Close all dropdowns on outside click
  const headerRef = useRef(null);
  useEffect(() => {
    const onClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenus({});
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Toggle dropdown open/close
  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // Recursive menu item renderer
  const MenuItem = ({ item, depth = 0 }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus[item.label];

    return (
      <div className={`relative group ${depth === 0 ? "mx-2" : ""}`}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            [
              depth === 0
                ? "px-4 py-2 rounded-md font-semibold text-sm transition-colors flex items-center"
                : "block px-4 py-2 text-sm rounded transition-colors whitespace-nowrap",
              isActive
                ? "bg-blue-800 text-white"
                : "hover:bg-blue-400 hover:text-white text-black",
              hasChildren ? "pr-8" : "",
              "focus:outline-none focus:ring-2 focus:ring-blue-400",
            ].join(" ")
          }
          onClick={() => {
            if (hasChildren) {
              toggleMenu(item.label);
            } else {
              setOpenMenus({});
            }
          }}
          onMouseEnter={() => {
            if (hasChildren) setOpenMenus((prev) => ({ ...prev, [item.label]: true }));
          }}
          onMouseLeave={() => {
            if (hasChildren) setOpenMenus((prev) => ({ ...prev, [item.label]: false }));
          }}
        >
          {item.label}
          {hasChildren && (
            <span className="ml-2 text-xs transition-transform group-hover:rotate-180">&#9662;</span>
          )}
        </NavLink>
        {hasChildren && isOpen && (
          <div
            className={`absolute left-0 ${depth === 0 ? "top-full" : "top-0 left-full"} mt-1 min-w-[220px] bg-white border border-gray-300 shadow-2xl rounded-lg z-50 py-1`}
            style={{
              minWidth: depth === 0 ? "220px" : "200px",
              marginLeft: depth > 0 ? "2px" : undefined,
            }}
            onMouseEnter={() => setOpenMenus((prev) => ({ ...prev, [item.label]: true }))}
            onMouseLeave={() => setOpenMenus((prev) => ({ ...prev, [item.label]: false }))}
          >
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      className="bg-white shadow-sm rounded-xl flex items-center pl-4 pr-24 py-1 mt-10"
      ref={headerRef}
    >
      <nav className="flex gap-2 font-semibold text-xs mx-auto">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.label} item={item} />
        ))}
      </nav>
      {/* Right CTA */}
      {/* <div className="flex gap-4 text-black text-sm ml-auto">
        <button className="rounded-full w-[160px] bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700 hover:shadow-md transition-colors shadow-sm">
          Call for Seminar
        </button>
      </div> */}
    </header>
  );
};

export default Header;