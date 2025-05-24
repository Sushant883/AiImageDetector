import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'; // see CSS below

export default function Navbar() {
  const [scrollPct, setScrollPct] = useState(0);
  const inputRef = useRef();

  // 1. Track scroll and compute percentage
  useEffect(() => {
    const onScroll = () => {
      const { scrollY, innerHeight, documentElement } = window;
      const docHeight = documentElement.scrollHeight - innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollPct(pct);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2. Optional: focus search input when clicking icon
  const focusSearch = () => inputRef.current.focus();

  return (
    <nav className="navbar">
      {/* Scroll-progress bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      <div className="nav-content">
        {/* Div 1: Logo */}
        <div className="nav-left">
          <img src="/logo.png" alt="MyLogo" className="logo" />
        </div>

        {/* Div 2: Center links with dropdown */}
        <div className="nav-center">
          <ul className="nav-links">
            <li className="dropdown">
              <a href="#home">Home ▼</a>
              <ul className="dropdown-menu">
                <li><a href="#home1">Home Version 1</a></li>
                <li><a href="#home2">Home Version 2</a></li>
              </ul>
            </li>
            <li><a href="#about">About</a></li>
            <li className="dropdown">
              <a href="#blog">Blog ▼</a>
              <ul className="dropdown-menu">
                <li><a href="#post1">Post 1</a></li>
                <li><a href="#post2">Post 2</a></li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Div 3: Search + Login/Signup */}
        <div className="nav-right">
          <div className="search-container">
            <input
              ref={inputRef}
              type="search"
              placeholder="Search..."
            />
            <button onClick={focusSearch} className="search-btn">🔍</button>
          </div>
          <button className="btn login">Login</button>
          <button className="btn signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
