import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [userType, setUserType] = useState("user");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ngoName, setNgoName] = useState("");
  const [address, setAddress] = useState(""); // Added address state
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const areas = [
    "Shyamnagar",
    "Railnagar",
    "Bhagvatipara",
    "Morbi Road",
    "IMA",
    "Kabirvan",
    "Ram Park",
    "Redcross Sadar",
    "Redcross Ramnathpara",
    "Nana Mauva",
    "Aambedkarnagar",
    "Vijayplot",
    "Nandanvan",
    "Mavdi",
    "Narayannagar",
    "AHMP",
    "Champakbhai Vora",
    "Hudko",
    "Pranami Chowk",
    "New Raghuvir",
    "Kothariya",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
  
    // Validation logic...
  
    // Set form errors...
  
    // If no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            selectedArea,
            phoneNumber,
            address,
            userType,
          }),
        });
  
        if (response.ok) {
          console.log('User signed up successfully');
          navigate('/');
        } else {
          const data = await response.json();
          throw new Error(data.error || 'Signup failed');
        }
      } catch (error) {
        console.error('Error signing up user:', error);
        // Handle error, e.g., setFormErrors({ signup: error.message });
      }
    } else {
      setFormErrors(errors);
    }
  };
  

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="container-fluid bg-dark text-white py-5" style={{minHeight: '100%'}}>
      <div className="container">
        <h1 className="mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userType" className="form-label">
              Are you a user or NGO?
            </label>
            <select
              id="userType"
              name="userType"
              className="form-select"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="user">User</option>
              <option value="ngo">NGO</option>
            </select>
          </div>

          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-control mb-3 ${
              formErrors.name ? "is-invalid" : ""
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && (
            <div className="invalid-feedback">{formErrors.name}</div>
          )}

          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-control mb-3 ${
              formErrors.email ? "is-invalid" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}

          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`form-control mb-3 ${
              formErrors.password ? "is-invalid" : ""
            }`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && (
            <div className="invalid-feedback">{formErrors.password}</div>
          )}

          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={`form-control mb-3 ${
              formErrors.confirmPassword ? "is-invalid" : ""
            }`}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {formErrors.confirmPassword && (
            <div className="invalid-feedback">{formErrors.confirmPassword}</div>
          )}

          <label htmlFor="area" className="form-label">
            Area:
          </label>
          <div className="dropdown mb-3">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedArea ? selectedArea : "Select Area"}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {areas.map((area, index) => (
                <li key={index} onClick={() => handleAreaSelect(area)}>
                  <button className="dropdown-item" type="button">
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {formErrors.area && (
            <div className="invalid-feedback d-block">{formErrors.area}</div>
          )}

          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className={`form-control mb-3 ${
              formErrors.phoneNumber ? "is-invalid" : ""
            }`}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {formErrors.phoneNumber && (
            <div className="invalid-feedback">{formErrors.phoneNumber}</div>
          )}

          {/* Address Field */}
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className={`form-control mb-3 ${
              formErrors.address ? "is-invalid" : ""
            }`}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {formErrors.address && (
            <div className="invalid-feedback">{formErrors.address}</div>
          )}
          <br />
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block">
              Sign Up
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => navigate("/")}
            >
              Back
            </button>
          </div>
          <p className="mt-3 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-white">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
