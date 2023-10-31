import Logo from './Logo.svg';
import './style.scss';

const Preloader = () => {
  return (
      <div className="preloader-container">
        <img src={Logo} alt="Logo" />
      </div>
  );
};

export default Preloader;
