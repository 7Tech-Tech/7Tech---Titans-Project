import React from 'react';


import Home from "./component/home";
import Login from "./component/login";
import SignUp from "./component/signup";
import OwnerDashboard from "./component/OwnerDashboard";
import About from "./component/about";

import "./component/login.css";
import "./component/style.css"
import Navbar from "./component/Navbar";







 function App() {
  let component
  switch  (window.location.pathname) {
    
     case "/home":
      component = <Home />
      break;
      case "/login":
      component = <Login />
      break;
      case "/signup":
      component = <SignUp />
      break;
      case "/OwnerDashboard":
      component = <OwnerDashboard />
      break;
     
      case "/about":
      component = <About />
      break;
     
  }
  return (
    <>
    <Navbar/>
    <home />
  
    
    <div>
      
    {component}
    </div>
  
    
    </>
  
   
  );
}


export default App;