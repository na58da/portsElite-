import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPassport, FaShippingFast, FaGlobe, FaWarehouse, FaLink, FaCertificate } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0, rotationX: 15 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const services = [
    {
      icon: <FaPassport />,
      title: "التخليص الجمركي",
      description: `ندير كامل إجراءات التخليص الجمركي للأفراد والشركات بالتنسيق مع الجهات المختصة لضمان دخول
      شحناتك بسرعة وبدون تعقيدات. نوفر فتح وربط الحسابات على المنصات الحكومية والإشراف على سير الإجراءات حتى
      خروج الشحنة بأمان وفي الوقت المحدد.`
    },
    {
      icon: <FaPassport />,
      title: "التخليص الجمركي للأفراد",
      description: `ندير كامل إجراءات التخليص الجمركي للافراد بالتنسيق مع الجهات المختصة لضمان دخول
      شحناتك بسرعة وبدون تعقيدات. ونوفر فتح حساب على منصة فسح لتسهيل الإجراءات.`
    },
    {
      icon: <FaShippingFast />,
      title: "النقل",
      description: `ندير عمليات النقل من الباب إلى الباب بكفاءة وموثوقية داخل المملكة وخارجها، بما
      يشمل الرياض والمنطقة الشرقية، وبين مدن المملكة وإقليميًا ودوليًا.`
    },
    {
      icon: <FaShippingFast />,
      title: "النقل الأمني",
      description: `نوفر نقلًا آمنًا للشحنات الحساسة داخل المملكة، سواء للمنافذ أو للعميل، بالتعاون
      مع شركاء معتمدين في الحماية والنقل الأمني.`
    },
    {
      icon: <FaGlobe />,
      title: "الشحن الدولي",
      description: `نقدم حلول شحن دولي جوّي وبحري وبري من وإلى مختلف دول العالم، مع إدارة كاملة من
      الاستلام حتى التسليم، وتشمل تجهيز المستندات، الحجز، والتأمين عند الطلب.`
    },
    {
      icon: <FaShippingFast />,
      title: "الشحن السريع",
      description: `نوفر شحنًا سريعًا داخليًا ودوليًا عبر شبكة من شركات النقل والبريد المعتمدة لضمان
      أقصر زمن للتسليم. ندير العملية كاملة من الاستلام والتعبئة والوثائق حتى التسليم.`
    },
    {
      icon: <FaWarehouse />,
      title: "خدمات التخزين",
      description: `نوفر تخزينًا معتمدًا (جاف ـ مبرد ـ مجمد) قصير أو طويل الأجل لمختلف البضائع،
      بإدارة رقمية وخدمات مساندة كإعادة التعبئة والتجهيز للشحن.`
    },
    {
      icon: <FaWarehouse />,
      title: "الخدمات اللوجستية",
      description: `نقدم حلول لوجستية متكاملة تشمل التنسيق المسبق، المتابعة أثناء الحركة، وضمان الجاهزية
      عند الوصول.`
    },
    {
      icon: <FaLink />,
      title: "إدارة سلاسل الإمداد",
      description: `نقدم حلولًا متكاملة لإدارة سلاسل الإمداد تشمل التخطيط والشراء والاستلام والنقل
      والتخزين والتوزيع، لضمان استمرارية التوريد وخفض التكاليف التشغيلية.`
    },
    {
      icon: <FaCertificate />,
      title: "خدمات المعارض والفعاليات",
      description: `نقدّم حلولًا لوجستية متكاملة للمعارض من استلام وتجهيز ونقل آمن ودعم ميداني، مع
      التخليص (ATA Carnet) ثم التخزين أو إعادة الشحن بعد انتهاء الحدث.`
    },
    {
      icon: <FaCertificate />,
      title: "التعبئة والتغليف",
      description: `نوفّر حلول تعبئة وتغليف مهنية تحمي الشحنات أثناء النقل أو التخزين باستخدام مواد
      معتمدة تناسب طبيعة البضاعة، مع خدمات تصميم التغليف والتحزيم.`
    },
    {
      icon: <FaCertificate />,
      title: "إصدار شهادة سابر",
      description: `اختيارك الأول لإصدار شهادة سابر؛ ندرك الأهمية القصوى لإصدار شهادة المطابقة السعودية
      في أسرع وقت وبأقل تكلفة ممكنة. نتابع الإجراءات عبر منصة سابر حتى الحصول على الشهادة.`
    }
  ];

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">خدماتنا وحلولنا </h2>
        <p className="section-subtitle">
          نقدم حلولاً لوجستية متكاملة تغطي جميع مراحل الشحن والنقل والتخليص الجمركي
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card"
              ref={el => cardsRef.current[index] = el}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-actions">
                <a href="#contact" className="service-cta" aria-label={`احجز الآن - ${service.title}`}>احجز الآن</a>
              </div>
              <div className="service-hover"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;