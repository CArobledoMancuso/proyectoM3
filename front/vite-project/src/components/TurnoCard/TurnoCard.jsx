import React from 'react';
import styles from './TurnoCard.module.css';

const TurnoCard = ({ turno, user, onCancelAppointment }) => {
  const handleCancel = () => {
    onCancelAppointment(turno.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>Nombre: {user.name}</h3>
        <p>Fecha: {turno.date}</p>
        <p>Hora: {turno.time}</p>
        <p>Estado: {turno.status}</p>
      </div>
      <div className={`${styles.status} ${turno.status === 'active' ? styles.active : styles.inactive}`}></div>
      <button className={styles.cancelButton} onClick={handleCancel}>Cancelar Turno</button>
    </div>
  );
};

export default TurnoCard;
