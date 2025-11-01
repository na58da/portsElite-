import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Statistics.css';

const Statistics = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // تحريك العدادات
    countersRef.current.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += Math.ceil(target / 50);
          if (current > target) current = target;
          counter.textContent = current.toLocaleString();
          requestAnimationFrame(updateCounter);
        }
      };

      ScrollTrigger.create({
        trigger: counter,
        start: "top 80%",
        onEnter: updateCounter,
        once: true
      });
    });
  }, []);

  const stats = [
    { number: 10000, suffix: "+", label: "شحنة مكتملة", icon: "📦" },
    { number: 98, suffix: "%", label: "رضا العملاء", icon: "⭐" },
    { number: 50, suffix: "+", label: "دولة مستهدفة", icon: "🌍" },
    { number: 10, suffix: "+", label: "سنوات خبرة", icon: "🚀" }
  ];

  return (
    <section className="statistics" ref={sectionRef}>
      <div className="statistics-background">
        <div className="animated-grid">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">أرقامنا تتحدث</h2>
        <p className="section-subtitle">
          ثقة العملاء ودقة التنفيذ هي ما يميز مسيرتنا في عالم الخدمات اللوجستية
        </p>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 
                  ref={el => countersRef.current[index] = el}
                  data-target={stat.number}
                  className="counter"
                >
                  0
                </h3>
                <span className="suffix">{stat.suffix}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;