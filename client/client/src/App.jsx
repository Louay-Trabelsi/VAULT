import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/home page/Navbar';
import Footer from './components/home page/Footer';
import Home from './components/home page/Home';
import './App.css';
import './index.css';
import './styles.css';  // Import the new styles

function App() {
  return (
    <div className="App">
      <Navbar /> {/* عرض الـ Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
      <Footer /> {/* عرض الـ Footer */}
    </div>
  );
}

export default App;
