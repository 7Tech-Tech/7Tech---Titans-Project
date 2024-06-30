import React, { useState } from 'react';

export default function LoginForm() {
  const [userType, setUserType] = useState('student'); // Default to 'student' type
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic
    if (userType === 'student' || userType === 'owner') {
      setLoggedIn(true);
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleBackToLogin = () => {
    setShowSignUp(false);
  };

  if (showSignUp) {
    return (
      <>
        <section className="back">
          <img src="./woood.jpg" alt="" />

          <div className="heros-container">
            <div className="form-left2">
              <form>
                <h1>Registration</h1>
                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="text" placeholder="Full Name" required />
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="text" placeholder="Username" required />
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="email" placeholder="Email" required />
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="number" placeholder="Phone Number" required />
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="password" placeholder="Password" required />
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="password" placeholder="Confirm Password" required />
                    <i class="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>
                <label><input type="checkbox"/>I hereby affirm that the information above is true and correct.</label>
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
    if (userType === 'student') {
      return (
        <div>
          <h1>Welcome Student!</h1>
          {/* Your student dashboard or page */}
        </div>
      );
    } else if (userType === 'staff') {
      return (
        <div>
          <h1>Welcome Owner!</h1>
          {/* Your owner dashboard or page */}
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
                    value="student"
                    checked={userType === 'student'}
                    onChange={() => setUserType('student')}
                    required
                  />{' '}
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="staff"
                    checked={userType === 'staff'}
                    onChange={() => setUserType('staff')}
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
