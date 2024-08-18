import React from 'react';
import styles from './UserProfile.module.css';
import defaultAvatar from '/assets/avatar.webp';

const UserProfile = ({ user }) => {
  return (
    <div className={styles.userProfile}>
      {user ? (
        <>
          <h2>Perfil de Usuario</h2>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <img src={user.avatarUrl || defaultAvatar} alt="Avatar" />
            </div>
          </div>
          <div className={styles.userInfo}>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Fecha de Nacimiento:</strong> {user.birthdate}</p>
          </div>
        </>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default UserProfile;
