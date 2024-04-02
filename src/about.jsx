import React from 'react';
import './styles/about.css'
import BreadCrumb from './breadcrumb';
import InfoBlock from './InfoBlock';
const About = () => {
  return (
    <>
    <BreadCrumb  currentPage="О нас"/>
     <div className="about-us-container">
        <div className="text-before-cards">
            <h1>О нас</h1>
            <p>Мы посвящаем себя предоставлению самого разнообразного ассортимента игрушек, спроектированных развития детей.  </p>
            <p>Ознакомьтесь с полезной информаицей и будьте в курсе событий!</p>
        </div>
        <div className="grid-cards-about">
            <div className="card card_1">
            <img src="./images/дети-для-карточки.png" alt="kids" />
            <h1>У нас есть все, что Вам нужно?</h1>
            <p>
             У нас есть все, что вам может понадобиться, чтобы сделать детство вашего малыша незабываемым. Различные категории товаров и доуступные цены
            </p>
            </div>
            <div className="card card_2">
            <img src="./images/дети-игргают-для-карточки.png" alt="playing kids" />
            <ul>
                <li> <div className="check-mark">✓</div> Мы облегчаем ваш онлайн-шопинг.</li>
                <li> <div className="check-mark">✓</div> Погрузитесь в мир детских развлечений.</li>
                <li> <div className="check-mark">✓</div> Интернет-магазин игрушек - это замечательно...</li>
                <li> <div className="check-mark">✓</div> Мы профессионалы в мире детских развлечений..</li>
            </ul>
            </div>
            <div className="card card_3">
                
            <h2>Рабочее время</h2>
            <ul>
                <div className="blocks">
                <div className="block1">
                    <li>Понедельник</li>
                    <li>Вторник</li>
                    <li>Среда</li>
                    <li>Четверг</li>
                    <li>Пятница</li>
                    <li>Суббота</li>
                </div>
                <div className="block2">
                    <li> 9:00 - 18:00</li>
                    <li> 9:00 - 18:00</li>
                    <li> 9:00 - 18:00</li>
                    <li> 9:00 - 18:00</li>
                    <li> 9:00 - 18:00</li>
                    <li> 9:00 - 18:00</li>                 
                </div>
                </div>
            </ul>
            <a className="buttons">Связаться с нами : </a>
           
            </div>
        </div>
    </div>
    <div className="container-learning-games">
        <div className="img-container">
            <img src="./images/ребенок-играетjpg.jpg" alt="playing" />
        </div>
        <div className="text-container">
            <h1>Что такое обучающие игры?</h1>
            <p>
Обучающие игры, такие как пазлы, представляют собой не только источник веселья, но и мощный инструмент развития для детей. В нашем ассортименте обучающих пазлов вы найдете увлекательные задачи, способствующие развитию логического мышления, координации и терпения у маленьких исследователей. Эти игры не только развивают когнитивные навыки, но и помогают формировать важные навыки сотрудничества и усидчивости. </p>
            <button className='to-shop'>Купить сейчас </button>
        </div>
    </div>
    <InfoBlock/>
    <div className='container-why-we'>
        <div className='round'> 
            <h5>Наши преимущества...</h5>
        </div>
        <div class="grid-container-about">
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-1.jpg' alt="icon"/></div>
                <p>Наличие всех товаров</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-2.jpg' alt="icon"/></div>
                <p>Доступные цены</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-3.jpg' alt="icon"/></div>
                <p>Бесплатная доставка</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-4.jpg' alt="icon"/></div>
                <p>Удобная доставка</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-5.jpg' alt="icon"/></div>
                <p>Последние новинки</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-6.jpg' alt="icon"/></div>
                <p>Быстрое оформление</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-7.jpg' alt="icon"/></div>
                <p>Круглосуточно</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-8.jpg' alt="icon"/></div>
                <p>Возможность самовывоза</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-9.jpg' alt="icon"/></div>
                <p>Срочная доставка</p>
            </div>
            <div class="grid-item">
                <div class="icon"> <img src='./images/icons/icons-10.jpg' alt="icon"/></div>
                <p>Специальные условия</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default About;
