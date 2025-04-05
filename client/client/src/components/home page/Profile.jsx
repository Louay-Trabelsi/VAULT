import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  { jwtDecode } from 'jwt-decode'
import '../css/Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const id = jwtDecode(response.data.token).id

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirect to login if not authenticated
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login'); // Redirect to login on error
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate, token]);

  if (loading) {
    return <div className="profile-loading">Loading...</div>;
  }

  if (!userData) {
    return <div className="profile-error">Error loading profile. Please try again.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, {userData.username}</h1>
        <p className="profile-subtitle">Manage your account details</p>
      </div>

      <div className="profile-content">
        <section className="profile-section">
          <h2>Your Details</h2>
          <div className="profile-details">
            <p><strong>Name:</strong> {userData.username}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Role:</strong> {userData.role.toUpperCase()}</p>
            <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
          </div>
        </section>

        <section className="profile-actions">
          <h2>Actions</h2>
          <button className="profile-button" onClick={() => navigate('/orders')}>
            View Your Orders
          </button>
          
          <button
            className="profile-button logout-button"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              navigate('/login');
            }}
          >
            Logout
          </button>
        </section>
      </div>
    </div>
  );
};

export default Profile;