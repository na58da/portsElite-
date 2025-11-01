import React, { useEffect, useRef } from 'react';
import { FaShippingFast, FaGlobe, FaPassport, FaHeadset } from 'react-icons/fa';
import './Hero.css';
import LogoImage from '../assets/icons/whiteLogo.png';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    let mounted = true;

    const loadAnimations = async () => {
      try {
        const gsapModule = await import('gsap');
        const ScrollTriggerModule = await import('gsap/ScrollTrigger');
        const gsap = gsapModule.default;
        const ScrollTrigger = ScrollTriggerModule.default;
        gsap.registerPlugin(ScrollTrigger);

        // ensure particles are attached
        createParticles();

        const tl = gsap.timeline();

        tl.fromTo(
          titleRef.current,
          { y: 80, opacity: 0, rotationX: 12, scale: 0.97 },
          { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
        )
          .fromTo(
            subtitleRef.current,
            { y: 40, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power2.out' },
            '-=0.9'
          )
          .fromTo(
            buttonsRef.current,
            { y: 20, opacity: 0, scale: 0.98 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
            '-=0.6'
          )
          .fromTo(
            featuresRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power2.out' },
            '-=0.5'
          );

        // light parallax on hero
        gsap.to(heroRef.current, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      } catch (err) {
        // if GSAP fails to load, silently continue (still render UI)
        // console.warn('GSAP load failed', err);
      }
    };

    if (mounted) loadAnimations();

    return () => {
      mounted = false;
      // cleanup any particles appended
      if (heroRef.current) {
        const existing = heroRef.current.querySelector('.particles-container');
        if (existing) existing.remove();
      }
    };
  }, []);

  const createParticles = () => {
    if (!heroRef.current) return;

    // remove old container if present
    const prev = heroRef.current.querySelector('.particles-container');
    if (prev) prev.remove();

    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';

    for (let i = 0; i < 18; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const w = Math.round(Math.random() * 80 + 24);
      const h = Math.round(Math.random() * 80 + 24);
      const bg = i % 4 === 0 ? 'rgba(15,76,129,0.06)' : i % 4 === 1 ? 'rgba(246,176,66,0.04)' : i % 4 === 2 ? 'rgba(255,255,255,0.03)' : 'rgba(15,76,129,0.03)';
      const borderRadius = Math.random() > 0.5 ? '50%' : '18%';

      particle.style.cssText = `
        position: absolute;
        width: ${w}px;
        height: ${h}px;
        background: ${bg};
        border-radius: ${borderRadius};
        top: ${Math.random() * 100}%;
        right: ${Math.random() * 100}%;
        filter: blur(${Math.random() * 16 + 3}px);
        opacity: ${Math.random() * 0.6 + 0.12};
        transform: translateZ(${Math.random() * 40 - 20}px);
        animation: float-soft ${Math.random() * 18 + 8}s ease-in-out ${Math.random() * 4}s infinite;
      `;

      particlesContainer.appendChild(particle);
    }

    heroRef.current.appendChild(particlesContainer);
  };

  const features = [
    { icon: <FaShippingFast />, text: 'شحن دولي' },
    { icon: <FaPassport />, text: 'تخليص جمركي' },
    { icon: <FaGlobe />, text: 'خدمات لوجستية' },
    { icon: <FaHeadset />, text: 'دعم متكامل' }
  ];

  const setFeatureRef = (el, idx) => {
    featuresRef.current[idx] = el;
  };

  const scrollToSection = (e, id, focusSelector) => {
    e && e.preventDefault();
    const el = document.getElementById(id.replace('#', ''));
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (focusSelector) {
      // focus after animation delay
      setTimeout(() => {
        const input = el.querySelector(focusSelector);
        if (input && typeof input.focus === 'function') input.focus();
      }, 550);
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="الصفحة الرئيسية">
      <div className="container hero-inner">
        <div className="hero-panel">
          <div className="hero-brand">
            <img src={LogoImage} alt="نخبة المنافذ" className="hero-logo-img" />
      
          </div>

          <h1 className="hero-title" ref={titleRef}>
شريكك الامثل في الخدمات اللوجستية المتكاملة

          </h1>

          <div className="hero-description " aria-hidden="false">     نقدّم التخليص الجمركي للأفراد و التخليص الجمركي للشركات، إضافةً إلى خدمات: 

        

الشحن الدولي — النقل — التخزين — إدارة سلاسل الإمداد — المعارض
والفعاليات — التعبئة والتغليف.

بحلول متكاملة وشبكة شركاء موثوقين نضمن سرعة الإنجاز، وضبط التكلفة
 ووصول شحناتكم بأمان وامتثال كامل للأنظمة.
</div>
          <div className="hero-actions" ref={buttonsRef}>
            <button
              type="button"
              className="hero-btn primary-3d"
              onClick={(e) => scrollToSection(e, '#contact', 'input[name="name"]')}
              aria-controls="contact"
            >
              <span className="btn-shine" aria-hidden="true"></span>
              أحجز خدمتك الآن
            </button>

            <button
              type="button"
              className="hero-btn secondary-3d"
              onClick={(e) => scrollToSection(e, '#services')}
              aria-controls="services"
            >
              <span className="btn-shine" aria-hidden="true"></span>
              شاهد خدماتنا
            </button>
          </div>

          <div className="hero-features" aria-hidden="false">
            {features.map((f, i) => (
              <div key={i} className="feature" ref={(el) => setFeatureRef(el, i)}>
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-text">{f.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration removed per request (logo now in header). */}
      </div>
    </section>
  );
};

export default Hero;