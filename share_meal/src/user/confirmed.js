import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Confirmation() {
    const [rating, setRating] = useState(null);

    const handleRatingChange = (event) => {
        setRating(parseInt(event.target.value));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
            <div className="card text-center shadow" style={{minWidth: '80vh'}}>
                <div className="card-body">
                    <h2 className="card-title">Food Parcel Confirmation</h2>
                    <h5 className="card-text">Thank you for your order!</h5>
                    <h5 className="card-text">Your food parcel has been confirmed.</h5>
                    <div className="d-flex justify-content-between">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className="form-group">
                        <input
                            type="range"
                            className="form-control-range"
                            id="rating"
                            min="1"
                            max="10"
                            value={rating || ''}
                            onChange={handleRatingChange}
                            style={{ width: '100%' }}
                        />
                    </div>
                    <Link to="/homepage" className="btn btn-primary m-3">Submit</Link>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
