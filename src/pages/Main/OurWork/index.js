import './style.scss';
import React, { useRef, useState, useEffect } from 'react';
import frame from './img/Frame.svg';
import frame1 from './img/Frame1.svg';
import frame2 from './img/Frame2.svg';
import frame3 from './img/Frame3.svg';
import logo from './img/logo.svg';

const ourWorks = [
  {
    image: frame,
    title: 'Попередній ескіз',
    text: "Визначення стилістичного рішення інтер'єру, підготовка технічних завдань, планувальних рішень, колажів для всіх приміщень.",
  },
  {
    image: frame1,
    title: 'Візуализація проєкта',
    text: "Детальна візуалізація кожної кімнати. 3D-зображення враховують раніше вибрані елементи інтер'єру та оздоблювальні матеріали",
  },
  {
    image: frame2,
    title: 'Рабоча документація',
    text: "Створення робочої документації для проєкту дизайну інтер'єру: специфікації та планування з меблями.",
  },
  {
    image: frame3,
    title: 'Авторський нагляд',
    text: "Контроль відповідність будівельних робіт проєктному плану. Наш дизайнер та інженер регулярно відвідують об'єкт і все контролюють. Ми здійснюємо закупівлю матеріалів.",
  },
];

function OurWork() {
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const logoWidth = windowWidth <= 480 ? 34 : windowWidth <= 1024 ? 65 : 85;

  const maxLogosInRow = Math.floor(windowWidth / logoWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formatIndex = (index) => {
    const formattedIndex = index + 1;
    return formattedIndex < 10 ? `0${formattedIndex}` : formattedIndex;
  };

  const logos = Array(maxLogosInRow)
    .fill(null)
    .map((_, index) => <img src={logo} alt="#" className="section-container--logo" key={index} />);

  useEffect(() => {
    let activeBlock;
    const handleScroll = () => {
      const scrollable = mainRef.current;
      if (!scrollable) return;

      const activeLine = document.querySelector('.line.line--active');
      const blocks = [...document.getElementsByClassName('ourWork-container')];

      const blocksPercentages = blocks.reduce((acc, block, index, arr) => {
        if (!index) {
          acc.push(0);
          return acc;
        }

        const blockPercentage = 100 / arr.length;
        acc.push(acc[acc.length - 1] + blockPercentage);

        return acc;
      }, []);

      const getScrolledPercentage = () => {
        const { top, height } = scrollable.getBoundingClientRect();
        if (top >= 0) return 0;

        return Math.min((Math.abs(top) / height) * 100, 100);
      };

      const getActiveBlockIndex = (scrollPercentage) => {
        return blocksPercentages.findIndex((percentage, index, arr) => {
          if (index === arr.length - 1) return true;

          const nextPercentage = arr[index + 1];
          return scrollPercentage >= percentage && scrollPercentage < nextPercentage;
        });
      };

      const scrollPercentage = getScrolledPercentage();

      if (scrollPercentage >= 95) {
        const activeLine = document.querySelector('.line.line--active');
        activeLine.style.height = '100%';
      } else {
        const activeLine = document.querySelector('.line.line--active');
        activeLine.style.height = `${scrollPercentage}%`;
      }

      if (activeBlock) {
        activeBlock.classList.remove('block--active');
      }

      activeBlock = blocks[getActiveBlockIndex(scrollPercentage)];

      setActiveBlockIndex(getActiveBlockIndex(scrollPercentage));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="ourWork" id="OurWork" ref={mainRef}>
      <div className="ourWork__container">
        <div className="ourWork-header">
          {windowWidth > 1024 && (
            <>
              {logos.slice(0, 2)}
              <h2 className="ourWork-header--title">як ми працюємо</h2>
              {logos.slice(0, 5)}
            </>
          )}
          {windowWidth <= 480 && (
            <>
              <h2 className="ourWork-header--title">як ми працюємо</h2>
              <div className="header-logo">{logos.slice(0, 6)}</div>
            </>
          )}
          {windowWidth > 480 && windowWidth <= 1024 && (
            <>
              <h2 className="ourWork-header--title">як ми працюємо</h2>
              <div className="header-logo">{logos.slice(0, 2)}</div>
            </>
          )}
        </div>
        <div className="ourWork__content">
          <div className="ourWork__line-container">
            <div className="line line--base"></div>
            <div className="line line--active"></div>
          </div>

          {ourWorks.map((works, index) => (
            <>
              <div className={`ourWork-container box-${index + 1}`}>
                <img
                  src={works.image}
                  className={`ourWork-container--image image-box${index + 1} ${
                    index === 2 ? 'image-box3' : 'image-box4'
                  } ${windowWidth >= 1024 && index === activeBlockIndex ? 'block--active' : ''} `}
                  alt=""
                  style={{
                    borderRadius:
                      index % 4 === 0
                        ? '10px 10px 0 10px'
                        : index % 4 === 1
                        ? '10px 10px 10px 0'
                        : index % 4 === 2
                        ? '10px 0 10px 10px'
                        : '0 10px 10px 10px',
                  }}
                />
              </div>
              <div
                className={`ourWork-container--stepper stepper-${index + 1} ${
                  windowWidth >= 1024 && index === activeBlockIndex ? 'active-number' : ''
                }`}>
                <div className="step-number">{formatIndex(index)}</div>
              </div>
              <div
                className={`ourWork-container--info info-box${index + 1}
                 ${windowWidth >= 1024 && index === activeBlockIndex ? 'block--active' : ''}`}>
                <h3 className="ourWork-container--title">{works.title}</h3>
                <p className="ourWork-container--text box">{works.text}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
