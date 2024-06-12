import React from "react";
import { Card } from "react-bootstrap";
import "./Recomended.css";

function Recomended() {
  return (
    <div className="container-fluid recomended">
      <div className="row w-75 mx-auto my-5">
        <div className="h1 text-dark bg-warning text-center w-auto mx-auto p-2 mb-5 ">
          Recommended
        </div>
        <div className="recommended-all d-flex w-100 mx-auto">
          <div className="col-4">
            <Card className="text-center mx-2 p-3">
              <Card.Body>
                <Card.Title className="fw-bold my-2">Regular Class</Card.Title>
                <div className="h2 fw-bold my-2">
                  <sup className="h6 fw-bold">$</sup>249
                </div>
                <button variant="primary" className="w-100 fw-bold my-2 p-2">
                  Select Plan
                </button>
                <Card.Text className="my-2" style={{ color: "#6c6c6c" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in nunc
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-start">
                <ul className="ms-3 mt-2">
                  <li className="ps-3">Lorem ipsum</li>
                  <li className="ps-3">dolor sit amet</li>
                  <li className="ps-3">consectetur</li>
                  <li className="ps-3">adipiscing</li>
                  <li className="ps-3">elit Donec</li>
                  <li className="ps-3">in nunc</li>
                </ul>
              </Card.Footer>
            </Card>
          </div>
          <div className="col-4">
            <Card className="text-center mx-2 p-3">
              <Card.Body>
                <Card.Title className="fw-bold my-2">Premium Class</Card.Title>
                <div className="h2 fw-bold my-2">
                  <sup className="h6 fw-bold">$</sup>249
                </div>
                <button variant="primary" className="w-100 fw-bold my-2 p-2">
                  Select Plan
                </button>
                <Card.Text className="my-2" style={{ color: "#6c6c6c" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in nunc
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-start">
                <ul className="ms-3 mt-2">
                  <li className="ps-3">Lorem ipsum</li>
                  <li className="ps-3">dolor sit amet</li>
                  <li className="ps-3">consectetur</li>
                  <li className="ps-3">adipiscing</li>
                  <li className="ps-3">elit Donec</li>
                  <li className="ps-3">in nunc</li>
                </ul>
              </Card.Footer>
            </Card>
          </div>
          <div className="col-4">
            <Card className="text-center mx-2 p-3">
              <Card.Body>
                <Card.Title className="fw-bold my-2">Luxury Class</Card.Title>
                <div className="h2 fw-bold my-2">
                  <sup className="h6 fw-bold">$</sup>249
                </div>
                <button variant="primary" className="w-100 fw-bold my-2 p-2">
                  Select Plan
                </button>
                <Card.Text className="my-2" style={{ color: "#6c6c6c" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in nunc
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-start">
                <ul className="ms-3 mt-2">
                  <li className="ps-3">Lorem ipsum</li>
                  <li className="ps-3">dolor sit amet</li>
                  <li className="ps-3">consectetur</li>
                  <li className="ps-3">adipiscing</li>
                  <li className="ps-3">elit Donec</li>
                  <li className="ps-3">in nunc</li>
                </ul>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recomended;
