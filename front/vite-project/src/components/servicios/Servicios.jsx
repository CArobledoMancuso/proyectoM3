import React from 'react';
import styles from './Servicios.module.css';

const Servicios = () => {
  return (
    <div className={styles.services}>
      <h1>Nuestros Servicios</h1>
      <div className={styles.service}>
        <h2>Manicura y Pedicura Tradicional</h2>
        <img src="/assets/Manicura-y-pedicura-en-Barcelona.jpg" alt="Servicio 1" />
        <p>Disfruta de un tratamiento completo de manicura y pedicura que incluye limpieza, recorte y limado de uñas, eliminación de cutículas, exfoliación suave para eliminar las células muertas de la piel, hidratación con masaje y esmaltado de uñas con la última gama de colores y estilos.</p>
      </div>
      <div className={styles.service}>
        <h2>Pedicura Terapéutica para Pies Cansados</h2>
        <img src="/assets/f2.jpg" alt="Servicio 2" />
        <p>Dales a tus pies el descanso que se merecen con nuestra pedicura terapéutica especializada. Este servicio incluye un baño relajante de pies, exfoliación profunda para suavizar la piel áspera, eliminación de callosidades y durezas, masaje revitalizante para mejorar la circulación y aplicación de productos específicos para aliviar la fatiga y restaurar la vitalidad de tus pies.</p>
      </div>
      <div className={styles.service}>
        <h2>Diseño y Decoración de Uñas</h2>
        <img src="/assets/f3.webp" alt="Servicio 3" />
        <p>Déjate llevar por la creatividad con nuestro servicio de diseño y decoración de uñas. Desde elegantes diseños franceses hasta intrincados patrones artísticos, nuestro equipo experto te ayudará a lucir unas uñas únicas y a la moda. Utilizamos técnicas avanzadas y productos de alta calidad para garantizar resultados duraderos y espectaculares.</p>
      </div>
      <div className={styles.service}>
        <h2>Tratamientos Especiales para Uñas Débiles o Dañadas</h2>
        <img src="/assets/f5.webp" alt="Servicio 4" />
        <p>¿Tus uñas necesitan un poco de amor y cuidado extra? Nuestros tratamientos especiales están diseñados para fortalecer, reparar y revitalizar las uñas débiles, dañadas o quebradizas. Con ingredientes nutritivos y fortificantes, ayudamos a restaurar la salud y la belleza natural de tus uñas para que luzcan radiantes y fuertes.</p>
      </div>
      <div className={styles.service}>
        <h2>Podología Profesional para el Cuidado de los Pies</h2>
        <img src="/assets/f4.jpg" alt="Servicio 5" />
        <p>Prioriza la salud y el bienestar de tus pies con nuestros servicios de podología profesional. Nuestro equipo certificado ofrece tratamientos personalizados para problemas comunes como callosidades, hongos en las uñas, juanetes y más. Utilizando técnicas avanzadas y herramientas especializadas, te ayudamos a mantener tus pies sanos, cómodos y libres de molestias.</p>
      </div>
    </div>
  );
};

export default Servicios;
