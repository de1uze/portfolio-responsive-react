import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodlify from "../../Assets/Projects/foodlify.png";
import gym from "../../Assets/Projects/gym.png";
import netflix from "../../Assets/Projects/netflix.png";
import zen from "../../Assets/Projects/zen.png";
import travelgo from "../../Assets/travelgo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodlify}
              isBlog={false}
              title="Foodlify"
              description="College Capstone Project | A Realtime recipe and dish suggestion built on React and Mongo DB.Uses Python machine learning collaboration for recipe."
              ghLink="https://github.com/de1uze/Foodlify"
              demoLink="https://foodlify-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zen}
              isBlog={false}
              title="E-commerce Website"
              description="An ecommerce website made using react             "
              ghLink="https://github.com/de1uze/eKart"
              demoLink="https://ekart-17la.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelgo}
              isBlog={false}
              title="Travel Go (travelling website)"
              description="A responsive travel/tourism website built using reactJS Tutorials based"
              ghLink="https://github.com/de1uze/travelgo"
              demoLink="https://travelgo-dzq5.onrender.com"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix clone"
              description="Tutorial Based Netflix clone. Fetching data for Movie API              "
              ghLink="https://github.com/de1uze/Ntflx-clone"
              demoLink="https://ntflx-clone-ivory.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym-rat Website"
              description="A website for gym. Displaying trainers, pricing, environment made using React              "
              ghLink="https://github.com/de1uze/Gym-rat"
              demoLink="https://gym-rat-deploy.onrender.com/"
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
