import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pratik Shringarpure </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am a recent graduate from Nutan College of Engineering in Pune.
            <br />
            Me specializing in Front-End Development. With a strong foundation in HTML, CSS, and React, I am passionate about leveraging my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Web Application Security
            </li>
            <li className="about-activity">
              <ImPointRight /> Networking
            </li>
            <li className="about-activity">
              <ImPointRight /> Astronomy
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
