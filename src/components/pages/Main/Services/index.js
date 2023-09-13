import React, {useState} from 'react';
import PopUpContainer from '../../../PopUp/PopUp-container'; // Впевніться, що шлях правильний
import './style.scss'; // Імпортуйте ваш стиль
import union from './img/Union.svg'; // Імпортуйте вашу іконку
import logo from './img/logo.png'; // Імпортуйте вашу іконку
import textLogo from './img/text-logo.png'; // Імпортуйте вашу іконку

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
              <section
                  key={index}
                  className={index === 0 ? "black-bg" : "white-bg"}
              >
                <p className="services-center--title">{service.title}</p>
                <p className="services-center--price">{service.price}</p>
                <p className="services-center--info">{service.info}</p>
                <p className="services-center--details">{service.details}</p>
                <a href="#1" className="services-center--button">
                  {service.button}
                </a>
              </section>
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
                <PopUpContainer onClose={closePopup}
                                onCloseButton={() => {
                                  closePopup();
                                  setPopupSubmitted(false);
                                }}

                                isOpenByButton={isPopupSubmitted}/>
              </div>
          )}
        </div>
      </section>
  );
}

export default Services;
