import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NgoApply() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [validIncomeProof, setValidIncomeProof] = useState("");
  const [validIdProof, setValidIdProof] = useState("");
  const [address, setAddress] = useState("");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};

    if (!validIncomeProof) {
      errors.validIncomeProof = "Valid Income Proof is required";
    }
    if (!validIdProof) {
      errors.validIdProof = "Valid ID Proof is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted!");
      navigate("/homepage");
    } else {
      console.log("Form validation failed!");
    }
  };

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  return (
    <div className="container-fluid bg-dark text-white py-5">
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
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
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

export default NgoApply;
