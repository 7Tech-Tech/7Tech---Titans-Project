import React from 'react';


function Navbar() {
   
return (
  <nav className="nav">
        <img src="./logo.jpg" alt="/" />
     <ul>
         <CustomLink href="/home"><i class="fa-solid fa-house"></i>Home</CustomLink>
        <CustomLink href="/login"><i class="fa-solid fa-right-to-bracket"></i>Login</CustomLink>
        <CustomLink href="/signup"><i class="fa-solid fa-user-plus"></i>SignUp</CustomLink>
        <CustomLink href="/payment"><i class="fa-regular fa-user"></i>Payment</CustomLink>
      <CustomLink href="/about"><i class="fa-solid fa-address-card"></i>About</CustomLink>
     </ul>
     <div className="search-bar">
    <input type="search" placeholder="Search..." />
    <button type="submit">Search</button>
  </div>
  </nav>
)

}

function CustomLink ({ href, children, ...props}) {
   const path = window.location.pathname
   return (
      <li className={path === href ? "active" : ""}>
        <li><a href={href}{...props}>{children}</a></li>

      </li>
   )

}
export default Navbar;