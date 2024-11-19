import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BuilderBot from './pages/home';
import Commands from './pages/commands';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BuilderBot />} />
          <Route path="/commands" element={<Commands />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;