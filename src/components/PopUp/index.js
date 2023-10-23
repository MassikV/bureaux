import './style.scss';
import PopUpContainer from './PopUp-container';
function PopUp() {
  return (
    <section className="popUp">
      <h2 className="popUp-title">Зробіть житло Вашої мрії!</h2>
      <div className="container">
        <p className="popUp-text">
          Залишайте Ваші дані і ми Вам обов'язково передзвонимо, коли Вам буде зручніше!
        </p>
        <PopUpContainer />
      </div>
    </section>
  );
}

export default PopUp;
