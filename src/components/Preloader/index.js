import Logo from './logo.svg';
import './style.scss';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="flex-container">
        <h1>Bureaux</h1>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Preloader;
