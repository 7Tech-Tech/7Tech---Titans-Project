import React, { useState } from 'react';
import OwnerDashboard from './OwnerDashboard'; // Adjust path as per your project structure

export default function LoginForm() {
  const [userType, setUserType] = useState('user'); // Default to 'user' type
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [ownerExists, setOwnerExists] = useState(false); // Track if an owner already exists

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic
    if (userType === 'user' || userType === 'owner') {
      if (userType === 'owner' && ownerExists) {
        alert('An owner already exists. Only one owner is allowed.');
        return;
      }
      setLoggedIn(true);
      // Redirect based on user type
      if (userType === 'owner') {
        window.location.href = '/owner-dashboard'; // Redirect to OwnerDashboard
      } else {
        window.location.href = '/home'; // Redirect to Home page for users
      }
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleBackToLogin = () => {
    setShowSignUp(false);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Simulate sign-up logic
    if (userType === 'owner') {
      if (ownerExists) {
        alert('An owner already exists. Only one owner is allowed.');
        return;
      } else {
        setOwnerExists(true); // Allow sign up and mark owner as existing
      }
    }
    setShowSignUp(false);
    // Redirect based on user type
    if (userType === 'owner') {
      window.location.href = '/owner-dashboard'; // Redirect to OwnerDashboard
    } else {
      window.location.href = '/home'; // Redirect to Home page for users
    }
  };

  if (showSignUp) {
    return (
      <>
        <section className="back">
          <img src="./woood.jpg" alt="" />

          <div className="heros-container">
            <div className="form-left2">
              <form onSubmit={handleSignUpSubmit}>
                <h1>Registration</h1>

                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="user"
                      checked={userType === 'user'}
                      onChange={() => setUserType('user')}
                      required
                    />{' '}
                    User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="owner"
                      checked={userType === 'owner'}
                      onChange={() => setUserType('owner')}
                      required
                    />{' '}
                    Owner
                  </label>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="text" placeholder="Full Name" required />
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="text" placeholder="Username" required />
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="email" placeholder="Email" required />
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="number" placeholder="Phone Number" required />
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="password" placeholder="Password" required />
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="password" placeholder="Confirm Password" required />
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>

                <label>
                  <input type="checkbox" /> I hereby affirm that the information above is true and correct.
                </label>
                <button type="submit" className="btn">SignUp</button>

                <div className="register-link">
                  <p>
                    Already have an account?{' '}
                    <a href="#" onClick={handleBackToLogin}>
                      Back to Login
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div className="form-right">
              <div className="come">
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (loggedIn) {
    if (userType === 'user') {
      return (
        <div>
          <h1>User Dashboard</h1>
          {/* Your User dashboard or page */}
        </div>
      );
    } else if (userType === 'owner') {
      // Check if an owner exists to allow access to OwnerDashboard
      if (ownerExists) {
        return <OwnerDashboard />;
      } else {
        return <h1>You are not permitted to access this page.</h1>;
      }
    }
  }

  // Default login form
  return (
    <>
      <section className="back">
        <img src="./woood.jpg" alt="" />
        <div className="heros-container">
          <div className="form-left">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>

              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="user"
                    checked={userType === 'user'}
                    onChange={() => setUserType('user')}
                    required
                  />{' '}
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="owner"
                    checked={userType === 'owner'}
                    onChange={() => setUserType('owner')}
                  />{' '}
                  Owner
                </label>
              </div>

              <div className="inputs-box">
                <input type="text" placeholder="Email" required />
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="inputs-box">
                <input type="password" placeholder="Password" required />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Keep Me Login
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="btn">
                Login
              </button>
              <div className="register-link">
                <p>
                  Don't have an account?{' '}
                  <a href="#" onClick={handleSignUpClick}>
                    Create Account
                  </a>
                </p>
              </div>

              <div className="btn2">
                <h3 className="line">Login With</h3>
              </div>

              <div className="social">
                <i className="fa-brands fa-google"></i>
              </div>
            </form>
          </div>

          <div className="form-right">
            <div className="come">
              <h1>Welcome Back!</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
