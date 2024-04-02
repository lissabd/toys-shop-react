import React, { useState } from 'react';
import './styles/nav.css';
import { Link } from 'react-router-dom';
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";

const Nav = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };
  return (
    <header>
      <div className="logo">
      <Link to="/"><img src="./images/header-icon.png" alt="Логотип сайта" /></Link>
      </div>
      <div className="icons-menu">
        <Link to="/cart"> 
          <SlBasket className="cart-icon" />
        </Link>
        <Link to="/login">
          <AiOutlineUser className="user-icon" />
        </Link>
      </div>
      <div className="contact-bar">
        <p>СВЯЗАТЬСЯ: 123-456-7890 БЕЗ ВЫХОДНЫХ С 9:00 ДО 7:00 PM</p>
      </div>
      <div className="menu-container">
        <nav className={`main-menu ${isBurgerMenuOpen ? 'active' : ''}`}>
          <ul className={`nav-links ${isBurgerMenuOpen ? 'active' : ''}`}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/shop">Каталог</Link></li>
          </ul>
        </nav>
        <div className="burger-menu" onClick={toggleBurgerMenu}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
