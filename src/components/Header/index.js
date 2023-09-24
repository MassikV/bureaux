import './style.scss';
import React, { useState } from "react";
import {Link } from "react-router-dom";
import PopUpContainer from '../PopUp/PopUp-container';

import logo from './img/logo.png';
function Header() {
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
      <header className="header" id="Header">
        <div className="header-container ">
          <Link to="/bureaux/" className="header-container--logo">
            <img src={logo} alt="Bureau" />
          </Link>
          <nav className="header-container--navbar">
            <ul className="list">
              <li className="list-item"><a href="/bureaux/#AboutUs">Про нас</a></li>
              <li className="list-item"><a href="/bureaux/#Projects">Проєкти</a></li>
              <li className="list-item"><a href="/bureaux/#OurWork">Як ми працюємо</a></li>
              <li className="list-item"><a href="/bureaux/#Services">Послуги</a></li>
            </ul>
          </nav>
          <button  className="header-button" onClick={openPopup}>
            <span className="header-button--text">Безкоштовний розрахунок</span>
          </button>
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
        
      </header>
  );
}

export default Header;
