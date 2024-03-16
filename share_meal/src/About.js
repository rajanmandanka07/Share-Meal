import React from 'react';
import AppNavbar from './mainnav';

function AboutUs() {
    return (
        <>
            <AppNavbar />
            <div className="bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
                <div className="container p-5 bg-light rounded text-dark">
                    <h2 className="text-center mb-4">About Us</h2>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <p className="lead text-center">
                                At ShareMeal, we are driven by a shared vision of leveraging technology to address societal challenges and make a meaningful impact. Founded with the mission of tackling food insecurity, our project serves as a platform for facilitating food donations from generous individuals and organizations to those in need.
                            </p>
                            <p className="lead text-center">
                                Our team, comprised of passionate individuals from diverse backgrounds, is dedicated to creating innovative solutions that foster community engagement and empower individuals to contribute to the common good. With a focus on transparency, accountability, and community collaboration, we strive to build a network where kindness and compassion thrive.
                            </p>
                            <p className="lead text-center">
                                By harnessing the power of technology and human connection, we aim to create a world where no one goes hungry. Join us on this journey as we work towards a future where everyone has access to nutritious food and no food is wasted.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
