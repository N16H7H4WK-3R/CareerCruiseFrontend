import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing_page';
import EmployerDashboard from './components/employer_dashboard';
import CompanyDashboard from './components/company_dashboard';
import CompanyLoginPage from './components/company_login_page';
import EmployerLoginPage from './components/employer_login_page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/C-login' element={<CompanyLoginPage />} />
          <Route path='/E-login' element={<EmployerLoginPage />} />
          <Route path='/employer' element={<EmployerDashboard />} />
          <Route path='/company' element={<CompanyDashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
