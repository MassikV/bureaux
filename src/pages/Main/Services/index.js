import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.scss';
import logo from './img/logo.png';
import textLogo from './img/text-logo.png';
import ServiceBlock from './Block';
import ServiceModal from './ServiceModal';
import Top from './Top';
import Bottom from './Bottom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Міні-проект',
    price: '$25 за м²',
    info: 'Дизайн проєкт інтерʼєру квартири або будинку',
    details: '(візуалізації + креслення інженерії)',
    button: 'Замовити',
  },
  {
    title: 'Авторський проєкт в українському етностилі',
    price: '$45 за м²',
    info: 'Дизайн проєкт інтерʼєру квартири або будинку у сучасному українському етностилі',
    details: '(креслення + візуалізації + авторський супровід)',
    button: 'Замовити',
  },
];

function Services() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1023px)', () => {
      gsap.utils.toArray('.service-block').forEach((block, index) => {
        gsap.fromTo(
          block,
          {
            y: index === 0 ? 100 : 200,
          },
          {
            y: index === 0 ? -50 : 50,
            duration: 2,
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
              end: 'bottom 50%',
              scrub: true,
            },
          }
        );
      });
    });
  }, []);

  return (
    <section className="services" id="Services">
      <Top />
      <div className="services-center">
        <div className="services-center-ticker-wrapper">
          <div className="services-center-ticker">
            <div className="services-center--container">
              <img loading="lazy" src={logo} alt="" className="services-center--logo" />
              <img loading="lazy" src={textLogo} alt="" className="services-center--textLogo" />
            </div>

            <div className="services-center--container">
              <img loading="lazy" src={logo} alt="" className="services-center--logo" />
              <img loading="lazy" src={textLogo} alt="" className="services-center--textLogo" />
            </div>
          </div>
        </div>
        {services.map((service, index) => (
          <ServiceBlock key={index} service={service} index={index} openModal={openModal} />
        ))}
      </div>
      <Bottom />
      {isModalOpen && <ServiceModal onClose={closeModal} />}
    </section>
  );
}

export default React.memo(Services);
