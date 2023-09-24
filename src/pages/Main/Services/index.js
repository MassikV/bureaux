import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PopUpContainer from '../../../components/PopUp/PopUp-container';
import './style.scss';
import union from './img/Union.svg';
import logo from './img/logo.png';
import textLogo from './img/text-logo.png';
import ServiceBlock from "./Block";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Міні-проект",
    price: "$25 за м²",
    info: "Дизайн проєкт інтерʼєру квартири або будинку",
    details: "(візуалізації + креслення інженерії)",
    button: "Замовити",
  },
  {
    title: "Авторський проєкт в українському етностилі",
    price: "$45 за м²",
    info: "Дизайн проєкт інтерʼєру квартири або будинку у сучасному українському етностилі",
    details: "(креслення + візуалізації + авторський супровід)",
    button: "Замовити",
  },
];

function Services() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupSubmitted, setPopupSubmitted] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    gsap.utils.toArray('.service-block').forEach((block, index) => {
      gsap.fromTo(
          block,
          {
            y: index === 0 ? 100 : 200, // Початкова позиція по вертикалі (перший блок вище, другий нижче)
          },
          {
            y: index === 0 ? -50 : 50, // Кінцева позиція по вертикалі (перший блок вище, другий нижче)
            duration: 2, // Тривалість анімації (змінив на 2 секунди, але ви можете змінити на потрібне значення)
            scrollTrigger: {
              trigger: block,
              start: 'top 50%', // Початок анімації при прокручуванні до 50% висоти блоку
              end: 'bottom 50%', // Закінчення анімації при прокручуванні до 50% висоти нижнього краю блоку
              scrub: true, // Активуємо "скроббінг" для плавного ефекту
            },
          }
      );
    });
  }, []);




  return (
      <section className="services" id="Services">
        <div className="services-top">
          <h2 className="services-top--title">Послуги</h2>
        </div>
        <div className="services-center">
          <div className="services-center-ticker-wrapper">
            <div className="services-center-ticker">
              <div className="services-center--container">
                <img src={logo} alt="" className="services-center--logo"/>
                <img src={textLogo} alt="" className="services-center--textLogo"/>
              </div>

              <div className="services-center--container">
                <img src={logo} alt="" className="services-center--logo"/>
                <img src={textLogo} alt="" className="services-center--textLogo"/>
              </div>
            </div>
          </div>
          {services.map((service, index) => (
              <ServiceBlock
                  key={index}
                  service={service}
                  index={index}
              />
          ))}
        </div>
        <div className="services-bottom">
          <p className="services-bottom--text">
            Кожен проект є унікальним і розробляється під потреби клієнта, саме
            тому точна вартість залежить від низки факторів.
            <span>
            Пропонуємо вам заповнити коротку анкету, після якої ми зможемо
            порахувати вартість та обговорити більше деталей у телефонній
            розмові!
          </span>
          </p>
          <a href="#3" className="services-bottom--button" onClick={openPopup}>
            безкоштовний розрахунок
            <img src={union} alt=""/>
          </a>
          {isPopupVisible && (
              <div className="popup-overlay">
                <PopUpContainer onClose={closePopup} onCloseButton={() => { closePopup(); setPopupSubmitted(false); }} isOpenByButton={isPopupSubmitted}/>
              </div>
          )}
        </div>
      </section>
  );
}

export default Services;
