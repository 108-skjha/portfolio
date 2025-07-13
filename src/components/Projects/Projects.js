import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/tic.jpeg";
import chatify from "../../Assets/Projects/vapi1.jpeg";
import bitsOfCode from "../../Assets/Projects/poetry.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Codenixo"
              description="My project is a voice-based assistant built with Vapi that helps users discover website ideas based on their needs. It suggests suitable domains and interacts with users to understand their budget, making the website planning process easy and conversational."
              linkedinLink="https://www.linkedin.com/posts/shrawan-kumar-jha-92b3342b3_agenticai-voiceai-vapi-activity-7324039866877403136-Oz12?utm_source=share&utm_medium=member_android&rcm=ACoAAEtVZzMBndHvWuYRfpBZoWwQPJXAP3FXVOI"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Poetry hub"
              description="Poetry Hub is a creative website I designed and developed to celebrate the art of poetry. Built using HTML, CSS, and JavaScript, it offers a clean and responsive interface for users to read and enjoy timeless and original poems. The site features a sidebar clock, intuitive navigation, and a visually rich layout to enhance the reading experience."
              ghLink="https://108-skjha.github.io/poetry_web/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Tic Tac Toe Game is a fun and interactive web-based game I developed using HTML, CSS, and JavaScript. It features a simple yet engaging user interface, responsive design, and real-time game logic that allows two players to compete in classic X and O style. The project demonstrates my understanding of DOM manipulation, event handling, and logic implementation in JavaScript."
              ghLink="https://github.com/108-skjha/tic-tac-toe"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
