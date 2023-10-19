import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing_page';
import LoginPage from './components/login_page';
import NavbarComponent from './components/navbar';
import EmployerDashboard from './components/employer_dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/C-login' element={<LoginPage name="Company" />} />
          <Route path='/E-login' element={<LoginPage name="Employer" />} />
          <Route path='/nav' element={<NavbarComponent />} />
          <Route path='/user' element={<EmployerDashboard/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
