import React from 'react';

// Import logos from assets
import aecLogo from '../assets/AEC.png';
import jecLogo from '../assets/JEC.png';
import jistLogo from '../assets/JIST.png';
import bbecLogo from '../assets/BBEC.png';
import bvecLogo from '../assets/BVEC.png';
import gecLogo from '../assets/GEC.png';
import decLogo from '../assets/DEC.png';

const Dashboard = ({ user, setView, theme, toggleTheme, onLogout }) => {
  const colleges = [
    { id: "aec", name: "AEC", logo: aecLogo },
    { id: "jec", name: "JEC", logo: jecLogo },
    { id: "jist", name: "JIST", logo: jistLogo },
    { id: "gec", name: "GEC", logo: gecLogo },
    { id: "dec", name: "DEC", logo: decLogo },
    { id: "bbec", name: "BBEC", logo: bbecLogo },
    { id: "bvec", name: "BVEC", logo: bvecLogo }
  ];

  return (
    <div className="container animate-fade-in">
      <nav className="glass-nav">
        <h1 className="logo-text">UniCalc Portal</h1>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <div className="nav-user" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Welcome, <b style={{ color: 'var(--text-main)' }}>{user.name}</b>
            </span>
            <button className="btn-secondary" onClick={onLogout}>Logout</button>
          </div>
        </div>
      </nav>

      {/* College Logo Ticker */}
      <div className="logo-ticker" style={{ marginTop: '2rem' }}>
        <div className="ticker-content">
          {[...colleges, ...colleges].map((college, idx) => (
            <div key={idx} className="ticker-item">
              <div className="college-icon-uniform">
                <img
                  src={college.logo}
                  alt={college.name}
                  className="college-logo-img"
                />
              </div>
              <span className="college-ticker-name">{college.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="auth-header" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: '800' }}>Academic CGPA Calculator (Under ASTU)</h2>
        <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', opacity: 0.8 }}>
          Analyze your performance with precision tools tailored for the <b>ASTU</b> ecosystem.
        </p>
      </div>

      <div className="dashboard-grid" style={{ marginTop: '4rem' }}>
        <div className="dashboard-card" onClick={() => setView('sgpa')}>
          <div className="icon-box">📊</div>
          <h3>SGPA Engine</h3>
          <p>Detailed semester-wise grade analysis with automated curriculum mapping.</p>
          <button className="btn-primary" style={{ marginTop: 'auto', width: '100%', borderRadius: '16px' }}>Launch Calculator</button>
        </div>

        <div className="dashboard-card" onClick={() => setView('cgpa')}>
          <div className="icon-box">🏆</div>
          <h3>CGPA Aggregate</h3>
          <p>Calculate your cumulative performance and percentage conversion instantly.</p>
          <button className="btn-primary" style={{ marginTop: 'auto', width: '100%', borderRadius: '16px' }}>Launch Aggregate</button>
        </div>

        <div className="dashboard-card" onClick={() => setView('syllabus')}>
          <div className="icon-box">📜</div>
          <h3>Syllabus Vault</h3>
          <p>Access official university curriculum for both Old and NEP 2024 standards.</p>
          <button className="btn-secondary" style={{ marginTop: 'auto', width: '100%', borderRadius: '16px' }}>View Repository</button>
        </div>
      </div>

      <footer style={{ marginTop: '8rem', textAlign: 'center', padding: '3rem 2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '2px', background: 'var(--primary)' }}></div>
        <p style={{ marginBottom: '0.5rem' }}>&copy; 2026 UniCalc Academic Portal. Built for precision.</p>
        <small style={{ opacity: 0.5 }}>Not an official university application.</small>
      </footer>
    </div>
  );
};

export default Dashboard;
