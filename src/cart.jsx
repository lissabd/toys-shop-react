import React, { useState, useEffect } from 'react';
import { FaRegSadCry } from "react-icons/fa";
import BreadCrumb from './breadcrumb';
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import './styles/cart.css';
import Productdetail from './productdetail';
import { useNavigate  } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [buttonOrder, setButtonOrder] = useState('Заказать');
  const navigate = useNavigate();

  useEffect(() => {
    //получаем корзину из локального хранилища
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCart);
  }, []);

  const removeFromCart = (itemId) => {
    // Удаляем товар из корзины
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);

    // Обновляем локальное хранилище
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map(item => {
            if (item.id === itemId) {
            return { ...item, qty: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    const calculateTotalItems = () => {
        // Вычисляем общее количество товаров в корзине
        return cart.reduce((total, item) => total + item.qty, 0);
    };
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.qty * parseFloat(item.Price.replace('₽', '')), 0);
    };
    const handleOrderClick = () => {
      const userData = localStorage.getItem('userData');
      if (!userData){
         alert("Вам нужно войти перед тем, как сделать заказ.");
         navigate("/login");
      }
      else {
        alert('Заказ успешно оформлен!');
        setButtonOrder("Успешно!!!");
        const cleanCart = [];
        setCart(cleanCart);
      }
    };
    const handleDeleteProducts = () =>{
      // делаем массив продуктов пустым и обновляем локальное хранилище при этом
      const cleanCart = [];
      setCart(cleanCart);
      localStorage.setItem('cart', JSON.stringify(cleanCart));
    };
    return (
      <>
        <BreadCrumb currentPage="Корзина" />
        <div className="cartcontainer">
          {cart.length === 0 ? (
            <div className="emptycart">
              <h1>Ваша корзина</h1>
              <h2 className="empty">Ваша корзина пуста</h2>
              <p>
                <FaRegSadCry />
              </p>
              <Link to="/shop">
                <button className="ShopNow">Купить сейчас</button>
              </Link>
            </div>
          ) : (
            <div className="contant_">
              <div className="tex">
                <h2>Ваша корзина</h2>
              </div>
              {cart.map((curElm) => {
                // Найти соответствующий продукт в Productdetail
                const productInDetail = Productdetail.find((product) => product.id === curElm.id);
                return (
                  <div className="cart_item" key={curElm.id}>
                    <div className="img_box">
                      {/* Использовать изображение из Productdetail */}
                      <img src={productInDetail?.Img} alt={curElm.Title} />
                      <div className="detail">
                        <h4>{curElm.Cat}</h4>
                        <h3>{curElm.Title}</h3>
                      </div>
                    </div>
                    <div className="deleteProduct">
                      <RxCross1 onClick={() => removeFromCart(curElm.id)} />
                    </div>
                    <div className="a">
                      <div> Цена : {curElm.Price}</div>
                      <div className="count-products">
                        <input
                          type="number"
                          value={curElm.qty}
                          onChange={(e) => updateQuantity(curElm.id, parseInt(e.target.value, 10))}
                          min="0"
                        />
                      </div>
                      <div>{'Итоговая сумма :' + curElm.qty * parseFloat(curElm.Price.replace('₽', ''))}</div>
                    </div>
                  </div>
                );
              })}
              <div className="cart-footer">
                <div>Количество : {calculateTotalItems()} </div>
                <div>Итого: {calculateTotalPrice()} ₽</div>
                <div className="buttons-under-cart">
                  <button className="cart-but" onClick={handleOrderClick}>
                    {buttonOrder}
                  </button>
                  <button className="cart-but" onClick={handleDeleteProducts}>
                    Очистить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

export default Cart;
