import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import union from './img/Union.svg';
import image1 from './img/1.png';
import image2 from './img/2.png';
import image3 from './img/3.png';
import image4 from './img/4.png';
import logoImg from './img/logo.svg';

const imageArrays = [
  [
    'img/first/1.png',
    'img/first/2.png',
    'img/first/4.png',
    'img/first/5.png',
    'img/first/6.png',
    'img/first/7.png',
    'img/first/8.png',
    'img/first/9.png',
    'img/first/12.png',
    'img/first/13.png',
    'img/first/14.png',
    'img/first/16.png',
    'img/first/17.png',
    'img/first/18.png',
    'img/first/19.png',
    'img/first/20.png',
    'img/first/21.png',
    'img/first/22.png',
    'img/first/23.png',
    'img/first/24.png',
    'img/first/25.png',
  ],
  [
    'img/second/1.png',
    'img/second/2.png',
    'img/second/3.png',
    'img/second/4.png',
    'img/second/5.png',
    'img/second/6.png',
    'img/second/7.png',
    'img/second/8.png',
    'img/second/9.png',
    'img/second/10.png',
    'img/second/11.png',
    'img/second/12.png',
    'img/second/13.png',
    'img/second/14.png',
    'img/second/15.png',
    'img/second/16.png',
    'img/second/17.png',
    'img/second/18.png',
    'img/second/19.png',
    'img/second/20.png',
    'img/second/21.png',
  ],
  [
    'img/third/1.png',
    'img/third/2.png',
    'img/third/3.png',
    'img/third/4.png',
    'img/third/5.png',
    'img/third/6.png',
    'img/third/7.png',
    'img/third/8.png',
    'img/third/9.png',
    'img/third/10.png',
    'img/third/11.png',
    'img/third/12.png',
    'img/third/13.png',
    'img/third/14.png',
    'img/third/15.png',
    'img/third/16.png',
    'img/third/17.png',
    'img/third/18.png',
    'img/third/19.png',
    'img/third/20.png',
    'img/third/21.png',
  ],
  [
    'img/fourth/1.png',
    'img/fourth/2.png',
    'img/fourth/3.png',
    'img/fourth/4.png',
    'img/fourth/5.png',
    'img/fourth/6.png',
    'img/fourth/7.png',
    'img/fourth/8.png',
    'img/fourth/9.png',
    'img/fourth/10.png',
    'img/fourth/11.png',
    'img/fourth/12.png',
    'img/fourth/13.png',
    'img/fourth/14.png',
    'img/fourth/15.png',
    'img/fourth/16.png',
    'img/fourth/17.png',
    'img/fourth/18.png',
    'img/fourth/19.png',
    'img/fourth/20.png',
    'img/fourth/21.png',
  ],
];

const staticImages = [
  'img/first/26.png',
  'img/third/22.png',
  'img/third/23.png',
  'img/fourth/22.png',
];

const FullImage = [
  {
    id: 0,
    image: image1,
    name: 'UA PROJECT',
    square: '80',
  },
  {
    id: 1,
    image: image2,
    name: 'METROPOLIS',
    square: '95',
  },
  {
    id: 2,
    image: image3,
    name: '1991 BEAUTY SALON',
    square: '80',
  },
  {
    id: 3,
    name: 'YK',
    image: image4,
    square: '80',
  },
];
const LOGO_WIDTHS = {
  small: 34,
  medium: 65,
  large: 85,
};
const imageMap = {
  logo: logoImg,
};
function OurProjects() {
  const [fullImageSrc, setFullImageSrc] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [maxLogosInRow, setMaxLogosInRow] = useState(0);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const infoRef = useRef(null);

  // const logoSize = useCallback(() => {
  //   if (windowWidth <= 480) {
  //     return LOGO_WIDTHS.small;
  //   } else if (windowWidth <= 1024) {
  //     return LOGO_WIDTHS.medium;
  //   } else {
  //     return LOGO_WIDTHS.large;
  //   }
  // }, [windowWidth]);

  useEffect(() => {
    function handleResize() {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const titleWidth = titleRef.current.getBoundingClientRect().width;
      let textWidth = 0;
      let logoWidth;
      if (windowWidth > 1024) {
        textWidth = textRef.current.getBoundingClientRect().width;
      }
      let maxLogosInRow;
      if (windowWidth <= 480) {
        maxLogosInRow = Math.floor((containerWidth - titleWidth - textWidth) / LOGO_WIDTHS.small);
        logoWidth = LOGO_WIDTHS.small;
      } else if (windowWidth > 480 && windowWidth <= 1024) {
        maxLogosInRow = Math.floor((containerWidth - titleWidth - textWidth) / LOGO_WIDTHS.medium);
        logoWidth = LOGO_WIDTHS.medium;
      } else {
        maxLogosInRow = Math.floor(
          (containerWidth - titleWidth - textWidth) / LOGO_WIDTHS.large / 2
        );
        logoWidth = LOGO_WIDTHS.large;
      }
      if (maxLogosInRow <= 0) {
        setMaxLogosInRow(1);
      } else {
        setMaxLogosInRow(maxLogosInRow);
      }
      document.querySelectorAll('.ourProjects-container--logos').forEach((logo) => {
        logo.style.width = `${logoWidth}px`;
      });
    }

    setWindowWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [maxLogosInRow, windowWidth]);

  const logos = Array.from({ length: maxLogosInRow }).fill(imageMap.logo);

  const showFullImage = (containerIndex, index) => {
    const currentImage = imageArrays[containerIndex][index];
    if (!staticImages.includes(currentImage)) {
      setFullImageSrc(containerIndex);
      setIsActive(true);
    }
  };

  const hideFullImage = () => {
    setFullImageSrc(null);
    setIsActive(false);
  };

  return (
    <section className="ourProjects" id="Projects">
      <div className="ourProjects-header" ref={containerRef}>
        {windowWidth > 1023 && (
          <div className="logos">
            {logos.map((logo, index) => (
              <img
                loading="lazy"
                src={logo}
                alt="#"
                className="ourProjects-container--logos"
                key={index}
              />
            ))}
          </div>
        )}
        <h2 className="ourProjects-header--title" ref={titleRef}>
          Наші проєкти
        </h2>
        <p className="ourProjects-header--text" ref={textRef}>
          У нас є можливість виконання проектів під ключ і для цього ми маємо надійних підрядників,
          які здатні якісно закрити весь спектр необхідних послуг.
        </p>
        <p className="ourProjects-header--info" ref={infoRef}>
          Тут зібрані проєкти, якими ми найбільше пишаємось, <span>наведіть</span> на кожен з них,
          щоб побачити більше
        </p>
        <div className="logos">
          {logos.map((logo, index) => (
            <img
              loading="lazy"
              src={logo}
              alt="#"
              className="ourProjects-container--logos"
              // style={}
              key={index}
            />
          ))}
        </div>
        <svg
          width="214"
          height="90"
          viewBox="0 0 210.2 89.4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="ourProjects-svg">
          <style type="text/css">
            {`
              #arrow { fill: #000; }
              #curveLine {
                fill: none;
                stroke: #000;
                stroke-width: 4;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
              }
            `}
          </style>

          <defs>
            <mask id="mask1" maskUnits="userSpaceOnUse">
              <path
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeDasharray="204"
                strokeDashoffset="204"
                d="M4.5,2.9c0,0,63.1,96,179,69.3">
                <animate
                  id="an1"
                  attributeName="stroke-dashoffset"
                  begin="0s;an2.end"
                  dur="1s"
                  values="204;0"
                  fill="freeze"
                />
              </path>
            </mask>
            <mask id="mask2" maskUnits="userSpaceOnUse">
              <path
                fill="none"
                stroke="white"
                strokeWidth="6"
                strokeDasharray="204"
                strokeDashoffset="204"
                d="M181.2,86.9c1.8-2,3.7-3.9,5.6-5.8c1.9-1.9,3.8-3.7,5.9-5.5c2-1.8,4.1-3.5,6.2-5.2c2.1-1.7,4.3-3.4,6.5-4.9
                  l0.3,4.3c-2.3-0.7-4.5-1.5-6.8-2.4c-2.2-0.9-4.4-1.8-6.6-2.8c-2.2-1-4.3-2.2-6.3-3.5c-2-1.3-4-2.7-5.7-4.5c-0.5-0.5-0.5-1.4,0-1.9
                  c0.3-0.3,0.8-0.4,1.2-0.4c2.4,0.5,4.7,1.2,6.9,2c2.2,0.8,4.4,1.7,6.5,2.7c2.1,1,4.2,2,6.3,3l6.3,3.1l0.3,0.2c1.1,0.6,1.6,2,1,3.1
                  c-0.2,0.5-0.6,0.8-1.1,1.1c-2.3,1.1-4.6,2.3-6.9,3.6c-2.2,1.3-4.4,2.8-6.5,4.4c-2.1,1.6-4.1,3.3-5.9,5.1c-1.9,1.8-3.7,3.7-5.3,5.8
                  c-0.4,0.6-1.2,0.7-1.8,0.2S180.6,87.6,181.2,86.9C181.1,87,181.1,87,181.2,86.9z">
                <animate
                  id="an2"
                  attributeName="stroke-dashoffset"
                  dur="1s"
                  begin="an1.end"
                  values="204;0"
                />
              </path>
            </mask>
          </defs>

          <rect width="100%" height="100%" fill="rgba(255,255,255,0.1)" />
          <path id="curveLine" d="M4.5,2.9c0,0,63.1,96,179,69.3" mask="url(#mask1)" />

          <path
            id="arrow"
            d="M181.2,86.9c1.8-2,3.7-3.9,5.6-5.8c1.9-1.9,3.8-3.7,5.9-5.5c2-1.8,4.1-3.5,6.2-5.2c2.1-1.7,4.3-3.4,6.5-4.9
            l0.3,4.3c-2.3-0.7-4.5-1.5-6.8-2.4c-2.2-0.9-4.4-1.8-6.6-2.8c-2.2-1-4.3-2.2-6.3-3.5c-2-1.3-4-2.7-5.7-4.5c-0.5-0.5-0.5-1.4,0-1.9
            c0.3-0.3-0.4,1.2-0.4,1.2c2.4,0.5,4.7,1.2,6.9,2c2.2,0.8,4.4,1.7,6.5,2.7c-2.1,1,4.2,2.0,6.3,3l6.3,3.1l0.3,0.2c1.1,0.6,1.6,2,1,3.1
            c-0.2,0.5-0.6,0.8-1.1,1.1c-2.3,1.1-4.6,2.3-6.9,3.6c-2.2,1.3-4.4,2.8-6.5,4.4c-2.1,1.6-4.1,3.3-5.9,5.1c-1.9,1.8-3.7,3.7-5.3,5.8
            c-0.4,0.6-1.2,0.7-1.8,0.2S180.6,87.6,181.2,86.9"
            mask="url(#mask2)"
          />
        </svg>{' '}
      </div>
      <div className="ourProjects-container">
        {staticImages.map((image, index) => (
          <div className={`ourProjects-staticImage staticImage-${index}`} key={index}>
            {/*<img loading='lazy' src={image} alt={`Зображення ${index + 1}`} />*/}
          </div>
        ))}
        {windowWidth > 1023
          ? Array.from({ length: 4 }, (_, containerIndex) => (
              <div
                className={`ourProjects-container--grid grid-${containerIndex}`}
                key={containerIndex}>
                {containerIndex === fullImageSrc ? (
                  <Link
                    to={`/projects/info/${FullImage[containerIndex].id + 9}`}
                    className={`full-image-container ${isActive ? 'container-active' : ''}`}
                    onMouseLeave={hideFullImage}>
                    {staticImages.includes(FullImage[containerIndex].image) ? (
                      <img
                        loading="lazy"
                        src={FullImage[containerIndex].image}
                        alt={`Зображення ${containerIndex + 1}`}
                      />
                    ) : (
                      <div className={`full-image-content ${isActive ? 'active' : ''}`}>
                        <img
                          loading="lazy"
                          src={FullImage[containerIndex].image}
                          alt={`Зображення ${containerIndex + 1}`}
                        />
                        <div className="grid-item-imageInfo">
                          <p>0{FullImage[containerIndex].id + 1}</p>
                          <p>{FullImage[containerIndex].name}</p>
                          <p>{FullImage[containerIndex].square} м. кв.</p>
                        </div>
                      </div>
                    )}
                  </Link>
                ) : (
                  <div className={`grid-row `}>
                    {Array.from({ length: 4 * 6 }, (_, index) => {
                      const imageArray = imageArrays[containerIndex];

                      if (index <= 22 && imageArray[index]) {
                        return (
                          <div
                            className={`grid-item`}
                            key={index}
                            onMouseEnter={() => showFullImage(containerIndex, index)}>
                            <div className={`grid-item-content `}>
                              <img
                                loading="lazy"
                                src={imageArray[index]}
                                alt={`Зображення ${index + 1}`}
                              />
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                )}
              </div>
            ))
          : FullImage.slice(0, 3).map((item, index) => (
              <Link key={item.id} to={`/projects/info/${item.id + 9}`}>
                <div
                  className={`grid-item`}
                  onMouseEnter={() => showFullImage(index, index)}
                  style={{
                    height: '20rem',
                    backgroundImage: `url(${item.image})`,
                  }}>
                  <div className="grid-item-content">
                    <div className="grid-item-imageInfo">
                      <p> 0{item.id + 1}</p>
                      <p> {item.name}</p>
                      <p> {item.square} м. кв.</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
      <Link to="/projects" className="ourProjects-button">
        БІЛЬШЕ ПРОЄКТІВ <img loading="lazy" src={union} alt="" />
      </Link>
    </section>
  );
}

export default OurProjects;
