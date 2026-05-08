import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = ({ onLogin }) => {
  const [authMode, setAuthMode] = useState('login');

  return authMode === 'login' ? (
    <Login onLogin={onLogin} onSwitch={() => setAuthMode('register')} />
  ) : (
    <Register 
      onRegister={(user) => {
        if (user && user.id) {
          onLogin(user);
        } else {
          setAuthMode('login');
        }
      }} 
      onSwitch={() => setAuthMode('login')} 
    />
  );
};

export default Auth;
