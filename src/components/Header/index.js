import './style.scss';
import React, { useState, useEffect } from 'react';
import PopUpContainer from '../PopUp/PopUp-container';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from './img/logo.png';

function Header() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupSubmitted, setPopupSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleMobileNavClick = () => {
    setNav(false);
    setTimeout(() => {}, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768 && window.scrollY > 740) {
        setIsScrolled(true);
      } else if (window.innerWidth < 768 && window.scrollY > 492) {
        setIsScrolled(true);
      } else if (window.innerWidth < 1024 && window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const openPopup = () => {
    setPopupVisible(true);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className="containerr">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a href="/bureaux/">
          <img src={Logo} alt="logo" className="header-logo" />
        </a>
        <div className={`header-wrapper ${nav ? 'active' : ''}`}>
          <ul className="header-list">
            <li className="header-list__item">
              <a href="/bureaux/#AboutUs" onClick={() => handleMobileNavClick()}>
                Про нас
              </a>
            </li>
            <li className="header-list__item">
              <a href="/bureaux/#Projects" onClick={() => handleMobileNavClick()}>
                Проєкти
              </a>
            </li>
            <li className="header-list__item">
              <a href="/bureaux/#OurWork" onClick={() => handleMobileNavClick()}>
                Як ми працюємо
              </a>
            </li>
            <li className="header-list__item">
              <a href="/bureaux/#Services" onClick={() => handleMobileNavClick()}>
                Послуги
              </a>
            </li>
          </ul>
          <button className="header__btn" onClick={openPopup}>
            Безкоштовний розрахунок
          </button>
        </div>

        <div onClick={() => setNav(!nav)} className="header__btns">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </header>
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
  );
}

export default Header;
