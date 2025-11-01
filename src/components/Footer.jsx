import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaInstagram, FaShippingFast, FaArrowUp } from 'react-icons/fa';
import './Footer.css';
import LogoImage from '../assets/icons/whiteLogo.png';

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
  
      content: (
        <>
          <div className="footer-logo">
           <a className="logo" href="#home" aria-label="نخبة المنافذ - الرئيسية">
                    <img src={LogoImage} alt="نخبة المنافذ" className="header-logo-img" />
                    
                  </a>
          
          </div>
          <p>نضع شحنتك على مسار الوصول لا الانتظار. نقدم حلول لوجستية متكاملة تضمن وصول شحناتك بثبات وفي الوقت المحدد وبجودة تنفيذ عالية.</p>
          <div className="newsletter">
        
            <p>إشترك في نشرتنا الاخبارية وتوصل بأحدث الآخبار عنا</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="بريدك الإلكتروني" aria-label="بريدك الإلكتروني" />
              <button type="submit">اشترك</button>
            </form>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Twitter" className="social-link">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-link">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </>
      )
    },
    {
      title: "روابط سريعة",
      links: [
        { href: "#home", label: "الرئيسية" },
        { href: "#about", label: "من نحن" },
        { href: "#services", label: "خدماتنا" },
        { href: "#process", label: "كيف نعمل" },
        { href: "#contact", label: "اتصل بنا" }
      ]
    },
    {
      title: "خدماتنا",
      links: [
        { href: "#services", label: "التخليص الجمركي" },
        { href: "#services", label: "النقل الداخلي والدولي" },
        { href: "#services", label: "الشحن الدولي" },
        { href: "#services", label: "الخدمات اللوجستية" },
        { href: "#services", label: "شهادات المطابقة" }
      ]
    },
   
  ];

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>
      
      <div className="container">
        <div className="footer-content">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4>{section.title}</h4>
              {section.content && section.content}
              {section.links && (
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} نخبة المنافذ. جميع الحقوق محفوظة.</p>
          </div>
          <div className="footer-actions">
            <button className="scroll-to-top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;