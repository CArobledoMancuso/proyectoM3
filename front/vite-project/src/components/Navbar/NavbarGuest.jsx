import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

const NavbarGuest = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/" className={styles.navLink}>Inicio</Link></li>
        <li><Link to="/servicio" className={styles.navLink}>Servicios</Link></li> 
        <li><Link to="/login" className={styles.btnLogin}>Iniciar sesión</Link></li>
        <li><Link to="/register" className={styles.btnRegister}>Registrarse</Link></li>
      </ul>
    </nav>
  );
};

export default NavbarGuest;
