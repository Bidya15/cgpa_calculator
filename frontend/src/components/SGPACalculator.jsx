import React, { useState, useEffect } from 'react';
import { GRADE_POINTS, COURSES, OLD_COURSE_MAPPING, NEP_COURSE_MAPPING } from '../data/courses';

const SGPACalculator = ({ setView, theme, toggleTheme }) => {
  const [schema, setSchema] = useState('NEP');
  const [isManual, setIsManual] = useState(false);
  const [sgpaForm, setSgpaForm] = useState({
    group: 'GROUP_B',
    branch: '',
    semester: '',
    subjects: []
  });
  const [sgpaResults, setSgpaResults] = useState(null);

  // Auto-fill Group based on Branch for Sem 1 & 2
  useEffect(() => {
    if (!sgpaForm.branch || !sgpaForm.semester) return;
    if (sgpaForm.semester <= 2) {
      const mapping = schema === 'NEP' ? NEP_COURSE_MAPPING : OLD_COURSE_MAPPING;
      let foundGroup = sgpaForm.group;
      if (mapping.GROUP_A.includes(sgpaForm.branch)) foundGroup = 'GROUP_A';
      if (mapping.GROUP_B.includes(sgpaForm.branch)) foundGroup = 'GROUP_B';

      if (foundGroup !== sgpaForm.group) {
        setSgpaForm(prev => ({ ...prev, group: foundGroup }));
      }
    }
  }, [sgpaForm.branch, sgpaForm.semester, schema]);

  // Load Curriculum from local courses.js
  useEffect(() => {
    if (isManual || !sgpaForm.branch || !sgpaForm.semester) {
      if (!isManual) setSgpaForm(prev => ({ ...prev, subjects: [] }));
      return;
    }

    let subjects = [];
    try {
      const courseData = COURSES[schema];
      if (sgpaForm.semester <= 2) {
        subjects = courseData.FIRST_YEAR[sgpaForm.group][sgpaForm.semester];
      } else {
        subjects = courseData.BRANCH_WISE[sgpaForm.branch][sgpaForm.semester] || [];
      }

      setSgpaForm(prev => ({
        ...prev,
        subjects: subjects.map(sub => {
          const isElective = sub.options && sub.options.length > 0;
          return {
            ...sub,
            isElective: isElective,
            selectedSubject: isElective ? sub.options[0] : sub,
            grade: 'O',
            manualGradePoint: 10
          };
        })
      }));
    } catch (err) {
      console.error("Local data error:", err);
      setSgpaForm(prev => ({ ...prev, subjects: [] }));
    }
  }, [schema, sgpaForm.group, sgpaForm.branch, sgpaForm.semester, isManual]);


  const [showWarning, setShowWarning] = useState(false);

  // Calculate SGPA
  const handleFinalize = () => {
    let hasInvalid = false;

    if (isManual) {
      sgpaForm.subjects.forEach(sub => {
        if (!sub.name || parseFloat(sub.credits) <= 0) {
          hasInvalid = true;
        }
      });
    }

    if (hasInvalid) {
      setShowWarning(true);
      setSgpaResults(null);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    // Normal calculation already happens via useEffect, but we ensure results are shown
    setShowWarning(false);
  };

  // Calculate SGPA in Real-time (Preview)
  useEffect(() => {
    let totalWeightedPoints = 0;
    let totalCredits = 0;

    sgpaForm.subjects.forEach(slot => {
      const gp = GRADE_POINTS[slot.grade] || 0;
      const credits = parseFloat(slot.isElective ? slot.selectedSubject.credits : slot.credits) || 0;
      totalWeightedPoints += gp * credits;
      totalCredits += credits;
    });

    const sgpa = totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : '0.00';
    setSgpaResults({ sgpa, totalWeightedPoints, totalCredits });
  }, [sgpaForm.subjects]);

  const addManualSubject = () => {
    setSgpaForm(prev => ({
      ...prev,
      subjects: [...prev.subjects, { isManual: true, name: 'New Subject', credits: 4, grade: 'O' }]
    }));
  };

  const removeSubject = (idx) => {
    const newSubs = [...sgpaForm.subjects];
    newSubs.splice(idx, 1);
    setSgpaForm({ ...sgpaForm, subjects: newSubs });
  };

  const handleElectiveChange = (slotIdx, subjectName) => {
    const newSubs = [...sgpaForm.subjects];
    const selected = newSubs[slotIdx].options.find(o => o.name === subjectName);
    newSubs[slotIdx].selectedSubject = selected;
    setSgpaForm({ ...sgpaForm, subjects: newSubs });
  };

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '5rem' }}>
      <nav className="glass-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <button className="btn-secondary" onClick={() => setView('dashboard')} style={{ padding: '0.5rem' }}>← Back</button>
          <h1 className="logo-text" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>SGPA Calculator (ASTU)</h1>
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
          position: 'fixed', top: '6rem', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(239, 68, 68, 0.9)', color: '#fff', padding: '1rem 2rem',
          borderRadius: '16px', zIndex: 1000, backdropFilter: 'blur(8px)',
          boxShadow: '0 10px 30px rgba(239, 68, 68, 0.3)', fontWeight: '700'
        }}>
          ⚠️ Input Required: Please check subject names and credits.
        </div>
      )}

      <div className="card animate-fade-in" style={{ marginTop: '1.5rem', padding: 'clamp(1rem, 5vw, 2.5rem)', borderRadius: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '0.25rem' }}>Academic Analysis</h2>
            <div className="formula-box" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>
              Σ (Grade Points × Credits) / Total Credits
            </div>
          </div>
          <button
            className={isManual ? "btn-primary" : "btn-secondary"}
            onClick={() => { setIsManual(!isManual); setSgpaResults(null); setShowWarning(false); }}
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', borderRadius: '12px' }}
          >
            {isManual ? "Syllabus Mode" : "Manual Entry Mode"}
          </button>
        </div>

        {!isManual && (
          <div className="form-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            marginBottom: '2rem',
            gap: '1.5rem',
            background: 'rgba(148,163,184,0.04)',
            padding: '1.5rem',
            borderRadius: '16px',
            border: '1px solid var(--border-color)'
          }}>
            <div className="form-group">
              <label style={{ fontSize: '0.8rem', opacity: 0.7 }}>Semester</label>
              <select value={sgpaForm.semester} onChange={(e) => setSgpaForm({ ...sgpaForm, semester: e.target.value ? parseInt(e.target.value) : '' })}>
                <option value="">Select Semester</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.8rem', opacity: 0.7 }}>Branch</label>
              <select value={sgpaForm.branch} onChange={(e) => setSgpaForm({ ...sgpaForm, branch: e.target.value })}>
                <option value="">Select Branch</option>
                {["CSE", "CE", "ME", "EE", "ECE", "ChE", "IE", "IPE", "ETE", "PEI", "EEE"].map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {sgpaForm.semester <= 2 && (
              <div className="form-group">
                <label style={{ fontSize: '0.8rem', opacity: 0.7 }}>Academic Group</label>
                <select value={sgpaForm.group} onChange={(e) => setSgpaForm({ ...sgpaForm, group: e.target.value })}>
                  <option value="GROUP_A">Group A</option>
                  <option value="GROUP_B">Group B</option>
                </select>
              </div>
            )}
          </div>
        )}

        <div className="subjects-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{isManual ? 'Manual Entry' : 'Marksheet Preview'}</h3>
            {isManual && (
              <button className="btn-primary" onClick={addManualSubject} style={{ background: 'var(--success)', padding: '0.5rem 1rem', fontSize: '0.85rem', borderRadius: '10px' }}>+ Add Subject</button>
            )}
          </div>

          <div className="table-responsive" style={{ 
            overflowX: 'auto', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)', 
            background: 'var(--bg-dark)',
            WebkitOverflowScrolling: 'touch'
          }}>
            <table className="cgpa-table" style={{ minWidth: '700px', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ textAlign: 'left', background: 'rgba(148, 163, 184, 0.05)', borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '1rem', width: '50px' }}>#</th>
                  <th style={{ padding: '1rem' }}>Subject Details</th>
                  <th style={{ padding: '1rem', textAlign: 'center', width: '120px' }}>Grade</th>
                  <th style={{ padding: '1rem', textAlign: 'center', width: '80px' }}>GP</th>
                  <th style={{ padding: '1rem', textAlign: 'center', width: '100px' }}>Credits</th>
                  <th style={{ padding: '1rem', textAlign: 'right', width: '150px' }}>Points</th>
                  {isManual && <th style={{ padding: '1rem', width: '80px' }}></th>}
                </tr>
              </thead>
              <tbody>
                {sgpaForm.subjects.length > 0 ? sgpaForm.subjects.map((slot, idx) => {
                  const credits = slot.isElective ? slot.selectedSubject.credits : slot.credits;
                  const gp = GRADE_POINTS[slot.grade] || 0;
                  const weighted = (gp * (parseFloat(credits) || 0)).toFixed(1);
                  const isInvalid = isManual && (!slot.name || parseFloat(slot.credits) <= 0);

                  return (
                    <tr key={idx} className="cgpa-row" style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '1rem', opacity: 0.5, fontSize: '0.85rem' }}>{idx + 1}</td>
                      <td style={{ padding: '1rem' }}>
                        {isManual ? (
                          <input
                            type="text"
                            style={{
                              background: 'transparent', color: 'var(--text-main)',
                              border: isInvalid && !slot.name && showWarning ? '1px solid #ef4444' : '1px solid var(--border-color)',
                              padding: '0.5rem', borderRadius: '8px', width: '100%', fontSize: '0.9rem'
                            }}
                            value={slot.name}
                            onChange={(e) => {
                              const newSubs = [...sgpaForm.subjects];
                              newSubs[idx].name = e.target.value;
                              setSgpaForm({ ...sgpaForm, subjects: newSubs });
                            }}
                          />
                        ) : slot.isElective ? (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase' }}>{slot.name}</span>
                            <select
                              style={{ padding: '0.5rem', background: 'var(--bg-dark)', color: 'var(--text-main)', border: '1px solid var(--primary)', borderRadius: '8px', width: '100%', fontSize: '0.85rem' }}
                              value={slot.selectedSubject.name}
                              onChange={(e) => handleElectiveChange(idx, e.target.value)}
                            >
                              {slot.options.map(opt => (
                                <option key={opt.name} value={opt.name}>{opt.name}</option>
                              ))}
                            </select>
                          </div>
                        ) : (
                          <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>{slot.name}</div>
                        )}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <select
                          style={{ padding: '0.5rem', width: '80px', background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid var(--border-color)', borderRadius: '10px', textAlign: 'center', fontWeight: '700', fontSize: '0.9rem' }}
                          value={slot.grade}
                          onChange={(e) => {
                            const newSubs = [...sgpaForm.subjects];
                            newSubs[idx].grade = e.target.value;
                            setSgpaForm({ ...sgpaForm, subjects: newSubs });
                          }}
                        >
                          {Object.keys(GRADE_POINTS).map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <span style={{ fontWeight: '700', opacity: 0.6 }}>{gp}</span>
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        {isManual ? (
                          <input
                            type="number"
                            step="0.5"
                            style={{
                              padding: '0.5rem', width: '65px', background: 'transparent', color: 'var(--text-main)',
                              border: isInvalid && parseFloat(slot.credits) <= 0 && showWarning ? '1px solid #ef4444' : '1px solid var(--border-color)',
                              borderRadius: '10px', textAlign: 'center'
                            }}
                            value={slot.credits}
                            onChange={(e) => {
                              const newSubs = [...sgpaForm.subjects];
                              newSubs[idx].credits = e.target.value;
                              setSgpaForm({ ...sgpaForm, subjects: newSubs });
                            }}
                          />
                        ) : (
                          <span className="credit-badge">{credits}</span>
                        )}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right', color: 'var(--primary)', fontWeight: '800', fontSize: '1rem' }}>{weighted}</td>
                      {isManual && (
                        <td style={{ padding: '1rem', textAlign: 'center' }}>
                          <button onClick={() => removeSubject(idx)} style={{ background: 'none', color: '#ef4444', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>×</button>
                        </td>
                      )}
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '4rem', opacity: 0.5 }}>
                      Selection not found in local courses.js
                    </td>
                  </tr>
                )}
              </tbody>
              {sgpaForm.subjects.length > 0 && (
                <tfoot>
                  <tr style={{ background: 'rgba(99, 102, 241, 0.05)', fontWeight: '800', fontSize: '0.9rem' }}>
                    <td colSpan="4" style={{ padding: '1.25rem', textAlign: 'right', letterSpacing: '1px' }}>SEMESTER AGGREGATE:</td>
                    <td style={{ padding: '1.25rem', textAlign: 'center' }}>{sgpaForm.subjects.reduce((acc, s) => acc + (parseFloat(s.isElective ? s.selectedSubject.credits : s.credits) || 0), 0)}</td>
                    <td style={{ padding: '1.25rem', textAlign: 'right', color: 'var(--primary)', fontSize: '1.1rem' }}>
                      {sgpaForm.subjects.reduce((acc, s) => {
                        const credits = s.isElective ? s.selectedSubject.credits : s.credits;
                        const gp = GRADE_POINTS[s.grade] || 0;
                        return acc + (gp * (parseFloat(credits) || 0));
                      }, 0).toFixed(1)}
                    </td>
                    {isManual && <td></td>}
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <button
            className="btn-primary"
            onClick={handleFinalize}
            style={{ padding: '1.25rem 4rem', borderRadius: '16px', fontSize: '1.1rem', fontWeight: '800', width: '100%' }}
          >
            Finalize Semester Analysis
          </button>
        </div>

        {sgpaResults && !showWarning && (
          <div className="results-card animate-fade-in" style={{
            marginTop: '3rem',
            border: '1px solid var(--primary)',
            borderRadius: '24px',
            padding: '2.5rem',
            background: 'rgba(99, 102, 241, 0.03)',
            boxShadow: '0 20px 40px -15px rgba(99, 102, 241, 0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 'clamp(2rem, 5vw, 4rem)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Total Points</div>
                <div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', color: 'var(--text-main)' }}>{parseFloat(sgpaResults.totalWeightedPoints).toFixed(1)}</div>
              </div>
              <div style={{ fontSize: '2.5rem', opacity: 0.1, fontWeight: '100' }}>÷</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Total Credits</div>
                <div style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: '900', color: 'var(--text-main)' }}>{sgpaResults.totalCredits}</div>
              </div>
              <div style={{ fontSize: '2.5rem', opacity: 0.1, fontWeight: '100' }}>=</div>
              <div style={{ textAlign: 'center', background: 'var(--primary)', padding: '1.5rem 3rem', borderRadius: '24px', color: '#fff', boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)' }}>
                <div style={{ fontWeight: '800', marginBottom: '0.25rem', fontSize: '0.8rem', letterSpacing: '1px', opacity: 0.9 }}>YOUR SGPA</div>
                <div style={{ fontSize: 'clamp(3.5rem, 8vw, 5rem)', fontWeight: '950', lineHeight: 1 }}>{sgpaResults.sgpa}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SGPACalculator;
