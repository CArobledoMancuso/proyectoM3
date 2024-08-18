import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css';
import registerImage from '/assets/pata.png';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birthdate: '',
    nDni: '',
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (name === 'nDni' && isNaN(value)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: 'El NDNI debe ser un número.'
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: '' 
      }));
    }
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
      const domain = value.split('@')[1];
      if (!emailRegex.test(value) || !commonDomains.includes(domain)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'El email no tiene un formato válido o no es de un dominio común.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: '' 
        }));
      }
    }
    if (name === 'birthdate') {
      const currentDate = new Date();
      const birthdate = new Date(value);
      const minAge = 15;
      if (birthdate >= currentDate || currentDate.getFullYear() - birthdate.getFullYear() < minAge) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'La fecha de nacimiento debe ser válida y el usuario debe tener al menos 15 años.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
    if (name === 'name') {
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!nameRegex.test(value)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'El nombre debe contener solo letras.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
    if (name === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(value)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: 'La contraseña debe tener al menos 6 caracteres, incluyendo al menos una letra y un número.'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: ''
        }));
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      axios.post('http://localhost:3000/users/register', formData)
        .then(response => {
          alert('¡Registro exitoso!');
          navigate('/login');
        })
        .catch(error => {
          alert('Error en el registro. Por favor, inténtalo de nuevo.');
        });
    }
  };
  
  return (
    <div className={styles['register-container']}>
      <div className={styles.split}>
        <div className={styles.left}>
          <img src={registerImage} alt="Registro" />
        </div>
        <div className={styles.right}>
          <h2>Registro de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="register_name">Nombre:</label>
              <input 
              type="text" 
              id="register_name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder='Nombre:'
              />
              {errors.name && <p className={`${styles['error-message']} ${styles.red}`}>{errors.name}</p>}
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="register_email">Email:</label>
              <input 
              type="email" 
              id="register_email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder='Email:'
              />
              {errors.email && <p className={`${styles['error-message']} ${styles.red}`}>{errors.email}</p>}
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="register_birthdate">Fecha de nacimiento:</label>
              <input 
              type="date" 
              id="register_birthdate" 
              name="birthdate" 
              value={formData.birthdate} 
              onChange={handleChange} 
              placeholder='Fecha de nacimiento:'
              />
              {errors.birthdate && <p className={`${styles['error-message']} ${styles.red}`}>{errors.birthdate}</p>}
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="register_nDni">DNI:</label>
              <input 
              type="text" 
              id="register_nDni" 
              name="nDni" 
              value={formData.nDni} 
              onChange={handleChange} 
              placeholder='Numero de DNI:'
              />
              {errors.nDni && <p className={`${styles['error-message']} ${styles.red}`}>{errors.nDni}</p>}
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="register_username">Usuario:</label>
              <input 
              type="text" 
              id="register_username" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              placeholder='Usuario:'
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="register_password">Contraseña:</label>
              <input 
              type="password" 
              id="register_password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder='Contraseña:'
              />
              {errors.password && <p className={`${styles['error-message']} ${styles.red}`}>{errors.password}</p>}
            </div>
            <button type="submit" className={styles.button}>Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
