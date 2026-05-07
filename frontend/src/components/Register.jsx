import React, { useState } from 'react';

const Register = ({ onRegister, onSwitch }) => {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    name: '', 
    college: 'AEC',
    branch: 'CSE' 
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const colleges = ["AEC", "JEC", "JIST", "BBEC", "BVEC", "GEC", "DEC", "GIMIT"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
    try {
      const res = await fetch(`${apiBaseUrl}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          name: formData.name,
          college: formData.college,
          branch: formData.branch
        })
      });
      if (res.ok) {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => {
          onRegister();
        }, 2000);
      } else {
        const msg = await res.text();
        setError(msg || 'Registration failed');
        setLoading(false);
      }
    } catch (err) {
      setError('Server connection failed');
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Registration is coming soon! For now, please use the form.");
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo-text" style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>UniCalc</div>
          <h2>Join UniCalc</h2>
          <p>Create your academic profile</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              placeholder="Pick a unique username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@college.edu"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>College</label>
              <select value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})}>
                {colleges.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Branch</label>
              <select value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})}>
                <option value="CSE">Computer Science (CSE)</option>
                <option value="CE">Civil Engineering (CE)</option>
                <option value="ME">Mechanical Engineering (ME)</option>
                <option value="EE">Electrical Engineering (EE)</option>
                <option value="ECE">Electronics & Comm. (ECE)</option>
                <option value="IE">Instrumentation (IE)</option>
                <option value="CH">Chemical Engineering (CH)</option>
                <option value="IPE">Industrial & Prod. (IPE)</option>
                <option value="BT">Biotechnology (BT)</option>
                <option value="PE">Power Electronics (PE)</option>
              </select>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm</label>
              <input 
                type="password" 
                placeholder="Confirm"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>
          </div>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text" style={{ color: 'var(--accent-color)', textAlign: 'center', marginBottom: '1rem' }}>{success}</p>}
          
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="btn-google" onClick={handleGoogleLogin}>
          <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" alt="Google" />
          Continue with Google
        </button>

        <div className="auth-footer">
          Already a member? <span onClick={onSwitch}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
