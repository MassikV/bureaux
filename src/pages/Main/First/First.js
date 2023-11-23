import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../img/white-logo.png';
import './first.scss';
import { projects } from '../../../data/projects';
import MoreProject from '../../../components/MoreProject/MoreProject';
import PhonePopUp from '../../../components/PhonePopUp';
import bg1 from './img/bg.png';
import bg2 from './img/bg2.png';
import bg3 from './img/bg3.png';
import bg4 from './img/bg4.png';

const First = () => {
  const location = useLocation();
  const newProjects = projects.filter((project) => project.section === 'new');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false); // Доданий стан для відстеження завантаження фону
  const projectsWrapperStyle =
    location.pathname === '/projects' ? { paddingBottom: '2rem', height: '40rem' } : {};

  const backgroundImageUrls = useMemo(() => [bg1, bg2, bg3, bg4], []);

  const backgroundImageUrl = backgroundImageUrls[currentPhotoIndex];

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = backgroundImageUrl;
    preloadImage.onload = () => {
      document.querySelector('.First').style.backgroundImage = `url(${backgroundImageUrl})`;
      setBackgroundLoaded(true); // Позначити, що фон завантажено
    };
  }, [backgroundImageUrl]);

  const goToNextPhoto = useCallback(() => {
    if (backgroundLoaded) {
      // Переконатися, що фон завантажено перед анімацією
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }
  }, [backgroundImageUrls, backgroundLoaded]);

  useEffect(() => {
    const interval = setInterval(goToNextPhoto, 10000);
    return () => clearInterval(interval);
  }, [goToNextPhoto]);

  const [dotsVisible, setDotsVisible] = useState(false);

  const toggleDotsVisibility = () => {
    setDotsVisible(!dotsVisible);
  };

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
                className={`dotes ${index === currentPhotoIndex ? 'active' : ''}`}></span>
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
