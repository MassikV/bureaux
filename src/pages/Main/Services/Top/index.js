import React from 'react';
import logotype from '../img/logos.svg';

function Top() {
  const logoWidth = window.innerWidth <= 480 ? 34 : window.innerWidth <= 1024 ? 65 : 85;

  const maxLogosInRow = Math.floor(window.innerWidth / logoWidth);
  const logos = Array(maxLogosInRow)
    .fill(null)
    .map((_, index) => (
      <img loading="lazy" src={logotype} alt="#" className="section-container--logo" key={index} />
    ));

  return (
    <section className="services-top">
      <div className="service-top-content">
        <div className="services-top--logos">
          <h2 className="services-top--title">Послуги</h2>
          {window.innerWidth < 1023 && logos}
        </div>
      </div>
    </section>
  );
}
export default React.memo(Top);
