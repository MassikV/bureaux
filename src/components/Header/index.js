import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import PopUpContainer from '../PopUp/PopUp-container';
import Logo from '../../img/white-logo.png';
import { scroller } from 'react-scroll';

import './style.scss';

function Header() {
  const location = useLocation();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupSubmitted, setPopupSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const [nav, setNav] = useState(false);
  const [isInfoPage, setIsInfoPage] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith('/projects/info/')) {
      setIsInfoPage(true);
    }
  }, [location.pathname]);

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleMobileNavClick = () => {
    setNav(false);
    setTimeout(() => {}, 300);
  };

  const openPopup = () => {
    setPopupVisible(true);
    setPopupSubmitted(true);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.classList.remove('no-scroll');
  };

  const scrollToElement = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });
  };

  const handleClick = (elementId) => {
    if (location.pathname === '/') {
      scrollToElement(elementId);
    } else {
      window.location.replace(`/`);
      setTimeout(() => {
        scrollToElement(elementId);
      }, 1000);
    }
    handleMobileNavClick();
  };

  return (
    <header className={`header ${isInfoPage ? 'infopage' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-block">
          <a onClick={() => handleClick('First ')}>
            <img loading="lazy" src={Logo} alt="logo" className="header-logo" />
          </a>
          <div className={`header-wrapper ${nav ? 'active' : ''}`}>
            <div className="header-info">
              <ul className="header-list">
                <li className="header-list__item">
                  <span onClick={() => handleClick('AboutUs')}>Про нас</span>
                </li>
                <li className="header-list__item">
                  <span onClick={() => handleClick('Projects')}>Проєкти</span>
                </li>
                <li className="header-list__item">
                  <span onClick={() => handleClick('OurWork')}>Як ми працюємо</span>
                </li>
                <li className="header-list__item">
                  <span onClick={() => handleClick('Services')}>Послуги</span>
                </li>
              </ul>
              <button className="header__btn" onClick={openPopup}>
                Безкоштовний розрахунок
              </button>
            </div>
          </div>
          <div onClick={() => setNav(!nav)} className="header__btns">
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <div className="popup-overlay">
          <PopUpContainer
            onClose={closePopup}
            source="кнопка в меню"
            onCloseButton={() => {
              closePopup();
              setPopupSubmitted(false);
            }}
            isOpenByButton={isPopupSubmitted}
          />
        </div>
      )}
    </header>
  );
}

export default React.memo(Header);
