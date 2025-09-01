import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import menuItems from "../json/menuItems.json";

const Header = () => {
  // State to track which dropdowns are open (by label)
  const [openMenus, setOpenMenus] = useState({});
  // Track the active submenu path (array of labels)
  const [activePath, setActivePath] = useState([]);
  // Track the currently hovered menu path (array of labels)
  const [hoveredPath, setHoveredPath] = useState([]);
  // Get current route
  const location = useLocation();

  // Set Home active by default on initial load if path is "/"
  useEffect(() => {
    if (location.pathname === "/") {
      setActivePath(["Home"]);
    }
  }, [location.pathname]);

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

  // Handle mouse leave for the entire header to close menus
  const handleHeaderMouseLeave = () => {
    setOpenMenus({});
    setHoveredPath([]);
  };

  // Recursive menu item renderer
  const MenuItem = ({ item, depth = 0, parentPath = [] }) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus[item.label];

    // Build the full path to this item
    const thisPath = [...parentPath, item.label];

    // Helper: check if a path is a prefix of another
    const isPrefix = (prefix, arr) =>
      prefix.length <= arr.length &&
      prefix.every((v, i) => v === arr[i]);

    // Active if thisPath is a prefix of activePath
    const isActivePath = isPrefix(thisPath, activePath);

    // Hovered if thisPath is a prefix of hoveredPath
    const isHoveredPath = isPrefix(thisPath, hoveredPath);

    return (
      <div
        className={`relative group ${depth === 0 ? "mx-2" : ""}`}
        onMouseEnter={() => {
          if (hasChildren) setOpenMenus({ [item.label]: true });
          setHoveredPath(thisPath);
        }}
      >
        <NavLink
          to={item.path}
          className={({ isActive }) => {
            // Priority: active (clicked) > hovered > default
            return [
              depth === 0
                ? "px-4 py-2 rounded-md font-semibold text-sm transition-colors flex items-center"
                : "block px-4 py-2 text-sm rounded transition-colors whitespace-nowrap",
              isActivePath
                ? "bg-blue-800 text-white"
                : isHoveredPath
                  ? "bg-blue-100 text-black"
                  : "hover:bg-blue-200 hover:text-black text-black",
              hasChildren ? "pr-8" : "",
              "focus:outline-none focus:ring-2 focus:ring-blue-400",
            ].join(" ");
          }}
          onClick={() => {
            if (hasChildren) {
              // Set active path to this menu
              setActivePath((prev) => {
                // If already active, close it
                if (isPrefix(thisPath, prev)) {
                  return prev.slice(0, thisPath.length - 1);
                }
                // Set path up to this depth
                return thisPath;
              });
              toggleMenu(item.label);
            } else {
              setOpenMenus({});
              // Set active path to this item and its parents
              setActivePath(thisPath);
            }
          }}
        >
          {item.label}
          {/* Down arrow removed as per user request */}
        </NavLink>
        {hasChildren && isOpen && (
          <div
            className={`absolute left-0 ${depth === 0 ? "top-full" : "top-0 left-full"} mt-1 min-w-[220px] bg-white border border-gray-300 shadow-2xl rounded-lg z-50 py-1`}
            style={{
              minWidth: depth === 0 ? "220px" : "200px",
              marginLeft: depth > 0 ? "2px" : undefined,
            }}
          >
            {item.children.map((child) => (
              <MenuItem key={child.label} item={child} depth={depth + 1} parentPath={thisPath} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header
      className="bg-white shadow-sm rounded-xl flex items-center pl-4 pr-24 py-3"
      ref={headerRef}
      onMouseLeave={handleHeaderMouseLeave}
    >
      <nav className="flex gap-2 font-semibold text-xs mx-auto">
        {menuItems.map((item) => (
          <MenuItem key={item.label} item={item} parentPath={[]} />
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