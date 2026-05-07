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
  const [error, setError] = useState('');

  const colleges = ["AEC", "JEC", "JIST", "BBEC", "BVEC", "GEC", "DEC", "GIMIT"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/api/auth/register', {
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
        onSwitch();
      } else {
        const msg = await res.text();
        setError(msg || 'Registration failed');
      }
    } catch (err) {
      setError('Server connection failed');
    }
  };

  const handleGoogleLogin = () => {
    alert("Google Registration is coming soon! For now, please use the form.");
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <div className="auth-header">
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

          <div className="form-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
            <div className="form-group">
              <label>College</label>
              <select value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})}>
                {colleges.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Branch</label>
              <select value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})}>
                <option value="CSE">CSE</option>
                <option value="CE">Civil</option>
                <option value="ME">Mechanical</option>
                <option value="EE">Electrical</option>
                <option value="ECE">ECE</option>
              </select>
            </div>
          </div>

          <div className="form-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
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

          {error && <p className="error-text" style={{color: '#ef4444', textAlign: 'center', fontSize: '0.85rem'}}>{error}</p>}
          
          <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '0.5rem'}}>Create Account</button>
        </form>

        <div className="divider" style={{margin: '1.5rem 0', display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem'}}>
          <div style={{flex: 1, height: '1px', background: 'var(--border-color)'}}></div>
          <span style={{padding: '0 1rem'}}>OR</span>
          <div style={{flex: 1, height: '1px', background: 'var(--border-color)'}}></div>
        </div>

        <button className="btn-secondary" onClick={handleGoogleLogin} style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem'}}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" alt="Google" width="18" />
          Continue with Google
        </button>

        <div className="auth-footer" style={{marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
          Already a member? <span onClick={onSwitch} style={{color: 'var(--primary)', fontWeight: '600', cursor: 'pointer'}}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
