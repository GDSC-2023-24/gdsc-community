// src/App.jsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src="/Screenshot 2024-03-11 184623.png" alt="Header Image" />
      </div>
      <div className="main-content">
        <div className="left-half">
          <h2>Happening now</h2>
          <p className="small-text">Join today</p>
          <p className="small-text">Enter details:</p>
          <div className="input-group">
            <input type="text" placeholder="Username" className="input-field" />
            <input type="email" placeholder="Email" className="input-field" />
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <button className="create-account-button">Create an Account</button>
        </div>
        <img src="/Screenshot 2024-03-11 185902.png" alt="Main Image" className="main-image" />
      </div>
    </div>
  );
}

export default App;
