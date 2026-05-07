import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from 'lucide-react';

const Login = ({ onLogin, onSwitch }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
    try {
      const res = await fetch(`${apiBaseUrl}/auth/login`, {
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

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log("Google User:", decoded.email);

      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
      const res = await fetch(`${apiBaseUrl}/auth/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });

      if (res.ok) {
        const user = await res.json();
        onLogin(user);
      } else {
        setError('Google login failed at server');
      }
    } catch (err) {
      console.error(err);
      setError('Google login error');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-fade-in">
        <div className="auth-header">
          <div className="logo-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>UniCalc</div>
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
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-wrapper" style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                style={{ paddingRight: '2.5rem' }}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="forgot-password" style={{ textAlign: 'right', marginTop: '-0.5rem', marginBottom: '1rem' }}>
            <span 
              onClick={() => alert("Forgot password functionality is coming soon! Please contact the administrator.")}
              style={{ fontSize: '0.85rem', color: 'var(--accent-color)', cursor: 'pointer' }}
            >
              Forgot Password?
            </span>
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        <div className="divider">OR</div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google Login Failed')}
            theme="filled_blue"
            shape="pill"
            width="100%"
          />
        </div>

        <div className="auth-footer">
          Don't have an account? <span onClick={onSwitch}>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
