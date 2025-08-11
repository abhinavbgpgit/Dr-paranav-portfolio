import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const linkBase = 'hover:text-blue-600 transition-colors';
const activeClass = 'text-blue-600 font-semibold';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow mt-11">
      <nav className="flex items-center gap-6">
        <NavLink to="/" end aria-label="Home" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : 'text-blue-500'}`}>🏠</NavLink>
        <NavLink to="/resume" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}>Resume</NavLink>
        <NavLink to="/awards" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}>Awards</NavLink>
        <NavLink to="/blog" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}>Blog</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}>Contact</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}>Gallery</NavLink>
        <NavLink to="/in-news" className={({ isActive }) => `${linkBase} ${isActive ? activeClass : ''}`}>InNews</NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Website">🌐</a>
        <a href="#" aria-label="Twitter">🐦</a>
        <a href="#" aria-label="Instagram">📷</a>
       
      </div>
    </header>
  );
}
