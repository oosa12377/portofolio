import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";

import { Linkedin, Github, Download } from "react-bootstrap-icons";

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "TypeScript",
  "angular",
  "MySQL",
  "Node,Js",
  "PHP",
  "Laravel",
  "Git&Github",
];

const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
function About() {
  return (
    <Container className="py-5 mt-5">
      <Row className="align-items-center">
        <Col lg={5} className="text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="display-3 fw-bolder">About Me</h1>
        </Col>

        <Col lg={7}>
          <h3 className="fw-light">
            Hello, I'm Osama Mohamed, a passionate Full Stack PHP developer
            dedicated to building modern and user-friendly web applications.
          </h3>
          <p className="text-muted">
            I have experience in HTML, CSS, JavaScript, React, PHP, Laravel, and
            I'm currently expanding my skills in Angular through the ITI
            scholarship...
          </p>

          <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
            <Button
              href="https://drive.google.com/file/d/1RDjpvhX5RLEQR7FCxF8A70nxDNWA1BOU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              style={{
                backgroundColor: "#d3e97a",
                border: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <Download className="me-2" /> Download Resume
            </Button>
            <a
              href="https://www.linkedin.com/in/%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%81%D8%B6%D9%8A%D9%84-61625719a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="#d3e97a" size={40} />
            </a>
            <a
              href="https://github.com/oosa12377"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="#d3e97a" size={40} />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={4}>
          <h2 className="h1 fw-bold">My Capabilities</h2>
        </Col>

        <Col md={8}>
          <p className="text-muted">
            I am always looking to add more skills. I thrive on challenges and
            am dedicated to creating efficient, scalable, and visually appealing
            web solutions.
          </p>

          <motion.div
            className="d-flex flex-wrap gap-2"
            variants={skillsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={skillItemVariants}>
                <Badge key={index} pill bg="secondary" className="p-2 fs-6">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
