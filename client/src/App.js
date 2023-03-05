import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LawSuit from './pages/LawSuit/LawSuit';
import TrRegion from './pages/TrRegion/TrRegion';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/lawsuit' element={<LawSuit />} />
        <Route path='/trregion' element={<TrRegion />} />
      </Routes>
    </Router>
  );
}

export default App;
