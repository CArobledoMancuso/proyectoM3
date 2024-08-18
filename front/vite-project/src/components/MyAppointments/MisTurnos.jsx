import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import TurnoCard from '../TurnoCard/TurnoCard';
import { getTurns, cancelAppointment} from '../../redux/turnReducer';
import styles from './MisTurnos.module.css';

const MisTurnos = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const turnosState = useSelector(state => state.turn.turns);

  useEffect(() => {
    if (user?.id) {
      const url = `http://localhost:3000/users/${user.id}`;
      axios.get(url)
        .then(resp => {
          dispatch(getTurns(resp.data.appointments));
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [dispatch, user]);

  const onCancelAppointment = (id) => {
    const url = `http://localhost:3000/appointments/cancel/${id}`;
    axios.put(url)
      .then(resp => {
        if (resp) {
          dispatch(cancelAppointment(id));
          alert("Turno cancelado exitosamente.");
        }
      })
      .catch(error => {
        console.error('Error cancelling appointment:', error);
        alert("Hubo un error al cancelar el turno. Por favor, inténtalo nuevamente.");
      });
  };
  return (
    <div className={styles.container}>
      <h2>Mis Turnos</h2>
      <div className={styles.turnos}>
        {Array.isArray(turnosState) && turnosState.map((turno) => (
          <TurnoCard key={turno.id} turno={turno} user={user} onCancelAppointment={onCancelAppointment} />
        ))}
      </div>
    </div>
  );
};

export default MisTurnos;
