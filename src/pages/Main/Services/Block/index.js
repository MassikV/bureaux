function ServiceBlock({ service, index, openModal }) {
  return (
    <section className={`service-block ${index === 0 ? 'black-bg' : 'white-bg'}`}>
      <p className="services-center--title">{service.title}</p>
      <p className="services-center--price">{service.price}</p>
      <p className="services-center--info">{service.info}</p>
      <p className="services-center--details">{service.details}</p>
      <button className="services-center--button" onClick={openModal}>
        {service.button}
      </button>
    </section>
  );
}

export default React.memo(ServiceBlock);
