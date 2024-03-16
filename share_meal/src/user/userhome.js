import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import img from "./background.jpeg";
import AppNavbar from "./navbar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <body className="bg-dark text-white">
        <AppNavbar />
        <Container fluid className="p-0 bg-dark text-white mt-3" id="home">
          <div className="content">
            <h2 className="my-3 text-center">
              Make a life-saving difference with your gift right now!
            </h2>
            <p className="text-justify mx-2">
              Around 67 million tonnes of food is wasted in India every year
              which has been valued at around `92,000 crores; enough to feed all
              of Bihar for a year
            </p>
            <p className="text-justify mx-2">
              Annually, close to 21 million metric tonnes of wheat rots in
              India; a figure that is equal to Australia’s total annual
              production According to the BMC, Mumbai generates close to 9,400
              metric tonnes of solid waste per day, from which 73% is food,
              vegetable, and fruit waste, while only 3% is plastic. The garbage
              dumps in Mumbai are as tall as five or six storey buildings Delhi
              generates around 9000 metric tonnes of waste per day, with the
              country’s largest landfill located in East Delhi. This landfill is
              70 acres vast and contains close to 12 million tonnes of waste
              that are as high as 50 feet.
            </p>
            <div className="mt-4 text-center">
              <ScrollLink to="home" smooth duration={500}>
                <Link to="./fooddetails" className="text-decoration-none">
                  <Button variant="primary" className="btn-lg me-3">
                    Donate Now
                  </Button>
                </Link>
              </ScrollLink>
              <ScrollLink to="home" smooth duration={500}>
                <Link to="/apply" className="text-decoration-none">
                  <Button variant="success" className="btn-lg">
                    Register
                  </Button>
                </Link>
              </ScrollLink>
            </div>
          </div>
          <div className="banner">
            <img
              className="d-block w-100 my-5"
              src={img}
              style={{ objectFit: "cover" }}
              alt="Banner"
            />
          </div>
        </Container>
      </body>
    </>
  );
}

export default HomePage;
