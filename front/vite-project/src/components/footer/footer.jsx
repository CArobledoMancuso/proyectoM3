import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-section']}>
          <h3>Navegación</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicio">Servicios</a></li>
          </ul>
        </div>
        <div className={styles['footer-section']}>
          <h3>Contacto</h3>
          <p>Dirección: Av.Siempreviva 742, San Miguel de Tucumán, Argentina</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Email: Cristianrobledo14@gmail.com</p>
        </div>
        <div className={styles['footer-section']}>
          <h3>Redes Sociales</h3>
          <ul className={styles['social-links']}>
            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} className={styles['social-icon']} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} className={styles['social-icon']} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} className={styles['social-icon']} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} className={styles['social-icon']} /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <p>&copy; 2024 Todos los derechos reservados. Cristian Robledo</p>
      </div>
    </footer>
  );
};

export default Footer;
