import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PopUpContainer from '../../../components/PopUp/PopUp-container';
import './style.scss';
import union from './img/Union.svg';
import logo from './img/logo.png';
import textLogo from './img/text-logo.png';
import ServiceBlock from "./Block";
import logotype from "./img/logos.svg";
import ServiceModal from "./ServiceModal";

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
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('no-scroll');
    console.log('isModalOpen тепер рівний true:', isModalOpen);

  };


  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const openPopup = () => {
    setPopupVisible(true);
    document.body.classList.add('no-scroll');
  };


  const closePopup = () => {
    setPopupVisible(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
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
                start: 'top 50%',
                end: 'bottom 50%',
                scrub: true,
              },
            }
        );
      });
    });

  }, []);

  const logoWidth =
      window.innerWidth <= 480
          ? 34
          : window.innerWidth <= 1024
              ? 65
              : 85;

  const maxLogosInRow = Math.floor(window.innerWidth / logoWidth);
  const logos = Array(maxLogosInRow)
      .fill(null)
      .map((_, index) => <img src={logotype} alt="#" className="section-container--logo" key={index} />);


  return (
      <section className="services" id="Services">
        <div className="services-top">
          <div className="services-top--logos">
            <h2 className="services-top--title">Послуги</h2>
            {window.innerWidth < 1024 && logos}
          </div>
        </div>
        <div className="services-center">
          <div className="services-center-ticker-wrapper">
            <div className="services-center-ticker">
              <div className="services-center--container">
                <img src={logo} alt="" className="services-center--logo" />
                <img src={textLogo} alt="" className="services-center--textLogo" />
              </div>

              <div className="services-center--container">
                <img src={logo} alt="" className="services-center--logo" />
                <img src={textLogo} alt="" className="services-center--textLogo" />
              </div>
            </div>
          </div>
          {services.map((service, index) => (
              <ServiceBlock key={index} service={service} index={index}  openModal={openModal}  />
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
            <img src={union} alt="" />
          </a>
          {isPopupVisible && (
              <div className="popup-overlay">
                <PopUpContainer
                    onClose={closePopup}
                    onCloseButton={() => {
                      closePopup();
                      setPopupSubmitted(false);
                    }}
                    isOpenByButton={isPopupSubmitted}
                />
              </div>
          )}
        </div>
        {isModalOpen && <ServiceModal onClose={closeModal} />}
      </section>
  );
}

export default Services;
