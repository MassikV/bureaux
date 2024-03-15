import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './img/logo.png';
import './first.scss';
import { projects } from '../../../data/projects';
import MoreProject from '../../../components/MoreProject/MoreProject';
import PhonePopUp from '../../../components/PhonePopUp';

import bg1 from './img/Bg/bg.png';
import bg2 from './img/Bg/bg2.png';
import bg3 from './img/Bg/bg3.png';
import bg4 from './img/Bg/bg4.png';
import bg5 from './img/Bg/bg5.png';

const First = () => {
  const location = useLocation();
  const newProjects = projects.filter((project) => project.section === 'new');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const projectsWrapperStyle =
    location.pathname === '/projects' ? { paddingBottom: '2rem', height: '40rem' } : {};

  const backgroundImageUrls = useMemo(() => [bg1, bg2, bg3, bg4, bg5], []);

  const backgroundImageUrl = backgroundImageUrls[currentPhotoIndex];

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = backgroundImageUrl;
    preloadImage.onload = () => {
      document.querySelector('.First').style.backgroundImage = `url(${backgroundImageUrl})`;
      setBackgroundLoaded(true);
    };
  }, [backgroundImageUrl]);

  const goToNextPhoto = useCallback(() => {
    if (backgroundLoaded) {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }
  }, [backgroundImageUrls, backgroundLoaded]);

  const handleDotClick = (index) => {
    if (backgroundLoaded) {
      setCurrentPhotoIndex(index);
      resetTimer(); // Сбросить таймер при клике на точку
    }
  };

  const resetTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goToNextPhoto, 10000);
  }, [goToNextPhoto]);

  useEffect(() => {
    intervalRef.current = setInterval(goToNextPhoto, 10000);
    return () => clearInterval(intervalRef.current);
  }, [goToNextPhoto]);

  const [dotsVisible, setDotsVisible] = useState(false);

  const toggleDotsVisibility = () => {
    setDotsVisible(!dotsVisible);
  };

  const intervalRef = useRef(null);

  return (
    <section className="First" id="First" style={{ ...projectsWrapperStyle }}>
      <div className="container">
        <div className="First-content">
          <div className="First__info">
            <img loading="lazy" src={Logo} alt="" className="First__logo" />
            <p className="First__title">Оселя з українською душею</p>
          </div>
          <div className={`dots ${dotsVisible ? 'visible' : ''}`} onClick={toggleDotsVisibility}>
            {backgroundImageUrls.map((_, index) => (
              <span
                key={index}
                className={`dotes ${index === currentPhotoIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}></span>
            ))}
          </div>
          {!location.pathname.includes('/projects') && (
            <div className="First__projects">
              <h3 className="First__projects__title">Проєкти</h3>
              <div className="First__projects__wrapper">
                {newProjects.slice(0, 3).map((item) => (
                  <Link
                    to={`/projects/info/${item.id}`}
                    className="First__projects__block"
                    key={item.id}>
                    <img
                      loading="lazy"
                      src={item.mainPhoto}
                      className="First__projects__img"
                      alt=""
                    />
                    <div className="First__projects--container">
                      <span className="First__projects--number">{item.id - 8}</span>
                      <p className="First__projects--title">{item.name}</p>
                      <p className="First__projects--square">{item.square}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <MoreProject />
            </div>
          )}
          {location.pathname === '/projects' && (
            <div className="moreOurProjects-info">
              <h2>Наші проєкти</h2>
              <p>
                У нас є можливість виконання проектів під ключ і для цього ми маємо надійних
                підрядників, які здатні якісно закрити весь спектр необхідних послуг.
              </p>
            </div>
          )}
        </div>
      </div>
      <PhonePopUp />
    </section>
  );
};

export default First;
