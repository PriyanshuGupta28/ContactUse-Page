// Import necessary React components and icons
import React, { useState } from "react";
import "./Form.css"; // Import the CSS file for styling
import { IoLogoTwitter } from "react-icons/io"; // Import Twitter icon
import { FaFacebookF } from "react-icons/fa"; // Import Facebook icon
import { BsInstagram } from "react-icons/bs"; // Import Instagram icon
import { CiLocationOn } from "react-icons/ci"; // Import Location icon
import { AiOutlineMail } from "react-icons/ai"; // Import Email icon

// Define the Form component
const Form = () => {
  // Initialize state variables for form data, toast visibility, and validation errors
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    // If there are validation errors, do not submit the form
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Your custom logic for form submission here

    // After successful submission, clear the input fields
    setShowToast(true);
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setValidationErrors({});
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Render the form component
  return (
    <div className="formRoot">
      <div className="formContainer">
        <div className="formInfo">
          <div className="formDetails">
            <div className="formHeading"> Get in Touch</div>
            <div className="formDesc">
              Reach out to us. We can make something awesome together
            </div>
            <div className="formReachOut">
              <div className="formEmail">
                <div className="formIcon">
                  <AiOutlineMail />
                </div>
                <div className="formText">info@primefort.net</div>
              </div>
              <div className="formAddress">
                <div className="formIcon">
                  <CiLocationOn />
                </div>
                <div className="formText">
                  Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai,
                  Chennai - 600002
                </div>
              </div>
            </div>
          </div>
          <div className="socialLinks">
            <div className="socialIcon">
              <IoLogoTwitter />
            </div>
            <div className="socialIcon">
              <FaFacebookF />
            </div>
            <div className="socialIcon">
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className="formInput">
          <form className="formSubmit" onSubmit={handleSubmit}>
            <div>
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="email"
                  className="form__field"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="form__label">
                  Email
                </label>
              </div>
              <div className="form__group field">
                <input
                  type="text"
                  className="form__field"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <label htmlFor="name" className="form__label">
                  Subject
                </label>
              </div>
              <div className="form__group field">
                <textarea
                  type="text"
                  className="form__field"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <label htmlFor="name" className="form__label">
                  Message
                </label>
              </div>
              <div className="submitButton">
                <button type="submit">
                  CONTACT US
                  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M59.474 38.191 46.996 22.897a2.422 2.422 0 0 0-.848-.66A2.506 2.506 0 0 0 45.086 22h-4.93c-.51 0-.791.566-.48.956l10.98 13.456H4.609A.6.6 0 0 0 4 37v4.412a.6.6 0 0 0 .609.588h52.948c2.04 0 3.173-2.265 1.917-3.809Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Display success toast message on successful form submission */}
      {showToast && (
        <div className="custom-toast">
          <p>Form submitted successfully!</p>
          <button onClick={() => setShowToast(false)}>Close</button>
        </div>
      )}
      {/* Display validation error messages if any */}
      {Object.keys(validationErrors).length > 0 && (
        <div className="custom-toast">
          {Object.values(validationErrors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Form;
