import React, { useState } from 'react';
import axios from 'axios';
import styles from './Turno.module.css';
import { validarHorario, validarDiaHabil } from './Validaciones';


const Turno = ({ userId }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  const handleCreateTurno = () => {
    if (!validarDiaHabil(date)) {
      setDateError('No se puede agendar un turno en un día no hábil.');
      setTimeError('');
    } else {
      setDateError('');
      if (!validarHorario(time)) {
        setTimeError('No se puede agendar un turno en un horario fuera del horario de atención.');
        setDateError('');
      } else {
        setTimeError('');
        setIsCreating(true);
        axios.post('http://localhost:3000/appointments/schedule', {
          date, 
          time, 
          userId,
        })
        .then(response => {
          console.log('Turno creado exitosamente:', response.data);
        })
        .catch(error => {
          console.error('Error al crear el turno:', error);
        })
        .finally(() => {
          setIsCreating(false);
        });
      }
    }
  };
  const horariosDisponibles = [
    '09:00',
    '10:00',
    '11:00',
    '15:00',
    '16:00',
    '17:00'
  ];

  return (
    <div className={styles.container}> 
      <div className={styles.turno}> 
        <div className={styles.info}>
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <p className={styles.error}>{dateError}</p> 
          <label htmlFor="time">Hora:</label>
          <select
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Seleccione una hora</option>
            {horariosDisponibles.map((hora, index) => (
              <option key={index} value={hora}>{hora}</option>
            ))}
          </select>
          <p className={styles.error}>{timeError}</p>
        </div>
        <button className={styles['create-button']} onClick={handleCreateTurno} disabled={isCreating}>
          {isCreating ? 'Creando...' : 'Crear Turno'}
        </button>
      </div>
    </div>
  );
};

export default Turno;
