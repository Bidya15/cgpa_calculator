import React, { useState } from 'react';

const Login = ({ onLogin, onSwitch }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const user = await res.json();
        onLogin(user);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Server connection failed');
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Login is coming soon! For now, please use your username and password.");
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-fade-in">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to access your CGPA portal</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          {error && <p className="error-text" style={{color: '#ff4d4d', textAlign: 'center', fontSize: '0.9rem'}}>{error}</p>}
          <button type="submit" className="btn-primary" style={{marginTop: '1rem', width: '100%'}}>Sign In</button>
        </form>

        <div className="divider">OR</div>

        <button className="btn-google" onClick={handleGoogleLogin}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" alt="Google" width="20" />
          Continue with Google
        </button>

        <div className="auth-footer" style={{marginTop: '2rem'}}>
          Don't have an account? <span onClick={onSwitch}>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
