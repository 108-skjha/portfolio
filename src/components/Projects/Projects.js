import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/ems.jpeg";
import chatify from "../../Assets/Projects/letschat.jpeg";
import bitsOfCode from "../../Assets/Projects/game.png";

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
              title="Let's Chat"
              description="A real-time Chat-Based Web Application using the MERN stack, providing seamless and secure messaging between users. The backend is powered by MongoDB Atlas, ensuring reliable and scalable data storage, while Node.js and Express handle server-side operations efficiently. Users can register, log in, create chat rooms, and exchange messages instantly through a responsive React frontend. The application includes authentication, message history, and smooth UI/UX for enhanced user engagement across devices."
              ghLink="https://github.com/108-skjha/Let-s-Chat" 

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Zombie game"
              description="2D game using Python and the Pygame library, offering a fun and interactive gameplay experience. It features smooth controls, engaging mechanics, and supports keyboard, mouse, and audio interaction. The game runs efficiently on Windows systems with basic hardware requirements, making it accessible and easy to play by simply installing Pygame and executing the main script."
              ghLink="https://github.com/108-skjha/Zombie-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Examination management system"
              description="Web-Based Examination System using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL. It includes secure Admin and Student panels, allowing the admin to create and manage exams while students can log in and take tests with automatic result generation for a seamless assessment experience. The system ensures smooth navigation, responsive design, and efficient data handling for online examinations."
              ghLink="https://github.com/108-skjha/Examination-management-system-v2.0"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
