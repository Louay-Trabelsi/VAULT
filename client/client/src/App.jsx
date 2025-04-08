import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/home page/Navbar';
import Footer from './components/home page/Footer';
import Home from './components/home page/Home';
import Profile from './components/home page/Profile';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Overview from './components/Dashboard/Overview';
import UserList from './components/Dashboard/UserList';
import ProductList from './components/Dashboard/ProductList';
import Shop from './components/shop/Shop';
import ProductDetails from './components/products/ProductDetails';
import Cart from './components/Payment/Cart.jsx';
import Success from './components/Payment/Success.jsx';
import { jwtDecode } from 'jwt-decode';

import './App.css';
import './index.css';
import './styles.css';

const App = () => {
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (err) {
        console.error('Invalid token:', err);
        navigate('/login');
      }
    }
  }, [navigate]);
console.log(role);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        {role === 'admin' && (
          <>
            <Route path="/dashboard/overview" element={<Overview />} />
            <Route path="/dashboard/userlist" element={<UserList />} />
            <Route path="/dashboard/productlist" element={<ProductList />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
