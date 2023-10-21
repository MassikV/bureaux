import React, { useRef, useEffect, useState } from 'react';
import './style.scss';
import logoImg from './img/logo.svg'; // Додайте імпорт логотипу
import firstPhoto from './img/first.png';
import phonePhoto from './img/phonePhoto.png';
import firstGridPhoto from './img/photo1.png';
import secondGridPhoto from './img/photo2.png';
import thirdGridPhoto from './img/photo3.png';
import fourthGridPhoto from './img/photo4.png';
import fifthGridPhoto from './img/photo5.png';

const LOGO_WIDTHS = {
  small: 34,
  medium: 65,
  large: 85,
};
const imageMap = {
  logo: logoImg,
};

function AboutUs() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [maxLogosInRow, setMaxLogosInRow] = useState(0);

  useEffect(() => {
    function handleResize() {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      let maxLogosInRow;
      let logoWidth;

      if (windowWidth <= 480) {
        const titleWidth = titleRef.current.getBoundingClientRect().width;
        maxLogosInRow = Math.floor((containerWidth - titleWidth) / LOGO_WIDTHS.small);
        maxLogosInRow = Math.min(maxLogosInRow, 5);
        logoWidth = LOGO_WIDTHS.small;
      } else if (windowWidth <= 1023) {
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
      setWindowWidth(containerWidth);

      document.querySelectorAll('.section-container--logo').forEach((logo) => {
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

  return (
    <section className="section">
      <div className="section-container" id="AboutUs" ref={containerRef}>
        <img src={logoImg} alt="#" className="section-container--logo" />
        <h1 className="section-container--title" ref={titleRef}>
          Про нас
        </h1>

        {logos.map((logo, index) => (
          <img src={logo} alt="#" className="reviews-container--logo" key={index} />
        ))}
      </div>

      <div className="section-grid">
        <div className="section-grid__container--photo">
          <img
            src={windowWidth <= 1023 ? phonePhoto : firstPhoto}
            alt="f"
            className="section-grid--photo"
          />
        </div>
        <p className="section-grid--bureaux">
          <span>BureauX (Бюро Ікс)</span> – бюро архітектури та дизайну, засновниками якого є молоде
          подружжя архітекторів за освітою та захопленням. Вже понад 5 років ми розвиваємося у цій
          сфері та даруємо людям приємні емоції під час розробки дизайну та ремонту.
        </p>
        <p className="section-grid--mission">
          <span>Наша місія</span> – створювати ідеальний та унікальний простір для клієнтів з
          урахуванням їхніх потреб та бажань, використовуючи сучасні технології та інноваційні ідеї
          в дизайні, приділяючи увагу деталям та якості матеріалів.
        </p>
        <p className="section-grid--conclusion">
          Ми просуваємо <b>новий стиль українського дизайну</b>, поєднуючи сучасні тенденції та
          українські традиції, щоб створити для наших клієнтів затишний простір, який відповідає
          їхньому способу життя.
        </p>
      </div>
      <div className="section-containers">
        {windowWidth > 1023 ? (
          <div className="logo-container">
            {logos.slice(0, 2).map((logo, index) => (
              <img src={logo} alt="#" className="reviews-container--logo" key={index} />
            ))}
            <h2 className="title">Чому слід обирати нас</h2>
            {logos.slice(0, 1).map((logo, index) => (
              <img src={logo} alt="#" className="reviews-container--logo" key={index} />
            ))}
          </div>
        ) : (
          <>
            <h2 className="title">Чому слід обирати нас</h2>
            <div className="logo-container logo-containers">
              {logos.map((logo, index) => (
                <img src={logo} alt="#" className="reviews-container--logo" key={index} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="container">
        <span className="container-number box1">01</span>
        <h3 className="container-title box1-title">Відносини з клієнтом</h3>
        <p className="container-info box1-paragraph">
          Для нас клієнт – це потенційний друг. Ми ведемо чесні та відкриті стосунки, а також
          прагнемо зберігати довгострокові відносини зі своїми замовниками.
        </p>
        <img src={firstGridPhoto} alt="" className="container-image box1-photo" />
        <span className="container-number box2">02</span>
        <h3 className="container-title box2-title">Якість та надійність</h3>
        <p className="container-info box2-paragraph">
          Надійність - це головна ознака гарного ремонту та добре спроектованого будинку. Ми надаємо
          гарантії як на ремонтні роботи, так і на дизайн-проект.
        </p>
        <img src={secondGridPhoto} alt="" className="container-image box2-photo" />
        <span className="container-number box3">03</span>
        <h3 className="container-title box3-title">Український етнос</h3>
        <p className="container-info box3-paragraph">
          Ми цінуємо та поважаємо нашу українську культуру та віримо, що український етнос
          любитимуть не лише у нас на батьківщині, а й у всьому світі, більше ніж скандинавський
          стиль.
        </p>
        <img src={thirdGridPhoto} alt="" className="container-image box3-photo" />
        <span className="container-number box4">04</span>
        <h3 className="container-title box4-title">Сімейні цінності</h3>
        <p className="container-info box4-paragraph">
          Ми знаємо, як важливо проводити час із сім'єю, і як важливий сімейний затишок, тому
          враховуємо побажання та захоплення всіх членів сім'ї для створення приємної атмосфери
          вдома.
        </p>
        {windowWidth > 480 && windowWidth <= 1024 && (
          <img src={fifthGridPhoto} alt="" className="container-image box3-photo" />
        )}
        <img src={fourthGridPhoto} alt="" className="container-image box4-photo" />
      </div>
    </section>
  );
}

export default AboutUs;
