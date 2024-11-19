import React from 'react';
import './App.css';
import BuilderBot from './pages/home';  // Import the BuilderBot component

const App: React.FC = () => {
  return (
    <div className="App">
      <BuilderBot />  {/* Render BuilderBot component */}
    </div>
  );
}

export default App;