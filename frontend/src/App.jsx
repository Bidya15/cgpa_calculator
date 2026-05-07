import React, { useState, useEffect } from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import SGPACalculator from './components/SGPACalculator';
import CGPACalculator from './components/CGPACalculator';
import SyllabusViewer from './components/SyllabusViewer';

const App = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('unic_user')));
  const [view, setView] = useState('dashboard');
  const [theme, setTheme] = useState(() => localStorage.getItem('unic_theme') || 'dark');

  useEffect(() => {
    user ? localStorage.setItem('unic_user', JSON.stringify(user)) : localStorage.removeItem('unic_user');
  }, [user]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('unic_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  if (!user) return <Auth onLogin={setUser} />;

  const renderView = () => {
    const commonProps = { setView, theme, toggleTheme };
    switch (view) {
      case 'sgpa': return <SGPACalculator {...commonProps} />;
      case 'cgpa': return <CGPACalculator {...commonProps} />;
      case 'syllabus': return <SyllabusViewer {...commonProps} />;
      default:     return <Dashboard user={user} {...commonProps} onLogout={() => { setUser(null); setView('dashboard'); }} />;
    }
  };

  return <>{renderView()}</>;
};

export default App;
