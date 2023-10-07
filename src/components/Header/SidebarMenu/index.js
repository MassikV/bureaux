import React from "react";
import ornament from '../img/ornament.png'
function SidebarMenu({ isOpen, onClose }) {
  return (
      <div className={`sidebar-menu ${isOpen ? "open" : ""}`}>
        <img src={ornament} alt=""/>
        <ul className="list">
          <li className="list-item"><a href="/bureaux/#AboutUs">Про нас</a></li>
          <li className="list-item"><a href="/bureaux/#Projects">Проєкти</a></li>
          <li className="list-item"><a href="/bureaux/#OurWork">Як ми працюємо</a></li>
          <li className="list-item"><a href="/bureaux/#Services">Послуги</a></li>
        </ul>
        <button className="sidebar-menu-button" onClick={onClose}>
          Замовити
        </button>
      </div>
  );
}

export default SidebarMenu;
