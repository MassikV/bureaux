import React, { useState } from 'react';

function BurgerMenu({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="burger-menu-line"></div>
      <div className="burger-menu-line"></div>
    </div>
  );
}

export default BurgerMenu;
