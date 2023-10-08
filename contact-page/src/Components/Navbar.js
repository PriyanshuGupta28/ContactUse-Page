// Import React and CSS styles for the Navbar component
import React from "react";
import "./Navbar.css";

// Define the Navbar component
const Navbar = () => {
  return (
    <div className="navbarRoot">
      <div>
        <img src="" alt="Logo" />
      </div>
      <div className="navLinks">
        <div>Services</div>
        <div>Managed Security Services</div>
        <div>Initiatives</div>
        <div>About Us</div>
        <div>Blog</div>
      </div>
      <div className="navButton">
        <button>CONTACT US</button>
      </div>
    </div>
  );
};

// Export the Navbar component for use in other parts of the application
export default Navbar;
