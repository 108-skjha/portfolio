import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Shrawan kumar jha </span>
            from Madhubani, Bihar, India.
            <br />
            I am currently a final year student of Bachelor of science in information technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> watching movies and listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing poetry
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming designs into interactive magic!"{" "}
          </p>
          <footer className="blockquote-footer">Shrawan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
