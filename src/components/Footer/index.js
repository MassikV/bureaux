import './style.scss';
import logo from './logo.png';
function Footer(){
  return(
      <footer className="footer">
        <ul className="footer-info">
          <li className="footer-info--item">
            <a href="/" className="footer-logo">
            <img src={logo} alt="Bureau" />
          </a></li>
          <li className="footer-info--item">Design & Architecture</li>
          <li className="footer-info--item">Україна, Київ</li>
          <li className="footer-info--item">Copyright</li>
        </ul>
        <ul className="footer-navigation">
          <li className="footer-navigation--item">Навігація</li>
          <li className="footer-navigation--item"><a href="/#Header">Головна</a></li>
          <li className="footer-navigation--item"><a href="/#AboutUs">Про нас</a></li>
          <li className="footer-navigation--item"><a href="/#Services">Послуги</a></li>
          <li className="footer-navigation--item"><a href="/#Projects">Проєкти</a></li>
          <li className="footer-navigation--item"><a href="/#Reviews">Відгуки</a></li>
          <li className="footer-navigation--item"><a href="/#FAQs">Запитання</a></li>
        </ul>
        <ul className="footer-contacts">
          <li className="footer-contacts--item">Контакти</li>
          <li className="footer-contacts--item"><a href="tel:+380 098 979 86 48" rel="noreferrer"  target="_blank">+380 098 979 86 48</a></li>
          <li className="footer-contacts--item"><a href="mailto:bureaux.ivan@gmail.com" rel="noreferrer"  target="_blank">bureaux.ivan@gmail.com</a></li>
          <li className="footer-contacts--item"><a href="https://www.instagram.com/bureau.x_/" rel="noreferrer"  target="_blank">Instagram</a></li>
          <li className="footer-contacts--item"><a href="https://www.facebook.com/BureaX" rel="noreferrer"  target="_blank">Facebook</a></li>
          <li className="footer-contacts--item"><a href="https://www.behance.net/bureaux" rel="noreferrer"  target="_blank">Behance</a></li>
        </ul>
      </footer>
  )
}
export default Footer;