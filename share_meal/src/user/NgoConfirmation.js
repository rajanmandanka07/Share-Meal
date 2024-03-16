import React from 'react';
import { Link } from 'react-router-dom';

function NgoConfirmation() {
    const submissionTime = new Date(); // Get the current time

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className="card text-center">
                <div className="card-body">
                    <h2 className="card-title">Thank you for Donation.</h2>
                    <p className="card-text">NGO Contact Details:</p>
                    <p className="card-text">Email: example@example.com</p>
                    <p className="card-text">Phone: +1234567890</p>
                    <p className="card-text">Submitted Time: {submissionTime.toLocaleString()}</p>
                    <h5><p className="card-text">Our NGO will collect the food items. Your support is greatly appreciated!</p></h5>
                    <blockquote className="blockquote mt-4">
                        <h4><b className="mb-0">"Generosity consists not the sum given, but the manner in which it is bestowed."</b></h4>
                    </blockquote>
                    <Link to="/confirmed" className="btn btn-success mx-3">Confirm Delivery</Link>
                    <Link to="/fooddetails" className="btn btn-danger">Cancel Request</Link>
                </div>
            </div>
        </div>
    );
}

export default NgoConfirmation;
