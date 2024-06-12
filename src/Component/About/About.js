import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { AboutData } from "./Data/AboutData";

function About() {
  return (
    <div className="conteiner-fluid about ">
      <div className="row about-text d-flex h-100 mx-5">
        <div className="left-side col-8 d-flex my-5 pt-5">
          {AboutData.map((curElm, index) => {
            return (
              <div className="col-4" key={index}>
                <Card className="me-2">
                  <Card.Img className="w-100" variant="top" src={curElm.img} />
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold pb-3 mb-3 about-title">
                      {curElm.title}
                    </Card.Title>
                    <Card.Text className="h6">{curElm.bodyText}</Card.Text>
                    <div className="mt-3 learn-More">Learn More...</div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
          {/* <div className="col-4">
            <Card className="mx-1">
              <Card.Img className="w-100" variant="top" src={Rectangle9} />
              <Card.Body className="p-3">
                <Card.Title>Security Guard or Anti Thief</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  in nunc pellentesque tristique ornare. Vitae tellus erat quis
                  turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sit ut eu morbi quam interdum dolor ut.
                </Card.Text>
                <div className="mt-3">Learn More</div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <Card.Img className="w-100" variant="top" src={Rectangle9} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card>
              <Card.Img className="w-100" variant="top" src={Rectangle9} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div> */}
        </div>
        <div className=" col-4 my-5 pt-5 text-light">
          <div className="right-side text-end">
            <div className="h1 fw-bold text-uppercase">About us</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.maecenas
              rhoncus nunc rhoncus mauris l
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
