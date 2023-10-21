import React from 'react';
function ServiceBlock({ service, index, openModal }) {
  return (
    <section className={`service-block ${index === 0 ? 'black-bg' : 'white-bg'}`}>
      <p className="services-center--title">{service.title}</p>
      <p className="services-center--price">{service.price}</p>
      <p className="services-center--info">{service.info}</p>
      <p className="services-center--details">{service.details}</p>
      <a href="#1" className="services-center--button" onClick={openModal}>
        {service.button}
      </a>
    </section>
  );
}

export default ServiceBlock;
