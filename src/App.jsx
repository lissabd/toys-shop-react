import React, { useState }  from 'react';
import Nav from './nav';
import Footer from './footer';
import Shop from './shop';
import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/App.css';
import Cart from './cart';
import About from './about';
import Login from './Login';
import Registration from './Registration';
import Homeproduct from './homeproduct';
import './styles/home.css';
import ShopButton from './UI/ShopButton';
import { Link } from 'react-router-dom';
import BrandGallery from './BrandGallery';
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";


const Home = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');

  const handleSubscribe = () => {
    // После успешной подписки обновляем состояние
    setSubscriptionStatus('Отправлено');
    setEmail(''); // Очищаем введенный email
  };
  return (
    <>
    <div className="card-container">
      <div className="bigCard">
        <div className='big-text'>
          <h1>
          Эксклюзивные игрушки
          </h1>
          <p>Специальные предложения только у нас</p>
          <Link to="/shop"><ShopButton>Купить сейчас</ShopButton></Link>
        </div>
        <div className='toy-card'>
          <img src='./images/meccano/meccano-5.png' alt="robot"/>
        </div>
      </div>
      <div className="smallCardsContainer">
        <div className="smallCard first">
          <div className='small-text'>
             <div className='first-pic'>
                <img src='./images/plushes/plush-5.png' alt="lion"/>
             </div>
            <h2>Ознакомьтесь</h2>
            <p>с каталогом</p>
            <Link to="/shop"><ShopButton>Купить сейчас</ShopButton></Link>
          </div>
          <div className='small-plush'>
            <img src='./images/plushes/plush-5.png' alt="lion"/>
          </div>
        </div>
        <div className="smallCard second">
        <img src='./images/фон.png' alt="фог"/>
        <div className='fon-card'>
        <div className='small-last-text'>
            <h3>Новые поступления</h3>
            <p>товаров Lego</p>
            <Link to="/shop"><ShopButton>Купить сейчас</ShopButton></Link>
          </div>
        </div>         
        </div>
      </div>
    </div>
    <div className="grid-container">
            <div className="grid-item"> <img className='re' src="./images/images-in-line-1page/books.jpg" alt="books"/>
                <p>Книжки</p>
            </div>
            <div className="grid-item"> <img src="./images/images-in-line-1page/cars.jpg" alt="cars"/>
                <p>Машины</p>
            </div>
            <div className="grid-item">  <img src="./images/images-in-line-1page/dolls.jpg" alt="dolls"/>
               <p>Куклы</p>
            </div>
            <div className="grid-item">  <img className='re' src="./images/images-in-line-1page/meccano.jpg" alt="meccano"/>
                <p>Конструкторы</p>
            </div>
            <div className="grid-item">   <img src="./images/images-in-line-1page/plush.jpg" alt="plush"/>
                <p>Плюшевые</p>
            </div>
            <div className="grid-item">   <img src="./images/images-in-line-1page/puzzles.jpg" alt="puzzles"/>
               <p>Пазлы</p>
            </div>
      </div>
      <div className='news-section'>
          <div className="email-container">
          <h3>Новостная рассылка</h3>
          <p>Будьте в курсе новых поступлений, распродаж и предложений или узнавайте о последних тенденциях! Подписывайтесь на нас.</p>
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button" onClick={handleSubscribe}>
              {subscriptionStatus || 'Подписаться'}
            </button>
          </div>
          <div className="sale-container">
            <div className='text-sale'>
            <h2>О команде</h2>
            <p>Поскольку все члены нашей команды сами являются счастливыми родителями,
            у нас есть опыт и забота, необходимые для управления лучшим интернет-магазином.
            </p>
              <button className="shop-now-button">Купить сейчас</button>
            </div>
            <div className='img-sale'>
              <img src="./images/plushes/plush-3.png" alt="Product" />
            </div>
          </div>             
      </div>
      <h3 className='fonts'> Популярные продукты</h3>
          <div className='product'>
            <div className='container3'>
              {
                Homeproduct.map((curElm) => 
                {
                  return (
                     <div className='box3' key={curElm.id}>
                       <Link to="/shop">
                        <div className='img_box3'>
                          <img src={curElm.Img} alt={curElm.Title}></img>
                        </div>
                       </Link>
                      <div className='detail3'>
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title}</h3>
                        <h4>{curElm.Price}</h4>
                      </div>
                    </div>
                  )                  
                })
              }
            </div>
          </div>
          <BrandGallery/>
          <div className='section-location'>
              <div className="store-container">
                <h4>Наше местоположение</h4>
                <p>Наш магазин находится в идеальном месте, предоставляя удобный и легкий доступ для наших клиентов.</p>
                <img src='./images/shop.jpg' alt="shop"/>
                <div className='list'>
                  <ul>
                    <li> <MdLocationPin /> ул. Арбатская, 12</li>
                    <li> <FaClock /> Открыты с 9:00</li>
                    <li> <FaPhone /> 8 (800) 555-35-35</li>
                  </ul>
                </div>
              </div>
              <div className="map-container">
                 <img src='./images/mapa.jpg' alt="map"/>
              </div>
          </div>
    </>
  );
};


const App = () => {
 
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}


export default App;
