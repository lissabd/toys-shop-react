import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './styles/registration.css';

const Registration = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [pass, setPass] = useState('');
  const [checkPass, setcheckPass] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    if (pass === checkPass) {
      e.preventDefault();
      const userData = { email, name, surname };  // данные пользователя осоновные
      localStorage.setItem("userData", JSON.stringify(userData));  // сохраняем в лок хранилище

      // очищаем все данные формы
      setPass('');
      setcheckPass('');
      setEmail('');
      setName('');
      setSurname('');

      alert("Вы зарегистрированы.");
      navigate('/login');

    } else {
      setError("Пароли не совпали. Попробуйте снова.");
       // если неправильно ввел повторно пароль, очищаем для повторной попытки только чекпас
       setcheckPass('');
    }
  };
  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h1>Регистрация</h1>
        <div className="form-group">
          <label htmlFor='email'>Почта</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='password'>Пароль</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='Введите ваш пароль'
            id='password'
            name='password'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='repeatPassword'>Повторно введите пароль</label>
          <input
            value={checkPass}
            onChange={(e) => setcheckPass(e.target.value)}
            type='password'
            placeholder='Введите ваш пароль снова'
            id='repeatPassword'
            name='repeatPassword'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='name'>Введите Ваше имя</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Введите Ваше имя'
            id='firstName'
            name='firstName'
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor='name'>Введите Вашу фамилию</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type='text'
            placeholder='Введите Вашу фамилию'
            id='lastName'
            name='lastName'
            required
          />
        </div>
        <button type='submit'>Отправить</button>
      </form>
      <div className="error-message">{error}</div>
      <div className="login-section">
        <div>Уже есть аккаунт? <Link to="/login">Войти здесь</Link></div>
      </div>
    </div>
  );
}

export default Registration;

