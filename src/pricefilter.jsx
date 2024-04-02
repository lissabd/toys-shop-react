import React, { useState } from 'react';
import './styles/pricefilter.css';
const PriceFilter = ({ onFilterChange }) => {
  // Состояния для минимальной и максимальной цен
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Функция, вызываемая при изменении значений фильтра и нажатии кнопки "Применить"
  const handleChangeFilter = () => {
    // Преобразование введенных значений в числа и передача их в родительский компонент
    onFilterChange({
      minPrice: parseFloat(minPrice) || 0, // Если введено некорректное значение, устанавливаем 0
      maxPrice: parseFloat(maxPrice) || Infinity, // Если введено некорректное значение, устанавливаем бесконечность
    });
  };
  const handleCancelClick = () => {
    setMinPrice('');
    setMaxPrice('');
    onFilterChange({ minPrice: '', maxPrice: '' });
  }
  return (
    <div className='price-filter'>
      <h3> Цена </h3>
      <div>
        <label>Минимальная:</label>
        <input
          type='number'
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Максимальная:</label>
        <input
          type='number'
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className='price-buttons'>
        <button onClick={handleChangeFilter} className='button-1'>Применить</button>
        <button onClick={handleCancelClick} className='button-2'>Сбросить</button>
      </div>
    </div>
  );
};

export default PriceFilter;
