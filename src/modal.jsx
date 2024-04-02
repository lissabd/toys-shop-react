import React, {useState} from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import './styles/modal.css';
import { SlBasket } from "react-icons/sl";

const Modal = ({active, onClose, product, addToCart}) => {
  const handleAddToCart = () => {
    addToCart(product); 
    onClose();
  };
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => onClose()}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <FaRegWindowClose className='close-modal' onClick={() => onClose()} / >
            {product && (
                <>
                   <div className='about-product'>
                    <img src={product.Img} alt={product.Title} className="modal-image" />                   
                    <div className='info'>
                        <h2>{product.Title}</h2>
                        <p>Категория: {product.Cat}</p>
                        <p>Цена: {product.Price}</p>                      
                        <p className='lorem'>Выбирая наши игрушки, вы выбираете не просто товар, а инвестицию в будущее вашего ребенка. Позвольте им расти, учиться и веселиться с нашими качественными и образовательными игрушками! </p>
                       <div className='buttons-add'>
                            <button className='button_1' onClick={handleAddToCart}>Добавить <SlBasket /></button>
                       </div>
                    </div>
                   </div>
                </>
                )}
        </div>
    </div>
  );
}

export default Modal;
