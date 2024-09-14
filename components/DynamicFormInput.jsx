import React, { useRef, useState } from "react";

const FormWithRef = () => {
  // UseRefs for input fields
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  // States for form data and validation messages
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });
  const [validationMsg, setValidationMsg] = useState({ username: "", password: "", email: "" });

  // Focus on a specific input when clicked
  const focusInput = (inputField) => {
    if (inputField === "username") userNameRef.current.focus();
    if (inputField === "password") passwordRef.current.focus();
    if (inputField === "email") emailRef.current.focus();
  };

  // Real-time validation for inputs
  const handleValidation = (e) => {
    const { name, value } = e.target;
    let message = "";

    if (name === "username") {
      if (value.length < 4) message = "Username must be at least 4 characters";
    } else if (name === "password") {
      if (value.length < 6) message = "Password must be at least 6 characters";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) message = "Invalid email format";
    }

    setValidationMsg({ ...validationMsg, [name]: message });
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Custom validation before submission
    if (!validationMsg.username && !validationMsg.password && !validationMsg.email) {
      alert("Form successfully submitted!");
    } else {
      alert("Please correct the errors before submitting");
    }
  };

  return (
    <div>
      <h2>Dynamic Form Input with useRef</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div>
          <label>Username:</label>
          <input
            ref={userNameRef}
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleValidation}
          />
          <button type="button" onClick={() => focusInput("username")}>Focus Username</button>
          <div style={{ color: "red" }}>{validationMsg.username}</div>
        </div>

        {/* Password Field */}
        <div>
          <label>Password:</label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleValidation}
          />
          <button type="button" onClick={() => focusInput("password")}>Focus Password</button>
          <div style={{ color: "red" }}>{validationMsg.password}</div>
        </div>

        {/* Email Field */}
        <div>
          <label>Email:</label>
          <input
            ref={emailRef}
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleValidation}
          />
          <button type="button" onClick={() => focusInput("email")}>Focus Email</button>
          <div style={{ color: "red" }}>{validationMsg.email}</div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormWithRef;
