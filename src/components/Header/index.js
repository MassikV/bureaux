import './style.scss';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PopUpContainer from '../PopUp/PopUp-container';
import BurgerMenu from './BurgerMenu';
import SidebarMenu from './SidebarMenu';
import logo from './img/logo.png';

function Header() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupSubmitted, setPopupSubmitted] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768 && window.scrollY > 740) {
        setIsScrolled(true);
      } else if (window.innerWidth < 768 && window.scrollY > 492) {
        setIsScrolled(true);
      }else if (window.innerWidth < 1024 && window.scrollY > 800) {
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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
      <header className={`header`} id="Header">
        <div className={`header-container padding ${isScrolled ? 'scrolled' : ''}`}>
          <BurgerMenu onClick={toggleMenu} />
          <Link to="/bureaux/" className="header-container--logo">
            <img src={logo} alt="Bureau" />
          </Link>
          {isMenuOpen && <SidebarMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
          <nav className={`header-container--navbar ${isMenuOpen ? 'open' : ''}`}>
            <ul className="list">
              <li className="list-item"><a href="/bureaux/#AboutUs">Про нас</a></li>
              <li className="list-item"><a href="/bureaux/#Projects">Проєкти</a></li>
              <li className="list-item"><a href="/bureaux/#OurWork">Як ми працюємо</a></li>
              <li className="list-item"><a href="/bureaux/#Services">Послуги</a></li>
            </ul>
          </nav>
          <button className="header-button" onClick={openPopup}>
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
