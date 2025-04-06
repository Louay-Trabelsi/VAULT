import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/home page/Navbar';
import Footer from './components/home page/Footer';
import Home from './components/home page/Home';
import Profile from './components/home page/Profile';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Overview from './components/Dashboard/Overview';
import UserList from './components/Dashboard/UserList';
import ProductList from './components/Dashboard/ProductList';
import './App.css';
import './index.css';
import './styles.css';  // Import the new styles

function App() {
  return (
    <div className="App">
      <Navbar /> {/* عرض الـ Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/userlist" element={<UserList />} />
        <Route path="/dashboard/productlist" element={<ProductList />} />

        {/* Add other routes here as needed */}
      </Routes>
      <Footer /> {/* عرض الـ Footer */}
    </div>
  );
}

export default App;
