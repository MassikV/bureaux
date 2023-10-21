import React, { useEffect, useRef, useState } from 'react';
import logoImg from './img/logo.svg';
import review1Img from './img/Rectangle54.svg';
import review2Img from './img/Rectangle53.svg';
import instImg from './img/Frame.svg';
import './style.scss';

const LOGO_WIDTHS = {
  small: 34,
  medium: 65,
  large: 85,
};

const reviews = [
  {
    image: review2Img,
    name: 'Максим С.',
    city: 'Київ',
    instagram: instImg,
    nickName: 'maks.sergienko',
    text: 'Замовив в BureauX розробку дизайну нашого ресторану і щиро задоволений результатом. Вони вміють дійсно злитися з бажаннями клієнта і додали веселого колориту та стильного оформлення до нашого приміщення. Висока якість та велике професійне знання!',
  },
  {
    image: review1Img,
    name: 'Оксана Т.',
    city: 'Київ',
    instagram: instImg,
    nickName: 'oksana1986',
    text: "Дякую BureauX за стильний та сучасний дизайн мого будинку! Вони допомогли перетворити простір у гармонійне та функціональне житло. Завдяки ним моя мрія про ідеальний дім збулася! Рекомендую їх як надійного та талановитого партнера у справі створення унікальних інтер'єрів.",
  },
];

const imageMap = {
  logo: logoImg,
  review1: review1Img,
  review2: review2Img,
  inst: instImg,
};

function Reviews() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [maxLogosInRow, setMaxLogosInRow] = useState(0);

  useEffect(() => {
    function handleResize() {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      let maxLogosInRow;
      let logoWidth;

      const newWindowWidth = window.innerWidth; // Отримайте поточну ширину вікна

      if (newWindowWidth <= 480) {
        const titleWidth = titleRef.current.getBoundingClientRect().width;
        maxLogosInRow = Math.floor((containerWidth - titleWidth) / LOGO_WIDTHS.small);
        maxLogosInRow = Math.min(maxLogosInRow, 7);
        logoWidth = LOGO_WIDTHS.small;
      } else if (newWindowWidth <= 1024) {
        const titleWidth = titleRef.current.getBoundingClientRect().width;
        maxLogosInRow = Math.floor((containerWidth - titleWidth) / LOGO_WIDTHS.medium);
        maxLogosInRow = Math.min(maxLogosInRow, 9);
        logoWidth = LOGO_WIDTHS.medium;
      } else {
        const titleWidth = titleRef.current.getBoundingClientRect().width;
        maxLogosInRow = Math.floor((containerWidth - titleWidth) / LOGO_WIDTHS.large);
        logoWidth = LOGO_WIDTHS.large;
      }

      setMaxLogosInRow(maxLogosInRow);
      setWindowWidth(newWindowWidth); // Оновіть windowWidth

      document.querySelectorAll('.reviews-container--logo').forEach((logo) => {
        logo.style.width = `${logoWidth}px`;
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const logos = new Array(maxLogosInRow || 0).fill(imageMap.logo);

  const getReviews = () => {
    return reviews.map((review, index) => {
      const { image, name, city, instagram, nickName, text } = review;

      return (
        <div className="reviews-people" key={index}>
          <img src={image} className="reviews-people--image" alt="" />
          <p className="reviews-people--name">
            {name}
            <span>, {city}</span>
          </p>
          <a
            className="reviews-people--link"
            rel="noreferrer"
            target="_blank"
            href={`https://www.instagram.com/${nickName}`}>
            <img src={instagram} alt="" />
            {nickName}
          </a>
          <p className="reviews-people--text">{text}</p>
        </div>
      );
    });
  };

  return (
    <section className="reviews" id="Reviews">
      <div className="reviews-content">
        <div className="reviews-container" ref={containerRef}>
          <img src={logoImg} alt="#" className="reviews-container--logo" />
          <h2 className="reviews-container--title" ref={titleRef}>
            Відгуки
          </h2>
          {logos.map((logo, index) => (
            <img src={logo} alt="#" className="reviews-container--logo" key={index} />
          ))}
        </div>
        <div className="reviews-people--container">{getReviews()}</div>
        <p className="reviews-description">
          Більше відгуків в нашому Інстаграмі{' '}
          <a href="https://www.instagram.com/bureau.x_/" rel="noreferrer" target="_blank">
            bureau.x_
          </a>
        </p>
      </div>
    </section>
  );
}

export default Reviews;
