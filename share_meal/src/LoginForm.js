import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = {};

        // Validation logic
        if (!email.trim()) {
            errors.email = "Email is required";
        }
        if (!password.trim()) {
            errors.password = "Password is required";
        }

        // Set form errors
        setFormErrors(errors);

        // If no errors, proceed with form submission
        if (Object.keys(errors).length === 0) {
            try {
                // Make a POST request to the login endpoint
                const response = await fetch('http://localhost:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.status === 200) {
                    // If login is successful, get user data from response
                    const userData = await response.json();
                    const { name, address } = userData;

                    // Store user data in cookies
                     Cookies.set('name', name);
                    Cookies.set('address', address);
                    // Redirect to homepage
                    navigate('/homepage');
                } else if(response.status === 200){
                    // If login fails, display error message
                   alert('Invalid ID Pass');
                }else if(response.status === 203){
                    navigate("/ngo")
                }else if(response.status === 202){
                    navigate("/admin")
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="container-fluid bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row">
                <div>
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-4">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email:</label>
                                    <input type="email" id="email" className={`form-control ${formErrors.email ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" id="password" className={`form-control ${formErrors.password ? 'is-invalid' : ''}`} value={password} onChange={(e) => setPassword(e.target.value)} required />
                                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                                </div>
                                <br/>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate('/')}>Back</button>
                                </div>
                            </form>
                            <p className="text-center mt-3">Don't have an account? <Link to="/signup" className="text-white">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
