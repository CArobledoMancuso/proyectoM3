// CreateAppointment.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTurns } from '../../redux/turnReducer';
import './CreateAppointment.css';

const CreateAppointment = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.user.id);

  const [body, setBody] = useState({
    date: '',
    time: '',
    userId: userId
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSchedule = (e) => {
    e.preventDefault();

    const selectedDate = new Date(body.date + 'T' + body.time);
    const currentDate = new Date();
    const day = selectedDate.getDay();
    const hours = selectedDate.getHours();

    if (hours < 8 || (hours >= 18 && !(day === 6 || day === 0))) {
      setErrorMessage('El turno debe ser dentro del horario de atención.');
      return;
    }

    if (selectedDate <= currentDate) {
      setErrorMessage('La fecha y hora del turno debe ser en el futuro.');
      return;
    }

    const url = 'http://localhost:3000/appointments/schedule';
    axios.post(url, body)
      .then(resp => {
        dispatch(getTurns(resp.data)); // Dispatch de la acción getTurns
        setSuccessMessage('¡El turno ha sido creado con éxito!');
        setBody({ date: '', time: '', userId });
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Error creating appointment:', error);
      });
  }

  const handleChange = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="create-appointment">
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <h2>Crear Turno</h2>
      <form>
        <div className="form-group">
          <label htmlFor="date">Fecha:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={body.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={body.time}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="crear-button"
          onClick={onSchedule}
        >
          Crear Turno
        </button>
      </form>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="schedule">
        <h3>Horarios de Atención</h3>
        <p><strong>Lunes a Viernes:</strong> 8:00 am - 6:00 pm</p>
        <p><strong>Sábados y Domingos:</strong> 8:00 am - 12:00 pm</p>
      </div>
    </div>
  );
};

export default CreateAppointment;
