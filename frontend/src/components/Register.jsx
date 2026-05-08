import { Eye, EyeOff } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

const Register = ({ onRegister, onSwitch }) => {
  const [formData, setFormData] = useState({ 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    name: '', 
    college: '',
    branch: '' 
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const colleges = ["AEC", "JEC", "JIST", "BBEC", "BVEC", "GEC", "DEC", "GIMIT"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.college || !formData.branch) {
      setError('Please select your college and branch');
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

  const handleGoogleSuccess = async (credentialResponse) => {
    setLoading(true);
    setError('');
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
    try {
      const res = await fetch(`${apiBaseUrl}/auth/google-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
      });

      if (res.ok) {
        const user = await res.json();
        onRegister(user); // Pass user data to handle login after registration
      } else {
        setError('Google registration failed');
        setLoading(false);
      }
    } catch (err) {
      setError('Google registration error');
      setLoading(false);
    }
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
              <select value={formData.college} onChange={(e) => setFormData({...formData, college: e.target.value})} required>
                <option value="" disabled>Select College</option>
                {colleges.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Branch</label>
              <select value={formData.branch} onChange={(e) => setFormData({...formData, branch: e.target.value})} required>
                <option value="" disabled>Select Branch</option>
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
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
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
            <div className="form-group">
              <label>Confirm</label>
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="Confirm"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  required
                  style={{ paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text" style={{ color: 'var(--accent-color)', textAlign: 'center', marginBottom: '1rem' }}>{success}</p>}
          
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="divider">OR</div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setError('Google Registration Failed')}
            theme="filled_blue"
            shape="pill"
            width="100%"
          />
        </div>

        <div className="auth-footer">
          Already a member? <span onClick={onSwitch}>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
