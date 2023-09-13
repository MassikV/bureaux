import React from "react";
import "./style.scss";
import firstFamilyPhoto from "./img/family1.png";
import secondFamilyPhoto from "./img/family2.png";
import foundersIvan from "./img/Ivan.png";
import foundersDasha from "./img/Daria.png";
import ornament from "./img/ornament.png";
import FoundersCarousel from "./FoundersCarousel";

const founders = [
  {
    image: foundersIvan,
    name: "Іван",
    title: "Головний архітектор та керівник BureauX",
    info: "На сьогоднішній день я вважаю себе батьком двох дітей: сина та нашого архітектурного бюро.",
    text: "“Ціную в людях відкритість до спілкування та щирість. Для мене також є дуже важливим, залишатися друзями із нашими замовниками та не губитися після їхнього переїзду, тому робимо все можливе, щоб залишитися у добрих стосунках!”",
  },
  {
    image: foundersDasha,
    name: "Дар’я",
    title: "Головний дизайнер та генератор творчих ідей",
    info: "«Для мене дизайн – це робота душі! З особливим задоволення працюю із замовниками задля втілення їх мрій та бажань!",
    text: "Дизайн - це спосіб наповнити оселю вашою душею!\t Важливо, щоб простір був не тільки зручний для вас, а й надихаючим!»",
  },
];

function Founders() {
  return (
      <section className="founders">
        <h1 className="founders-title">Засновники</h1>
        <div className="founders-img">
          <img src={firstFamilyPhoto} alt="" />
          <p>молоде подружжя архітекторів за освітою та захопленням</p>
          <img src={secondFamilyPhoto} alt="" />
        </div>
        <div className="founders-carousel">
          <FoundersCarousel >
            {founders.map((founder, index) => (
                <div className="founders-container" key={index}>
                  <img src={founder.image} alt="img" />
                  <img
                      src={ornament}
                      alt=""
                      className="founders-container--ornament"
                  />
                  <p className="founders-container--name">{founder.name}</p>
                  <h4 className="founders-container--title">{founder.title}</h4>
                  <p className="founders-container--info">{founder.info}</p>
                  <p className="founders-container--text">{founder.text}</p>
                </div>
            ))}
          </FoundersCarousel>
        </div>
      </section>
  );
}

export default Founders;
