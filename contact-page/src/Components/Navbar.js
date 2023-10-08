// Import React and CSS styles for the Navbar component
import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Define the Navbar component
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
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
        <div className="hamburger" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      {show ? (
        <div className="slider">
          <div>Services</div>
          <div>Managed Security Services</div>
          <div>Initiatives</div>
          <div>About Us</div>
          <div>Blog</div>
          <div className="lastDiv">
            <div className="navButton1">
              <button>CONTACT US</button>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
              <AiOutlineClose />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

// Export the Navbar component for use in other parts of the application
export default Navbar;
