import "./style.scss";

import review1 from "./img/Rectangle54.png";
import review2 from "./img/Rectangle53.png";
import inst from "./img/Frame.svg";
import logo from "./img/logo.svg";

const reviews = [
  {
    image: review2,
    name: "Максим С.",
    city: "Львів",
    instagram: inst,
    nickName: "maks.sergienko",
    text: "Замовив в BureauX розробку дизайну нашого ресторану і щиро задоволений результатом. Вони вміють дійсно злитися з бажаннями клієнта і додали веселого колориту та стильного оформлення до нашого приміщення. Висока якість та велике професійне знання!",
  },
  {
    image: review1,
    name: "Оксана Т.",
    city: "Харків",
    instagram: inst,
    nickName: "oksana1986",
    text: "Дякую BureauX за стильний та сучасний дизайн мого будинку! Вони допомогли перетворити простір у гармонійне та функціональне житло. Завдяки ним моя мрія про ідеальний дім збулася! Рекомендую їх як надійного та талановитого партнера у справі створення унікальних інтер'єрів.",
  },
];

const logos = [...Array(11)].map((_, index) => logo);
function Reviews() {
  return (
    <section className="reviews" id="Reviews">
      <div className="reviews-container">
        <img src={logo} alt="#" className="reviews-container--logo" />
        <h2 className="reviews-container--title">Відгуки</h2>
        {logos.map((logo, index) => (
            <img key={index} src={logo} alt="#" className="reviews-container--logo" />
        ))}
      </div>
      <div className="reviews-people--container">
        {reviews.map((review, index) => (
          <div className="reviews-people" key={index}>
            <img src={review.image} className="reviews-people--image" alt="" />
            <p className="reviews-people--name">
              {review.name}
              <span>, {review.city}</span>
            </p>
            <a
              className="reviews-people--link"
              rel="noreferrer"
              target="_blank"
              href={`https://www.instagram.com/${review.nickName}`}
            >
              <img src={review.instagram} alt="" /> {review.nickName}
            </a>
            <p className="reviews-people--text">{review.text}</p>
          </div>
        ))}
      </div>
      <p className="reviews-description">
        Більше відгуків в нашому Інстаграмі{" "}
        <a
          href="https://www.instagram.com/bureau.x_/"
          rel="noreferrer"
          target="_blank"
        >
          bureau.x_
        </a>
      </p>
    </section>
  );
}

export default Reviews;
