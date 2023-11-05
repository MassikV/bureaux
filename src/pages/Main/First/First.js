import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../img/white-logo.png';
import './first.scss';
import { projects } from '../../../data/projects';
import MoreProject from '../../../components/MoreProject/MoreProject';
import PhonePopUp from '../../../components/PhonePopUp';

const First = () => {
  const location = useLocation();
  const newProjects = projects.filter((project) => project.section === 'new');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const projectsWrapperStyle =
    location.pathname === '/projects' ? { paddingBottom: '2rem', height: '40rem' } : {};

  const handleMouseEnter = (projectId) => {
    if (!isMobile) {
      setHoveredProject(projectId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredProject(null);
    }
  };

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth <= 1024);
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImageUrls = useMemo(
    () => [
      require('./img/bg.png'),
      require('./img/bg2.png'),
      require('./img/bg3.png'),
      require('./img/bg4.png'),
    ],
    []
  );

  const backgroundImageUrl = backgroundImageUrls[currentPhotoIndex];

  const goToNextPhoto = useCallback(() => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
  }, [backgroundImageUrls]);

  useEffect(() => {
    const interval = setInterval(goToNextPhoto, 10000);
    return () => clearInterval(interval);
  }, [goToNextPhoto]);

  const [dotsVisible, setDotsVisible] = useState(false);

  const toggleDotsVisibility = () => {
    setDotsVisible(!dotsVisible);
  };

  return (
    <section
      className="First"
      id="First"
      style={{ ...projectsWrapperStyle, backgroundImage: `url(${backgroundImageUrl})` }}>
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
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}>
                    <img
                      loading="lazy"
                      src={item.mainPhoto}
                      className="First__projects__img"
                      alt=""
                    />
                    {(isMobile || isTablet || (isDesktop && hoveredProject === item.id)) && (
                      <div className="First__projects--container">
                        <span className="First__projects--number">{item.id - 8}</span>
                        <p className="First__projects--title">{item.name}</p>
                        <p className="First__projects--square">{item.square}</p>
                      </div>
                    )}
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
