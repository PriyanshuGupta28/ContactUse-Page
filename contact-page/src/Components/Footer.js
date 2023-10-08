import React from "react";
import "./Footer.css"; // Importing the CSS file for styling
import { IoLogoTwitter } from "react-icons/io"; // Importing Twitter icon
import { FaFacebookF } from "react-icons/fa"; // Importing Facebook icon
import { BsInstagram } from "react-icons/bs"; // Importing Instagram icon

// Define the Footer component
const Footer = () => {
  return (
    <div className="footerRoot">
      {/* Root container for the footer */}
      <div className="footerSection">
        {/* First section of the footer */}
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <div className="description">
          Primefort is a global provider of IT security solutions that solve
          real business issues. Our dedicated team of security engineers offers
          solutions to customers throughout the world for securing innovations.
        </div>
      </div>
      <div className="footerSection">
        {/* Second section of the footer */}
        <div className="sectionTitle">Services</div>
        <div>Web Application Penetration Testing</div>
        <div>Mobile Application Penetration Testing</div>
        <div>Network Penetration Testing</div>
        <div>Cloud Security</div>
        <div>Compliance</div>
        <div>SOC</div>
      </div>
      <div className="footerSection">
        {/* Third section of the footer */}
        <div className="sectionTitle">About Us</div>
        <div>Our Story</div>
        <div>Our Journey</div>
        <div>Leadership Team</div>
        <div>Advisors</div>
        <div>Careers</div>
        <div>Awards</div>
      </div>
      <div className="footerSection">
        {/* Fourth section of the footer */}
        <div className="navButton">
          <button>CONTACT US</button>
        </div>
        <div className="socialLinks">
          <div className="socialIcon">
            <IoLogoTwitter /> {/* Twitter icon */}
          </div>
          <div className="socialIcon">
            <FaFacebookF /> {/* Facebook icon */}
          </div>
          <div className="socialIcon">
            <BsInstagram /> {/* Instagram icon */}
          </div>
        </div>
        <div className="sectionTitle">Headquarters</div>
        <div>
          Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai, Chennai -
          600002
        </div>
        <div className="sectionTitle">Email</div>
        <div>info@primefort.net</div>
      </div>
    </div>
  );
};

export default Footer;
