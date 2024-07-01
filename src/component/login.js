import React, { useState } from 'react';

export default function LoginForm() {
  const [userType, setUserType] = useState('user'); // Default to 'user' type
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [ownerExists, setOwnerExists] = useState(false); // Track if an owner already exists

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic
    // Here you would typically send a request to your backend for authentication
    // For demo purposes, we're using a simulated login logic
    if (userType === 'user' || userType === 'owner') {
      setLoggedIn(true);
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
    // Here you would typically send a request to your backend to create a new account
    // For demo purposes, we're using a simulated signup logic
    if (userType === 'owner') {
      if (ownerExists) {
        alert('An owner already exists. Only one owner is allowed.');
        return;
      } else {
        setOwnerExists(true);
      }
    }
    setShowSignUp(false);
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
      return (
        <div>
          <h1>Owner Dashboard</h1>
          {/* Your Owner dashboard or page */}
        </div>
      );
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
