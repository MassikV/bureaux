import './style.scss';
import logo from '../../img/black-logo.png';
import { Link } from 'react-scroll';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <Link
              to="First"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="footer-logo">
              <img loading="lazy" src={logo} alt="Bureaux" />
            </Link>
            <span className="footer-info--item">Design & Architecture</span>
            <span className="footer-info--item">Україна, Київ</span>
            <span className="footer-info--item">Copyright</span>
          </div>
          <div className="footer-navigation">
            <h3 className="footer-navigation--title">Навігація</h3>
            <Link to="First" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="footer-navigation--item">Головна</span>
            </Link>
            <Link to="AboutUs" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="footer-navigation--item">Про нас</span>
            </Link>
            <Link to="Services" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="footer-navigation--item">Послуги</span>
            </Link>
            <Link to="Projects" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="footer-navigation--item">Проєкти</span>
            </Link>
            <Link to="Reviews" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="footer-navigation--item">Відгуки</span>
            </Link>
            <Link to="FAQs" spy={true} smooth={true} offset={-70} duration={500}>
              <span className="footer-navigation--item">Запитання</span>
            </Link>
          </div>
          <div className="footer-contacts">
            <h3 className="footer-contacts--title">Контакти</h3>
            <a href="tel:+380 98 979 86 48" rel="noreferrer" target="_blank">
              <span className="footer-contacts--item">+380 98 979 86 48</span>
            </a>
            <a href="mailto:bureaux.ivan@gmail.com" rel=" noreferrer" target="_blank">
              <span className="footer-contacts--item">bureaux.ivan@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/bureau.x_/" rel="noreferrer" target="_blank">
              <span className="footer-contacts--item">Instagram</span>
            </a>
            <a href="https://www.facebook.com/BureaX" rel="noreferrer" target="_blank">
              <span className="footer-contacts--item">Facebook</span>
            </a>
            <a href="https://www.behance.net/bureaux" rel="noreferrer" target="_blank">
              <span className="footer-contacts--item">Behance</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
