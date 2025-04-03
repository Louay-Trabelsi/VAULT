import React from 'react';
import Navbar from './components/Home.jsx/Navbar';
import Footer from './components/Home.jsx/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* عرض الـ Navbar */}
      <div className="container mt-4">
        {/* محتوى التطبيق هنا */}
        <h1>Welcome to Vault</h1>
        <p>Discover antique treasures.</p>
      </div>
      <Footer /> {/* عرض الـ Footer */}
    </div>
  );
}

export default App;
