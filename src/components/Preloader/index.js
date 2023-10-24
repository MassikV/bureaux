import './style.scss';

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader">
        <div className="preloader-inner"></div>
        <div className="preloader-text">Loading...</div>
      </div>
    </div>
  );
};
export default Preloader;
