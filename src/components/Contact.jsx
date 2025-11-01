import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('شكراً لتواصلكم! سنرد عليكم في أقرب وقت.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "هاتف",
      details: ["+966558868787", "+966556684992"],
      link: "tel:+966558868787"
    },
    {
      icon: <FaEnvelope />,
      title: "بريد إلكتروني", 
      details: ["elite@eliteoutlets-sa.com"],
      link: "mailto:elite@eliteoutlets-sa.com"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "فروعنا",
      details: ["الرياض", "الحمراء", "جدة", "منفذ البطحاء"]
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">اتصل بنا</h2>
          <p className="section-subtitle">
            نحن هنا لمساعدتك في جميع استفساراتك واحتياجاتك اللوجستية
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>معلومات التواصل</h3>
            
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx}>
                        {item.link ? (
                          <a href={item.link}>{detail}</a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="whatsapp-section">
              <FaWhatsapp className="whatsapp-icon" />
              <div className="whatsapp-content">
                <h4>تواصل عبر واتساب</h4>
                <p>للرد السريع على استفساراتك</p>
                <a 
                  href="https://wa.me/966558868787" 
                  className="whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ابدأ المحادثة
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <h3>أرسل رسالتك</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="رسالتك..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                <FaPaperPlane className="button-icon" />
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;