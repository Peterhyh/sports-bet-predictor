import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import CheckPage from './pages/CheckPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/check' element={<CheckPage />} />
      </Routes>
    </div>
  );
}

export default App;
