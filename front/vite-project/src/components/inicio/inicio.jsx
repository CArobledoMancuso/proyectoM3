import styles from "./inicio.module.css";


const WelcomeCard = () => {
  return (
    <>
      <section className={styles.welcome}>
        <div className={styles.card}>
          <h2>Bienvenido al Centro de Estética</h2>
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.image}>
          <img src="/assets/Registro.jpg" alt="Centro de Estética" />
        </div>
        <div className={styles.description}>
          <h2>Sobre Nosotros</h2>
          <p>Somos un centro de estética dedicado a proporcionar tratamientos de belleza y bienestar para nuestros clientes. Nuestro equipo de médicos altamente cualificados ofrece una amplia gama de servicios para ayudarlo a lucir y sentirse mejor.</p>
        </div>
      </section>
      <section className={styles.doctors}>
        <h2>Nuestros Médicos</h2>
        <div className={styles.doctorCard}>
          <img src="/assets/doctor1.png" alt="Doctor 1" />
          <h3>Dra. Francisca Pérez</h3>
          <p>Especialista en dermatología estética.</p>
        </div>
        <div className={styles.doctorCard}>
          <img src="/assets/dr2.png" alt="Doctor 2" />
          <h3>Dra. María García</h3>
          <p>Especialista en tratamientos faciales.</p>
        </div>
        <div className={styles.doctorCard}>
          <img src="/assets/dr3.png" alt="Doctor 3" />
          <h3>Dra. Carla Martínez</h3>
          <p>Especialista en cirugía plástica.</p>
        </div>
      </section>
    </>
  );
};

export default WelcomeCard;
