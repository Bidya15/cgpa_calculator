import React, { useState, useEffect } from 'react';
import { COURSES, OLD_COURSE_MAPPING, NEP_COURSE_MAPPING } from '../data/courses';

const CGPACalculator = ({ setView, theme, toggleTheme }) => {
  const [schema, setSchema] = useState('NEP');
  const [branch, setBranch] = useState('CSE');
  const [group, setGroup] = useState('GROUP_B');
  const [cgpaForm, setCgpaForm] = useState({
    numSemesters: 1,
    semesters: Array.from({ length: 8 }, (_, i) => ({
      sem: i + 1,
      sgpa: '',
      credits: '' // Changed to empty string for manual entry support
    }))
  });
  const [cgpaResult, setCgpaResult] = useState(null);
  const [showWarning, setShowWarning] = useState(false);

  // Auto-fill Group based on Branch for Sem 1 & 2
  useEffect(() => {
    const mapping = schema === 'NEP' ? NEP_COURSE_MAPPING : OLD_COURSE_MAPPING;
    let foundGroup = group;
    if (mapping.GROUP_A.includes(branch)) foundGroup = 'GROUP_A';
    if (mapping.GROUP_B.includes(branch)) foundGroup = 'GROUP_B';
    setGroup(foundGroup);
  }, [branch, schema]);

  // Auto-load credits when branch/schema changes, but keep them editable
  useEffect(() => {
    const newSems = cgpaForm.semesters.map(s => {
      let credits = 0;
      try {
        const courseData = COURSES[schema];
        let subjects = [];
        if (s.sem <= 2) {
          subjects = courseData.FIRST_YEAR[group][s.sem];
        } else {
          subjects = courseData.BRANCH_WISE[branch][s.sem] || [];
        }
        credits = subjects.reduce((acc, sub) => acc + (parseFloat(sub.credits) || 0), 0);
      } catch (err) {
        console.error("Credit calc error", err);
      }
      return { ...s, credits: credits || '' };
    });
    setCgpaForm(prev => ({ ...prev, semesters: newSems }));
  }, [schema, branch, group]);

  // Calculate CGPA based on Formula: Σ(SGPAi * NSCi) / Σ(NSCi)
  const handleCalculate = () => {
    let totalWeightedSGPA = 0;
    let totalCredits = 0;
    let hasMissing = false;

    const activeSemesters = cgpaForm.semesters.slice(0, cgpaForm.numSemesters);

    activeSemesters.forEach(sem => {
      const sgpa = parseFloat(sem.sgpa);
      const credits = parseFloat(sem.credits);

      if (isNaN(sgpa) || sgpa <= 0 || isNaN(credits) || credits <= 0) {
        hasMissing = true;
      } else {
        totalWeightedSGPA += (sgpa * credits);
        totalCredits += credits;
      }
    });

    if (hasMissing) {
      setShowWarning(true);
      setCgpaResult(null);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    if (totalCredits > 0) {
      // Calculate and round to 2 decimal points
      const rawCgpa = totalWeightedSGPA / totalCredits;
      const roundedCgpa = (Math.round(rawCgpa * 100) / 100).toFixed(2);
      
      setCgpaResult({ 
        cgpa: roundedCgpa, 
        totalCredits, 
        totalWeightedSGPA: totalWeightedSGPA.toFixed(2) 
      });
      setShowWarning(false);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '5rem' }}>
      <nav className="glass-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button className="btn-secondary" onClick={() => setView('dashboard')} style={{ padding: '0.5rem' }}>← Back</button>
          <h1 className="logo-text" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>CGPA Engine</h1>
        </div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <select className="schema-select" value={schema} onChange={(e) => setSchema(e.target.value)} style={{ padding: '0.4rem', fontSize: '0.75rem', borderRadius: '8px' }}>
            <option value="NEP">NEP 2024</option>
            <option value="OLD">Old Course</option>
          </select>
        </div>
      </nav>

      {showWarning && (
        <div className="animate-fade-in" style={{
          position: 'fixed',
          top: '6rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(239, 68, 68, 0.9)',
          color: '#fff',
          padding: '1rem 2rem',
          borderRadius: '16px',
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <span>⚠️</span>
          <span>Missing Data: Enter SGPA and Credits for all semesters.</span>
        </div>
      )}

      <div className="card animate-fade-in" style={{ marginTop: '1.5rem', maxWidth: '900px', margin: '1.5rem auto', padding: 'clamp(1rem, 5vw, 3rem)', borderRadius: '24px' }}>
        <div className="card-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', marginBottom: '0.5rem' }}>Academic Aggregate</h2>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Σ(SGPAi × NSCi) / Σ(NSCi)
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Official weighted calculation formula applied</p>
        </div>

        <div className="form-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
          background: 'rgba(148,163,184,0.04)',
          padding: '1.5rem',
          borderRadius: '16px',
          border: '1px solid var(--border-color)'
        }}>
          <div className="form-group">
            <label style={{ fontSize: '0.8rem', opacity: 0.7 }}>Engineering Branch</label>
            <select value={branch} onChange={(e) => { setBranch(e.target.value); setCgpaResult(null); }}>
              {["CSE", "CE", "ME", "EE", "ECE", "ChE", "IE", "IPE", "ETE", "PEI", "EEE"].map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label style={{ fontSize: '0.8rem', opacity: 0.7 }}>Semesters Completed</label>
            <select value={cgpaForm.numSemesters} onChange={(e) => { setCgpaForm({ ...cgpaForm, numSemesters: parseInt(e.target.value) }); setCgpaResult(null); }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Semesters</option>)}
            </select>
          </div>
        </div>

        <div className="table-responsive" style={{ 
          marginBottom: '2.5rem', 
          borderRadius: '16px', 
          border: '1px solid var(--border-color)', 
          overflowX: 'auto', 
          background: 'var(--bg-dark)',
          WebkitOverflowScrolling: 'touch' // Smooth scrolling for iOS
        }}>
          <table className="cgpa-table" style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', background: 'rgba(148, 163, 184, 0.05)', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                <th style={{ padding: '1rem' }}>SEMESTER</th>
                <th style={{ padding: '1rem', textAlign: 'center' }}>NSCi (CREDITS)</th>
                <th style={{ padding: '1rem', textAlign: 'right' }}>SGPAi SCORE</th>
              </tr>
            </thead>
            <tbody>
              {cgpaForm.semesters.slice(0, cgpaForm.numSemesters).map((sem, idx) => (
                <tr key={idx} className="cgpa-row" style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1rem', fontWeight: '700', fontSize: '0.95rem' }}>Semester {sem.sem}</td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <input
                      type="number"
                      placeholder="Credits"
                      style={{
                        background: 'rgba(99, 102, 241, 0.05)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--primary)',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        width: '70px',
                        textAlign: 'center',
                        fontWeight: '700'
                      }}
                      value={sem.credits}
                      onChange={(e) => {
                        const newSems = [...cgpaForm.semesters];
                        newSems[idx].credits = e.target.value;
                        setCgpaForm({ ...cgpaForm, semesters: newSems });
                        setCgpaResult(null);
                      }}
                    />
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'right' }}>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      style={{
                        background: 'var(--bg-card)',
                        border: sem.sgpa === '' && showWarning ? '1px solid #ef4444' : '1px solid var(--border-color)',
                        color: 'var(--text-main)',
                        padding: '0.6rem 1rem',
                        borderRadius: '10px',
                        width: '100px',
                        textAlign: 'right',
                        fontWeight: '700',
                        fontSize: '1rem',
                        transition: 'all 0.3s'
                      }}
                      value={sem.sgpa}
                      onChange={(e) => {
                        const newSems = [...cgpaForm.semesters];
                        newSems[idx].sgpa = e.target.value;
                        setCgpaForm({ ...cgpaForm, semesters: newSems });
                        if (showWarning) setShowWarning(false);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <button
            className="btn-primary"
            onClick={handleCalculate}
            style={{ width: '100%', padding: '1.25rem', borderRadius: '16px', fontSize: '1.1rem', fontWeight: '800' }}
          >
            Calculate CGPA
          </button>
        </div>

        {cgpaResult && (
          <div className="results-card animate-fade-in" style={{
            padding: '2.5rem',
            background: 'var(--bg-dark)',
            borderRadius: '24px',
            border: '1px solid var(--primary)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 50px -20px rgba(99, 102, 241, 0.2)'
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem 1rem', background: 'var(--primary)', color: '#fff', fontSize: '0.65rem', fontWeight: '900', borderBottomLeftRadius: '12px', letterSpacing: '1px' }}>FINAL SCORE</div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '1px', fontSize: '0.9rem', opacity: 0.8 }}>AGGREGATE CGPA</span>
              <span style={{ fontSize: 'clamp(5rem, 15vw, 8rem)', fontWeight: '950', color: 'var(--primary)', lineHeight: 1, letterSpacing: '-3px' }}>{cgpaResult.cgpa}</span>

              <div style={{ marginTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', width: '100%' }}>
                <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.05)', borderRadius: '20px', border: '1px solid rgba(16, 185, 129, 0.1)', textAlign: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Percentage</span>
                  <h4 style={{ fontSize: '1.8rem', color: '#10b981', margin: 0, fontWeight: '900' }}>{(parseFloat(cgpaResult.cgpa) * 10).toFixed(1)}%</h4>
                </div>

                <div style={{ padding: '1.5rem', background: 'rgba(148, 163, 184, 0.05)', borderRadius: '20px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Total Credits (ΣNSCi)</span>
                  <h4 style={{ fontSize: '1.8rem', color: 'var(--text-main)', margin: 0, fontWeight: '900' }}>{cgpaResult.totalCredits}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CGPACalculator;
