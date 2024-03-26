import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I am <span className="purple"> Fotini Papadopoulou</span> from <span className="purple"> Athens, Greece.</span>
            <br />
            I am currently pursuing my MSc in <span className="purple">Artificial Intelligence</span> at Radboud University in Nijmegen, Netherlands.
            <br />
            I have completed my BSc in <span className="purple">Computer Science</span> at Athens University of Economics and Business in Greece.
            <br />
            I have 2 years of experience in <span className="purple">software development</span> at Stonebranch and Openbet in Athens, Greece.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Crafting
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Ideas often kindle each other, like electrical sparks."{" "}
          </p>
          <footer className="blockquote-footer">Friedrich Engels</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
