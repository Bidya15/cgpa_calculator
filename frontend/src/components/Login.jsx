import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff } from 'lucide-react';

const Login = ({ onLogin, onSwitch }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const [resetState, setResetState] = useState('login'); // login, verify, reset
  const [resetData, setResetData] = useState({ username: '', email: '', newPassword: '', confirmPassword: '' });
  const [success, setSuccess] = useState('');

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (resetState === 'login') {
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
      } else if (resetState === 'verify') {
        const res = await fetch(`${apiBaseUrl}/auth/forgot-password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: resetData.username, email: resetData.email })
        });
        if (res.ok) {
          setResetState('reset');
        } else {
          const msg = await res.text();
          setError(msg || 'Verification failed');
        }
      } else if (resetState === 'reset') {
        if (resetData.newPassword !== resetData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        const res = await fetch(`${apiBaseUrl}/auth/reset-password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: resetData.username, newPassword: resetData.newPassword })
        });
        if (res.ok) {
          setSuccess('Password updated successfully! Please login.');
          setTimeout(() => {
            setResetState('login');
            setResetData({ username: '', email: '', newPassword: '', confirmPassword: '' });
          }, 3000);
        } else {
          const msg = await res.text();
          setError(msg || 'Reset failed');
        }
      }
    } catch (err) {
      setError('Server connection failed');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const res = await fetch(`${apiBaseUrl}/auth/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });

      if (res.ok) {
        const user = await res.json();
        onLogin(user);
      } else {
        setError('Google login failed');
      }
    } catch (err) {
      setError('Google login error');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card animate-fade-in">
        <div className="auth-header">
          <div className="logo-text" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>UniCalc</div>
          <h2>
            {resetState === 'login' ? 'Welcome Back' : 
             resetState === 'verify' ? 'Forgot Password' : 'Reset Password'}
          </h2>
          <p>
            {resetState === 'login' ? 'Login to access your CGPA portal' : 
             resetState === 'verify' ? 'Verify your identity' : 'Enter your new password'}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {resetState === 'login' && (
            <>
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
                      background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="forgot-password" style={{ textAlign: 'right', marginTop: '-0.5rem' }}>
                <span 
                  onClick={() => setResetState('verify')}
                  style={{ fontSize: '0.85rem', color: 'var(--accent-color)', cursor: 'pointer' }}
                >
                  Forgot Password?
                </span>
              </div>
            </>
          )}

          {resetState === 'verify' && (
            <>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Your username"
                  value={resetData.username}
                  onChange={(e) => setResetData({ ...resetData, username: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Registered Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={resetData.email}
                  onChange={(e) => setResetData({ ...resetData, email: e.target.value })}
                  required
                />
              </div>
              <div className="forgot-password" style={{ textAlign: 'left', marginTop: '-0.5rem' }}>
                <span 
                  onClick={() => setResetState('login')}
                  style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
                >
                  ← Back to Login
                </span>
              </div>
            </>
          )}

          {resetState === 'reset' && (
            <>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={resetData.newPassword}
                  onChange={(e) => setResetData({ ...resetData, newPassword: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={resetData.confirmPassword}
                  onChange={(e) => setResetData({ ...resetData, confirmPassword: e.target.value })}
                  required
                />
              </div>
            </>
          )}

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text" style={{ color: 'var(--success)', textAlign: 'center', padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px' }}>{success}</p>}
          
          <button type="submit" className="btn-primary">
            {resetState === 'login' ? 'Sign In' : 
             resetState === 'verify' ? 'Verify Account' : 'Update Password'}
          </button>
        </form>

        {resetState === 'login' && (
          <>
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
          </>
        )}

        <div className="auth-footer">
          Don't have an account? <span onClick={onSwitch}>Register</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
