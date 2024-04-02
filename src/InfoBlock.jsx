import React from "react";
import "./styles/InfoBlock.css";

const InfoBlock = () => { 
  return (
    <div className="info-container">
      <div className="block-images">
        <img src="./images/pic1.jpg" alt="round-info" />
        <h3>Поддержка от специалистов</h3>
        <p>Мы гордимся своим высококвалифицированным персоналом, готовым предоставить помощь и консультации по любым вопросам.</p>
      </div>
      <div className="block-images">
        <img src="./images/pic2.jpg" alt="round-info" />
        <h3>Персональное обслуживание</h3>
        <p>Мы создали удобное и безопасное пространство для онлайн-покупок, где каждый клиент может легко выбирать, заказывать и получать игрушки прямо у себя дома</p>
      </div>
      <div className="block-images">
        <img src="./images/pic3.jpg" alt="round-info" />
        <h3>Широкий ассортимент</h3>
        <p> Наш интернет-магазин игрушек гордится обширным и разнообразным ассортиментом, включающим игры для детей всех возрастов. </p>
      </div>
    </div>
  );
};

export default InfoBlock;
