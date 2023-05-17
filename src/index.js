import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import OnboardingForm from './components/OnboardingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<OnboardingForm />} />
        <Route path='/app' element={<App />} />
      </Routes>    
    </Router>
  </React.StrictMode>
);

