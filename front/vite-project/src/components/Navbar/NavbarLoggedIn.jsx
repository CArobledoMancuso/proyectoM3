import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/userReducer';
import styles from './Navbar.module.css';

const NavbarLoggedIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
        <li><Link to="/servicio" className={styles.navLink}>Servicios</Link></li>
        <li><Link to="/Create" className={styles.navLink}>Crear Turno</Link></li>
        <li><Link to="/appointments" className={styles.navLink}>Mis Turnos</Link></li>
        <li><Link to="/perfil" className={styles.navLink}>Perfil</Link></li>
        <li><button className={styles.btnLogout} onClick={handleLogout}>Cerrar sesión</button></li>
      </ul>
    </nav>
  );
};

export default NavbarLoggedIn;
