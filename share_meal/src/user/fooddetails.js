import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const DonationForm = () => {
  const [foodDetails, setFoodDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expectedPersons, setExpectedPersons] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [vegetarian, setVegetarian] = useState(true);
  const [instructions, setInstructions] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate hook
  const name = Cookies.get('name');
  const address =Cookies.get('address');
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form validation logic
    const errors = {};
    if (!foodDetails.trim()) {
      errors.foodDetails = "Food details is required";
    }
    if (!quantity.trim()) {
      errors.quantity = "Quantity is required";
    }
    if (!expectedPersons.trim()) {
      errors.expectedPersons = "Expected persons can eat is required";
    }
    if (!expiryDate.trim()) {
      errors.expiryDate = "Expected expiry date is required";
    }
    setFormErrors(errors);
  
    // If no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      try {
        // const response = await fetch('http://localhost:5000/homepage/fooddetails', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     foodDetails,
        //     quantity,
        //     expectedPersons,
        //     expiryDate,
        //     vegetarian,
        //     instructions,
        //     name, 
        //     address, 
        //   }),
        // });
  
        // if (response.ok) {
        //   console.log('Form submitted successfully');
        //   navigate('/ngoconfirmation'); // Navigate to confirmation page
        // } else {
        //   const data = await response.json();
        //   throw new Error(data.error || 'Form submission failed');
        // }
        navigate('/ngoconfirmation');
      } 
      catch (error) {
        console.error('Error submitting form:', error);
        // Handle error, e.g., setFormErrors({ submit: error.message });
      }
    }
  };
  

  return (
    <div className="container-fluid p-0 text-white bg-dark d-flex align-items-center justify-content-center min-vh-100">
      <div className="container text-dark">
        <h1 className="text-center mb-4">Donate Food and Make a Difference!</h1>
        <div className="card bg-light p-4">
          <h2 className="text-center mb-4">Enter Food Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <input type="hidden" id="name" value={Cookies.get('name')}></input>
              <input type="hidden" id="address" value={Cookies.get('address')}></input> 
              <label htmlFor="foodDetails" className="form-label">
                Food Details:
              </label>
              <input
                type="text"
                className="form-control"
                id="foodDetails"
                value={foodDetails}
                onChange={(e) => setFoodDetails(e.target.value)}
                required
              />
              {formErrors.foodDetails && (
                <div className="text-danger">{formErrors.foodDetails}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity:
              </label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
              {formErrors.quantity && (
                <div className="text-danger">{formErrors.quantity}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="expectedPersons" className="form-label">
                Expected Persons Can Eat:
              </label>
              <input
                type="number"
                className="form-control"
                id="expectedPersons"
                value={expectedPersons}
                onChange={(e) => setExpectedPersons(e.target.value)}
                required
              />
              {formErrors.expectedPersons && (
                <div className="text-danger">{formErrors.expectedPersons}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">
                Expected Expiry Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
              {formErrors.expiryDate && (
                <div className="text-danger">{formErrors.expiryDate}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Vegetarian:</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="vegetarian"
                  value="vegetarian"
                  checked={vegetarian}
                  onChange={() => setVegetarian(true)}
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="vegetarian"
                  value="non-vegetarian"
                  checked={!vegetarian}
                  onChange={() => setVegetarian(false)}
                />
                <label className="form-check-label">No</label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="instructions" className="form-label">
                Additional Instructions:
              </label>
              <textarea
                className="form-control"
                id="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link
                to="/homepage"
                className="btn btn-secondary text-decoration-none"
              >
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
