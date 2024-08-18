import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/userReducer';
import axios from 'axios';
import styles from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!input.username) {
      newErrors.username = 'Por favor ingresa tu nombre de usuario.';
    }
  
    if (!input.password) {
      newErrors.password = 'Por favor ingresa tu contraseña.';
    }

    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      try {
        const url = `http://localhost:3000/users/login`;
        const resp = await axios.post(url, input);
        if (resp.data.login) {
          dispatch(loginUser({ login: true, user: resp.data.user }));
          localStorage.setItem('session', JSON.stringify({ login: true, user: resp.data.user }));
        }
      } catch (error) {
        console.error('Error durante el inicio de sesión:', error);
      }
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById('password');
    passwordInput.type === 'password'
      ? (passwordInput.type = 'text')
      : (passwordInput.type = 'password');
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles.split}>
        <div className={styles.left}>
          <img src="/assets/logo.jpg" alt="Imagen" />
        </div>
        <div className={styles.right}>
          <h2>Inicia sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de Usuario"
                value={input.username}
                onChange={handleChange}
              />
              {errors.username && (
                <p className={styles.error}>{errors.username}</p>
              )}
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={input.password}
                onChange={handleChange}
              />
              <span
                className={styles['password-toggle']}
                onClick={togglePasswordVisibility}
              >
                Mostrar contraseña
              </span>
              {errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className={styles.button}
            >
              Iniciar sesión
            </button>
          </form>
          <p>
            ¿No tienes una cuenta?{' '}
            <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
