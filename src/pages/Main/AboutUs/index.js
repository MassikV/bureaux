import React, {useEffect,useState} from "react";
import './style.scss';
import firstPhoto from "./img/first.png"
import phonePhoto from "./img/phonePhoto.png"
import firstGridPhoto from "./img/photo1.png"
import secondGridPhoto from "./img/photo2.png"
import thirdGridPhoto from "./img/photo3.png"
import fourthGridPhoto from "./img/photo4.png"
import fifthGridPhoto from "./img/photo5.png"
import logo from "./img/logo.svg"

function AboutUs(){

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let logoWidth;

  if (window.innerWidth <= 480) {
    logoWidth = 34; 
  } else if (window.innerWidth > 480 && window.innerWidth <= 1024) {
    logoWidth = 65; 
  } else {
    logoWidth = 85; 
  }

  const maxLogosInRow = Math.floor(windowWidth / logoWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logos = Array(maxLogosInRow).fill(null).map((_, index) => (
      <img src={logo} alt="#" className="section-container--logo" key={index} />
  ));

  return (
    <section className="section" id="AboutUs">
      <div className="section-container">
        {window.innerWidth <= 480 ? (
            <div className="logo-container">
              <h1 className="section-container--title">Про нас</h1>
              {logos.slice(0, 5)}
            </div>
        ) : window.innerWidth > 480 && window.innerWidth <= 1024 ? (
                <>
                  <img src={logo} alt="#" className="section-container--logo" />
                  <h1 className="section-container--title">Про нас</h1>
                  {logos.slice(0, 7)}
                </>
            ) : window.innerWidth > 1024 ? (
            <>
              <img src={logo} alt="#" className="section-container--logo" />
              <h1 className="section-container--title">Про нас</h1>
              {logos}
            </>
        ) :  window.innerWidth <= 1024 ? (
            <div className="logo-container">
              <h1 className="section-container--title">Про нас</h1>
              {logos.slice(0, 9)}
            </div>
        ) : null}
      </div>


      <div className="section-grid">
        <img
          src={window.innerWidth <= 1024 ? phonePhoto : firstPhoto}
          alt="f"
          className="section-grid--photo"
        />
        <p className="section-grid--bureaux">
          <span>BureauX (Бюро Ікс)</span> – бюро архітектури та дизайну,
          засновниками якого є молоде подружжя архітекторів за освітою та
          захопленням. Вже понад 5 років ми розвиваємося у цій сфері та даруємо
          людям приємні емоції під час розробки дизайну та ремонту.
        </p>
        <p className="section-grid--mission">
          <span>Наша місія</span> – створювати ідеальний та унікальний простір
          для клієнтів з урахуванням їхніх потреб та бажань, використовуючи
          сучасні технології та інноваційні ідеї в дизайні, приділяючи увагу
          деталям та якості матеріалів.
        </p>
        <p className="section-grid--conclusion">
          Ми просуваємо <b>новий стиль українського дизайну</b>, поєднуючи
          сучасні тенденції та українські традиції, щоб створити для наших
          клієнтів затишний простір, який відповідає їхньому способу життя.
        </p>
      </div>
      <div className="section-containers">
        {window.innerWidth > 1024 && (
            <div className="logo-container">
              {logos.slice(0, 2)}
                  <h2 className="title">Чому слід обирати нас</h2>
              {logos.slice(0, 1)}
            </div>
        )}
        {windowWidth <= 1024 && (
            <h2 className="title">Чому слід обирати нас</h2>
        )}
        {window.innerWidth <= 1024 && window.innerWidth > 480 && (
            <div className="logo-container logo-containers">
              {logos.slice(0, 6)}
            </div>
        )}
        {window.innerWidth <= 480 && (
            <div className="logo-container logo-containers">
              {logos}
            </div>
        )}
      </div>
      <div className="container">
        <span className="container-number box1">01</span>
        <h3 className="container-title box1-title">Відносини з клієнтом</h3>
        <p className="container-info box1-paragraph">
          Для нас клієнт – це потенційний друг. Ми ведемо чесні та відкриті
          стосунки, а також прагнемо зберігати довгострокові відносини зі своїми
          замовниками.
        </p>
        <img
          src={firstGridPhoto}
          alt=""
          className="container-image box1-photo"
        />
        <span className="container-number box2">02</span>
        <h3 className="container-title box2-title">Якість та надійність</h3>
        <p className="container-info box2-paragraph">
          Надійність - це головна ознака гарного ремонту та добре спроектованого
          будинку. Ми надаємо гарантії як на ремонтні роботи, так і на
          дизайн-проект.
        </p>
        <img
          src={secondGridPhoto}
          alt=""
          className="container-image box2-photo"
        />
        <span className="container-number box3">03</span>
        <h3 className="container-title box3-title">Український етнос</h3>
        <p className="container-info box3-paragraph">
          Ми цінуємо та поважаємо нашу українську культуру та віримо, що
          український етнос любитимуть не лише у нас на батьківщині, а й у
          всьому світі, більше ніж скандинавський стиль.
        </p>
        <img
          src={thirdGridPhoto}
          alt=""
          className="container-image box3-photo"
        />
        <span className="container-number box4">04</span>
        <h3 className="container-title box4-title">Сімейні цінності</h3>
        <p className="container-info box4-paragraph">
          Ми знаємо, як важливо проводити час із сім'єю, і як важливий сімейний
          затишок, тому враховуємо побажання та захоплення всіх членів сім'ї для
          створення приємної атмосфери вдома.
        </p>
        {window.innerWidth > 480 && window.innerWidth <= 1024 && (
            <img src={fifthGridPhoto} alt="" className="container-image box3-photo" />
          )}
            <img
          src={fourthGridPhoto}
          alt=""
          className="container-image box4-photo"
        />
      </div>
    </section>
  );
}
export default AboutUs;