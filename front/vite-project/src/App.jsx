// App.js
import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Home from './view/Home/home';
import { useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './redux/userReducer'; 

const App = () => {
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    const storedSession = JSON.parse(localStorage.getItem('session')) || { login: false, user: null };
    if (storedSession.login) {
      dispatch(loginUser(storedSession)); 
    }
  }, [dispatch]);

  const onLogin = (userData) => {
    const url = `http://localhost:3000/users/login`;
    axios.post(url, userData).then(resp => {
      try {
        if (resp.data.login) {
          localStorage.removeItem('session');
          dispatch(loginUser(resp.data));
          localStorage.setItem('session', JSON.stringify(resp.data));
        }
      } catch (error) {
        alert(error);
        console.log(error);
      }
    });
  };
  
  const onLogout = ()=> {
    dispatch(logoutUser());
    localStorage.removeItem('session'); 
  }

  return (
    <div className='full-screen'>
      <Home onLogin={onLogin} onLogout={onLogout} />
    </div>
  );
};

export default App;
