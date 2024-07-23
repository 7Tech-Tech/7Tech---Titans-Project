import React, { useEffect, useState } from 'react';
import Home from "./component/home";
import GuestHome from "./component/guesthome";
import Login from "./component/login";
import Payment from "./component/payment";
import OwnerDashboard from "./component/OwnerDashboard";
import About from "./component/about";
import Navbar from "./component/Navbar";

import "./component/login.css";
import "./component/style.css";

function App() {
  const [component, setComponent] = useState(<GuestHome />);

  useEffect(() => {
    const path = window.location.pathname;

    switch (path) {
      case "/home":
        setComponent(<Home />);
        break;
      case "/guesthome":
        setComponent(<GuestHome />);
        break;
      case "/login":
        setComponent(<Login />);
        break;
      case "/payment":
        setComponent(<Payment />);
        break;
      case "/OwnerDashboard":
        setComponent(<OwnerDashboard />);
        break;
      case "/about":
        setComponent(<About />);
        break;
      default:
        // Redirect to GuestHome if no valid path is found
        setComponent(<GuestHome />);
        break;
    }
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {component}
      </div>
    </>
  );
}

export default App;
