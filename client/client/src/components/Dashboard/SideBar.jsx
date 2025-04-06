import React from 'react';
import './SideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>
      <ul className="sidebar-menu">
        <li><a href="/overview">Overview</a></li>
        <li><a href="/userlist">User List</a></li>
        <li><a href="/productlist">Product List</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
}

export default SideBar;
