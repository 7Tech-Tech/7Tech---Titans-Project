import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  /*useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      const storedUserType = localStorage.getItem('userType');
      const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      setUserType(storedUserType);
      setUserInfo(storedUserInfo);
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (type, info) => {
    setUserType(type);
    setUserInfo(info);
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userType', type);
    localStorage.setItem('userInfo', JSON.stringify(info));
    if (type === 'guest') {
      window.location.href = './home'; // Redirect guest to home after login/signup
    } else {
      window.location.href = './OwnerDashboard'; // Redirect owner to their dashboard
    }
  };*/

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userType');
    localStorage.removeItem('userInfo');
    setLoggedIn(false);
    setUserInfo(null);
    setUserType('');
    setShowProfileDropdown(false);
    window.location.href = './guesthome'; // Redirect to GuestHome on logout
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const redirectTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="nav">
      <img src="./logo.jpg" alt="Logo" />
      <ul>
        {!loggedIn && <CustomLink href="/guesthome"><i className="fa-solid fa-house"></i>GuestHome</CustomLink>}
        {loggedIn && <CustomLink href="/home"><i className="fa-solid fa-house"></i>Home</CustomLink>}
        {!loggedIn && <CustomLink href="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</CustomLink>}
        {userType === 'owner' && <CustomLink href="/OwnerDashboard"><i className="fa-regular fa-user"></i>OwnerDashboard</CustomLink>}
        <CustomLink href="/about"><i className="fa-solid fa-address-card"></i>About</CustomLink>
      </ul>
      <div className="search-bar">
        <input type="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="profile" onClick={handleProfileClick}>
        <div className="profile-content">
          <div className="profile-icon">
            {loggedIn ? (userInfo ? userInfo.name.charAt(0) : 'U') : 'G'}
          </div>
          <span className="profile-name">
            {loggedIn ? userInfo.name : 'Guest'}
          </span>
        </div>
        <div className={`dropdown ${showProfileDropdown ? 'show' : ''}`}>
          {loggedIn ? (
            <>
              <p>Username: {userInfo.username}</p>
              <p>Email: {userInfo.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <p onClick={() => redirectTo('/login')}>Login</p>
              <p onClick={() => redirectTo('/login')}>Sign Up</p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>{children}</a>
    </li>
  );
}
