import './style.scss';
import firstPhoto from "./img/first.png"
import firstGridPhoto from "./img/photo1.png"
import secondGridPhoto from "./img/photo2.png"
import thirdGridPhoto from "./img/photo3.png"
import fourthGridPhoto from "./img/photo4.png"
import logo from "./img/logo.svg"
import ornament from "./img/ornament.png"
import ornament1 from "./img/ornament1.png"

function AboutUs(){
  return(
      <section className="section" id="AboutUs">
        <div className="section-container">
          <img src={logo} alt="#" className="section-container--logo"/>
          <h1 className="section-container--title">Про нас</h1>
          <img src={ornament} alt="#"/>
        </div>
        <div className="section-grid">
          <img src={firstPhoto} alt="f" className="section-grid--photo"/>
          <p className="section-grid--bureaux"><span>BureauX (Бюро Ікс)</span> – бюро архітектури та дизайну, засновниками якого є молоде подружжя архітекторів за освітою та захопленням. Вже понад 5 років ми розвиваємося у цій сфері та даруємо людям приємні емоції під час розробки дизайну та ремонту.</p>
          <p className="section-grid--mission"><span>Наша місія</span> – створювати ідеальний та унікальний простір для клієнтів з урахуванням їхніх потреб та бажань, використовуючи сучасні технології та інноваційні ідеї в дизайні, приділяючи увагу деталям та якості матеріалів.</p>
          <p className="section-grid--conclusion">Ми просуваємо <b>новий стиль українського дизайну</b>, поєднуючи сучасні тенденції та українські традиції, щоб створити для наших клієнтів затишний простір, який відповідає їхньому способу життя.</p>
        </div>
        <div className="section-container">
        <img src={ornament1} alt="#" className="section-container--ornament1"/>
        <h2 className="title">Чому слід обирати нас?</h2>
        <img src={logo} alt="#" className="section-container--logo"/>
        </div>
        <div className="container">
            <span  className="container-number box1">01</span>
            <h3 className="container-title box1-title">Відносини з клієнтом</h3>
            <p className="container-info box1-paragraph">Для нас клієнт – це потенційний друг. Ми ведемо чесні та відкриті стосунки, а також прагнемо зберігати довгострокові відносини зі своїми замовниками.</p>
            <img src={firstGridPhoto} alt="" className="container-image box1-photo"/>
            <span  className="container-number box2">02</span>
            <h3 className="container-title box2-title">Якість та надійність</h3>
            <p className="container-info box2-paragraph">Надійність - це головна ознака гарного ремонту та добре спроектованого будинку. Ми надаємо гарантії як на ремонтні роботи, так і на дизайн-проект.</p>
            <img src={secondGridPhoto} alt="" className="container-image box2-photo"/>
            <span className="container-number box3">03</span>
            <h3 className="container-title box3-title">Український етнос</h3>
            <p className="container-info box3-paragraph">Ми цінуємо та поважаємо нашу українську культуру та віримо, що український етнос любитимуть не лише у нас на батьківщині, а й у всьому світі, більше ніж скандинавський стиль.</p>
            <img src={thirdGridPhoto} alt="" className="container-image box3-photo"/>
            <span  className="container-number box4">04</span>
            <h3 className="container-title box4-title">Сімейні цінності</h3>
            <p className="container-info box4-paragraph">Ми знаємо, як важливо проводити час із сім'єю, і як важливий сімейний затишок, тому враховуємо побажання та захоплення всіх членів сім'ї для створення приємної атмосфери вдома.</p>
            <img src={fourthGridPhoto} alt="" className="container-image box4-photo"/>
          {/*<div className="container-grid">*/}




          {/*</div>*/}
        </div>

      </section>
  )
}
export default AboutUs;