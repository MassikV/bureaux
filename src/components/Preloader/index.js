import Logo from './logos.svg';
import './style.scss';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="flex-container">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Preloader;
