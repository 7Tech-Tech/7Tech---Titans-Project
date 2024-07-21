import React, { useState } from 'react';

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false); // Assume a user is not logged in initially
  const [userType, setUserType] = useState(''); // Track the user type
  const [userInfo, setUserInfo] = useState(null); // Track user information
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogin = (type, info) => {
    setUserType(type);
    setUserInfo(info);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserInfo(null);
    setShowProfileDropdown(false); // Close dropdown on logout
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
        <CustomLink href="/guesthome"><i className="fa-solid fa-house"></i>GuestHome</CustomLink>
        <CustomLink href="/home"><i className="fa-solid fa-house"></i>Home</CustomLink>
        <CustomLink href="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</CustomLink>
        <CustomLink href="/payment"><i className="fa-solid fa-user-plus"></i>Payment</CustomLink>
        <CustomLink href="/OwnerDashboard"><i className="fa-regular fa-user"></i>OwnerDashboard</CustomLink>
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
