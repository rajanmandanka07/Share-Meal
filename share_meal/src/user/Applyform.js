import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Applyform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    // Set form errors
    setFormErrors(errors);

    // If no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      // Handle form submission logic here
      console.log("Form submitted!");
      navigate("/homepage");
    } else {
      console.log("Form validation failed!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-white py-5" style={{minHeight: '100vh'}}>
      <div className="container">
        <h1 className="mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
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
            disabled
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
            disabled
          />
          {formErrors.email && (
            <div className="invalid-feedback">{formErrors.email}</div>
          )}

          <label htmlFor="selectedArea" className="form-label">
            Selected Area:
          </label>
          <input
            type="text"
            id="selectedArea"
            name="selectedArea"
            className="form-control mb-3"
            value={selectedArea || ""}
            disabled
          />

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
            disabled
          />
          {formErrors.phoneNumber && (
            <div className="invalid-feedback">{formErrors.phoneNumber}</div>
          )}

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
            disabled
          />
          {formErrors.address && (
            <div className="invalid-feedback">{formErrors.address}</div>
          )}

          <br />
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              onClick={() => navigate("/homepage")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Applyform;
