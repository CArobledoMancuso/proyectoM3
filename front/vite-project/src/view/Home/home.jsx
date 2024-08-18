import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../../components/Register/Register";
import MisTurnos from "../../components/MyAppointments/MisTurnos";
import Login from "../../components/Login/Login";
import NavbarGuest from "../../components/Navbar/NavbarGuest";
import NavbarLoggedIn from "../../components/Navbar/NavbarLoggedIn";
import Footer from "../../components/footer/footer";
import Servicio from "../../components/servicios/Servicios";
import CreateAppointment from "../../components/CreateAppointment/CreateAppointment";
import UserProfile from "../../components/UserProfile/UserProfile";
import { loginUser, logoutUser } from '../../redux/userReducer';
import WelcomeCard from "../../components/inicio/inicio";
import NotFound from "../../components/notFound/NotFound";


function Home() {
  const session = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('session');
  }, []);

  const handleLogin = (userData) => {
    dispatch(loginUser(userData));
    localStorage.setItem('session', JSON.stringify(userData)); 
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('session');
  };

  return (
    < >
    <div className='full-screen'>
      {session.login ? <NavbarLoggedIn onLogout={handleLogout} /> : <NavbarGuest />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route 
          path="/login"
          element={session.login ? <Navigate to="/appointments" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/" element={<WelcomeCard />} />
        <Route
          path="/appointments"
          element={session.login ? <MisTurnos userId={session.user.id} /> : <Navigate to="/login" />}
        />
        <Route
          path="/create"
          element={session.login ? <CreateAppointment userId={session.user.id} /> : <Navigate to="/login" />}
        />
        <Route
          path="/perfil"
          element={session.login ? <UserProfile user={session.user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={session.login ? <Navigate to="/appointments" /> : <Navigate to="/login" />}
        />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer />
      </div>
    </>
  );
}

export default Home;
