
import { useState } from 'react';
import './App.css';

export default function App() {
  const [page, setPage] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fullName, setFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    alert(`Welcome! Your email is: ${email}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    alert(`Account created for: ${fullName}`);
    setPage('login');
  };

  return (
    <div className="container">
      <div className="auth-card">

        <div className="logo">SE</div>

        <h1>Sahara Engineering Group LTD</h1>
        <p className="subtitle">User Account System</p>

        {page === 'login' ? (
          <div className="form-section">

            <h2>Login to your account</h2>

            <form onSubmit={handleLogin}>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Login to Account
              </button>

            </form>

            <p className="switch-text">
              Don't have an account? Choose Register below.
            </p>

          </div>
        ) : (
          <div className="form-section">

            <h2>Create an account</h2>

            <form onSubmit={handleRegister}>

              <div className="form-group">
                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  placeholder="Create password"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  minLength={6}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Create Account
              </button>

            </form>

            <p className="switch-text">
              Already have an account? Choose Login below.
            </p>

          </div>
        )}

        {/* Login and Register buttons are now at the bottom */}
        <div className="buttons bottom-buttons">

          <button
            className={page === 'login' ? 'active' : ''}
            onClick={() => setPage('login')}
          >
            Login
          </button>

          <button
            className={page === 'register' ? 'active' : ''}
            onClick={() => setPage('register')}
          >
            Register
          </button>

        </div>

        <footer>
          © 2026 Sahara Engineering Group LTD
        </footer>

      </div>
    </div>
  );
}
