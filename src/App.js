import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing_page';
import LoginPage from './components/login_page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/C-login' element={<LoginPage name="Company" />} />
          <Route path='/E-login' element={<LoginPage name="Employer" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
