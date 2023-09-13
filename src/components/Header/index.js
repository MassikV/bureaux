import './style.scss';
import React, { useState } from "react";
import {Link, useLocation } from "react-router-dom";
import PopUpContainer from '../PopUp/PopUp-container';

import logo from './img/logo.png';
import uaproject from './img/ua-project.png';
import metropolis from './img/metropolis.png';
import salon from './img/salon.png';
import union from './img/Union.svg'
import first from './img/1.jpg'
import second from './img/2.jpg'
import third from './img/3.jpg'

const projects = [
  { number: '01', title: 'Ua Project', square: '80 м.кв.' },
  { number: '02', title: 'metropolis', square: '95 м.кв.' },
  { number: '03', title: '1991 beauty salon', square: '80 м.кв.' }
];

const projectHoverImages = {
  '01': `${first}`,
  '02': `${second}`,
  '03': `${third}`
};

const projectImages = {
  '01': `${uaproject}`, '02': `${metropolis}`, '03': `${salon}`
};

function Header() {
  const location = useLocation();
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupSubmitted, setPopupSubmitted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const openPopup = () => {
    setPopupVisible(true);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setPopupVisible(false);
    document.body.classList.remove('no-scroll');
  };

  const handleProjectMouseOver = (projectNumber) => {
    setHoveredProject(projectNumber);
  };

  const handleProjectMouseOut = () => {
    setHoveredProject(null);
  };


  return (
      <header className="header" id="Header">
        <div className="header-container">
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
        {/*<span className="language">ua</span>*/}
        {/*<span className="language">eng</span>*/}
        <section className="header-section">
          <img src={logo} alt="Bureau" className="header-section--logo" />
          <h2 className="header-section--title">оселя з українською душею</h2>
          {!location.pathname.includes('/projects') && (
              <div className={`header-section--project project-grid `}>
                <span className="header-span">Проєкти</span>
                {projects.map(project => (
                    <div
                        key={project.number}
                        className="project-grid--container"
                        style={{
                          backgroundImage: `url(${
                              hoveredProject === project.number
                                  ? projectHoverImages[project.number]
                                  : projectImages[project.number]
                          })`,
                        }}
                        onMouseOver={() => handleProjectMouseOver(project.number)}
                        onMouseOut={handleProjectMouseOut}
                    >
                      <span className="project-grid--number">{project.number}</span>
                      <p className="project-grid--title">{project.title}</p>
                      <p className="project-grid--square">{project.square}</p>

                    </div>
                ))}

                <Link to="/projects" className="project-grid--button">
                  Більше проєктів <img src={union} alt="" />
                </Link>
              </div>

            )}
        </section>
        {location.pathname === '/projects' && (
            <div className="moreOurProjects-info">
              <h2>Наші проєкти</h2>
              <p>
                У нас є можливість виконання проектів під ключ і для цього ми маємо
                надійних підрядників, які здатні якісно закрити весь спектр необхідних
                послуг.
              </p>
            </div>
        )}
      </header>
  );
}

export default Header;
