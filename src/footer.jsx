import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer-main">
      <div className="footer-grid">
        <section className="footer-1">
          <Link to="/"><img src="./images/header-icon.png" alt="Логотип сайта в подвале" /></Link>
          <p className="in-footer"> Информация о разработчике:
          </p>
          <p>ФИО: Абдеева А.Р. 
          </p>
          <p>Группа: ИКБО-16-22</p>

        </section>
        <section className="footer-2">
          <p><strong>Информация</strong></p>
          <ul className="links">
          <Link to="/about"><li><a>О нас</a></li></Link>
          <Link to="/about"> <li><a>Связаться</a></li></Link>
          <Link to="/"> <li><a >Главная</a></li></Link>
          <Link to="/login">  <li><a>Зарегистрироваться</a></li></Link>
          </ul>
        </section>
        <section className="footer-3">
          <p><strong>Почему именно мы</strong></p>
          <ul className="links-for-third">
          <Link to="/cart">  <li><a >Быстрый заказ</a></li></Link>
          <Link to="/shop"> <li><a >Удобный каталог</a></li></Link>
          <Link to="/shop">  <li><a >Ассортимент</a></li></Link>
          <Link to="/login"> <li><a >Отзывы</a></li></Link>
          </ul>
        </section>
        <section className="footer-4">
          <p><strong>Поддерживать связь</strong></p>
          <div className="email-input-container">
            <input type="email" className="email-input" placeholder="Введите почту..." />
          </div>   
          <div className='forbut'>
            <button>Отправить</button>
          </div> 
         
          <div>
            
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;