import React from 'react';
import { FaRocket, FaEye, FaHandshake, FaUsers, FaChartLine, FaGlobeAmericas } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: "نقدم الجودة كحد أدنى لا كميزة",
      description: " نلتزم بمعايير تنفيذ عالية تتجاوز المتوقع وتثبت نفسها في النتيجة، لا في الوعود."
    },
    {
      icon: <FaChartLine />,
      title: "التطوير نهج تشغيل لا قرار موسمي ",
      description: "نبحث باستمرار عما يمكن تحسينه وتحويله إلى تفوق  تنافسي ملموس في الخدمة "
    },
    {
      icon: <FaEye />,
      title: "الوضوح هو أساس العلاقة الاحترافية",
      description: "نمارس الشفافية في التعامل والقرار لأن الثقة تُبْنى بالأفعال لا بالشعارات."
    },
    {
      icon: <FaHandshake />,
      title: " نلتزم ببناء قيمة وطنية قبل بناء الربح ",
      description: " ننسجم مع رؤية 2030 ونقدم حلولاً تدعم اقتصاد وسلاسل الإمداد بمهنية."
    },
    {
      icon: <FaUsers />,
      title: " ننجز كمنظومة واحدة لا كأفراد",
      description: "نؤمن بأن النتيجة تتحقق بروح الفريق وتكامل الأدوار لا بجهد منفرد. "
    },
   
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">قيمنا ومبادئنا</h2>
          <p className="section-subtitle">
            نؤمن بأن التميز في الخدمات اللوجستية يبدأ من المبادئ الراسخة والأسس القوية
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        {/* about-mission moved to a dedicated WhyChoose component, keep About focused on values */}
      </div>
    </section>
  );
};

export default About;