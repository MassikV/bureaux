import React from 'react';
import { Link } from 'react-scroll'; // Імпортуємо Link для використання реактивного прокручування
import ornament from '../img/ornament.png';

function SidebarMenu({ isOpen, onClose }) {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      <img src={ornament} alt="" />
      <ul className="list">
        <li className="list-item">
          <Link to="AboutUs" smooth={true} duration={1000} onClick={onClose}>
            Про нас
          </Link>
        </li>
        <li className="list-item">
          <Link to="Projects" smooth={true} duration={1000} onClick={onClose}>
            Проєкти
          </Link>
        </li>
        <li className="list-item">
          <Link to="OurWork" smooth={true} duration={1000} onClick={onClose}>
            Як ми працюємо
          </Link>
        </li>
        <li className="list-item">
          <Link to="Services" smooth={true} duration={1000} onClick={onClose}>
            Послуги
          </Link>
        </li>
      </ul>
      <button className="sidebar-menu-button" onClick={onClose}>
        Замовити
      </button>
    </div>
  );
}

export default SidebarMenu;
