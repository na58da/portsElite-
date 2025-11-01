import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import './Header.css';
import LogoImage from '../assets/logo1/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'الرئيسية' },
       { href: '#services', label: 'خدماتنا' },
    { href: '#about', label: 'من نحن' },
 
    { href: '#contact', label: 'اتصل بنا' }
  ];

  return (
    <header 
      ref={headerRef}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <a className="logo" href="#home" aria-label="نخبة المنافذ - الرئيسية">
          <img src={LogoImage} alt="نخبة المنافذ" className="header-logo-img" />
          
        </a>
        
        <nav className={`nav ${isMenuOpen ? 'navOpen' : ''}`}>
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
         
          {/* CTA button - links to contact section */}
          <a href="#contact" className="cta-button-header" aria-label="أحجز خدمتك الآن">أحجز خدمتك الآن</a>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="قائمة التنقل"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;