import React, { useState } from 'react';
import { COURSES, BRANCHES, SCHEMAS } from '../data/courses';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { Download, BookOpen, ChevronLeft, Printer } from 'lucide-react';

const SyllabusViewer = ({ setView, theme }) => {
  const [selectedBranch, setSelectedBranch] = useState('CSE');
  const [selectedSchema, setSelectedSchema] = useState('NEP');
  const [selectedSemester, setSelectedSemester] = useState(3);

  const branches = Object.entries(BRANCHES).map(([key, name]) => ({ id: key, name }));
  const schemas = Object.entries(SCHEMAS).map(([key, name]) => ({ id: key, name }));
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const getSyllabus = () => {
    const schemaKey = selectedSchema;
    if (selectedSemester <= 2) {
      // First Year logic (Group A/B)
      return COURSES[schemaKey].FIRST_YEAR.GROUP_A[selectedSemester] || [];
    }
    return COURSES[schemaKey].BRANCH_WISE[selectedBranch]?.[selectedSemester] || [];
  };

  const currentSyllabus = getSyllabus();

  const downloadPDF = () => {
    try {
      const doc = new jsPDF();
      const branchName = BRANCHES[selectedBranch];
      const schemaName = SCHEMAS[selectedSchema];

      // Add header
      doc.setFontSize(22);
      doc.setTextColor(63, 102, 241); // Primary color
      doc.text('UniCalc Academic Portal', 14, 25);

      doc.setFontSize(12);
      doc.setTextColor(100);
      doc.text(`Official Academic Curriculum - ${schemaName}`, 14, 35);
      
      doc.setDrawColor(200);
      doc.line(14, 40, 196, 40);

      doc.setFontSize(11);
      doc.setTextColor(40);
      doc.text(`Department: ${branchName}`, 14, 50);
      doc.text(`Semester: ${selectedSemester}`, 14, 57);
      doc.text(`Generated On: ${new Date().toLocaleDateString()}`, 14, 64);

      // Table data
      const tableRows = currentSyllabus.map((sub, index) => [
        index + 1,
        sub.name,
        sub.credits
      ]);

      autoTable(doc, {
        startY: 75,
        head: [['#', 'Subject Name', 'Credits']],
        body: tableRows,
        theme: 'striped',
        headStyles: { 
          fillColor: [99, 102, 241],
          textColor: [255, 255, 255],
          fontSize: 10,
          fontStyle: 'bold'
        },
        styles: { fontSize: 9, cellPadding: 4 },
        columnStyles: {
          0: { cellWidth: 15, halign: 'center' },
          2: { cellWidth: 25, halign: 'center' }
        }
      });

      const finalY = doc.lastAutoTable?.finalY || 80;
      const totalCredits = currentSyllabus.reduce((acc, curr) => acc + (parseFloat(curr.credits) || 0), 0);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`Cumulative Credits: ${totalCredits}`, 14, finalY + 15);
      
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(8);
      doc.setTextColor(150);
      doc.text('This is a computer-generated document from UniCalc.', 14, doc.internal.pageSize.height - 10);

      doc.save(`ASTU_Syllabus_${selectedBranch}_S${selectedSemester}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  const getOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const downloadOfficial = () => {
    const semStr = getOrdinal(selectedSemester);
    const schemaName = selectedSchema === 'OLD' ? 'Old' : 'NEP';
    const subFolder = selectedSchema === 'OLD' ? 'old-Course' : 'NEP';
    const fileName = `${semStr} sem ${selectedBranch} ${schemaName}.pdf`;
    
    // Requesting from Backend Syllabus Repository
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
    const backendUrl = apiBaseUrl.replace('/api', '');
    const fileUrl = `${backendUrl}/syllabus/${subFolder}/${fileName}`;
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank"; // Open in new tab for better UX
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
      <nav className="glass-nav" style={{ 
        flexDirection: 'column', 
        alignItems: 'stretch', 
        gap: '1rem',
        padding: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <button className="btn-secondary" onClick={() => setView('dashboard')} style={{ padding: '0.5rem 1rem' }}>← Back</button>
            <h1 className="logo-text" style={{ fontSize: 'clamp(1rem, 4vw, 1.5rem)' }}>Syllabus Vault</h1>
          </div>
        </div>
        
        <div className="nav-actions" style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          width: '100%',
          flexWrap: 'wrap'
        }}>
          <button 
            className="btn-primary" 
            onClick={downloadOfficial} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.5rem', 
              padding: '0.75rem', 
              borderRadius: '12px',
              flex: '1',
              minWidth: '160px',
              fontSize: '0.85rem'
            }}
          >
            <Download size={18} />
            Official PDF
          </button>
          <button 
            className="btn-secondary" 
            onClick={downloadPDF} 
            disabled={currentSyllabus.length === 0} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              gap: '0.5rem', 
              padding: '0.75rem',
              borderRadius: '12px',
              flex: '1',
              minWidth: '160px',
              fontSize: '0.85rem',
              opacity: 0.8
            }}
          >
            <Printer size={16} />
            Summary
          </button>
        </div>
      </nav>

      <div className="syllabus-controls glass-card" style={{ marginTop: '2rem', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        <div className="control-group">
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Branch</label>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="input-field"
            style={{ width: '100%' }}
          >
            {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
          </select>
        </div>

        <div className="control-group">
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Curriculum Scheme</label>
          <select
            value={selectedSchema}
            onChange={(e) => setSelectedSchema(e.target.value)}
            className="input-field"
            style={{ width: '100%' }}
          >
            {schemas.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>

        <div className="control-group">
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Semester</label>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(Number(e.target.value))}
            className="input-field"
            style={{ width: '100%' }}
          >
            {semesters.map(s => <option key={s} value={s}>Semester {s}</option>)}
          </select>
        </div>
      </div>

      <div className="syllabus-display glass-card" style={{ marginTop: '2rem', overflow: 'hidden' }}>
        <div className="card-header" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <BookOpen size={24} className="text-primary" />
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>{BRANCHES[selectedBranch]}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {SCHEMAS[selectedSchema]} • Semester {selectedSemester}
              </p>
            </div>
          </div>
          <div className="badge-primary">
            {currentSyllabus.reduce((acc, curr) => acc + curr.credits, 0)} Credits
          </div>
        </div>

        <div style={{ padding: '1rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {currentSyllabus.length > 0 ? (
            <table className="calc-table" style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', padding: '1rem' }}>#</th>
                  <th style={{ textAlign: 'left', padding: '1rem' }}>Subject Name</th>
                  <th style={{ textAlign: 'center', padding: '1rem' }}>Credits</th>
                  <th style={{ textAlign: 'right', padding: '1rem' }}>Type</th>
                </tr>
              </thead>
              <tbody>
                {currentSyllabus.map((sub, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', color: 'var(--text-secondary)' }}>{idx + 1}</td>
                    <td style={{ padding: '1rem', fontWeight: '500' }}>{sub.name}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <span className="credit-badge">{sub.credits}</span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '6px', background: sub.credits >= 3 ? 'rgba(79, 70, 229, 0.1)' : 'rgba(16, 185, 129, 0.1)', color: sub.credits >= 3 ? 'var(--primary)' : '#10b981', fontWeight: '600' }}>
                        {sub.credits >= 3 ? 'THEORY' : 'PRACTICAL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h4>No syllabus data available for this selection.</h4>
              <p>We are currently updating our repository for higher semesters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusViewer;
