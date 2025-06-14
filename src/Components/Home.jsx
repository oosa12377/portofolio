import { motion } from "framer-motion";

import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

import Projects from "./Projects";

import profile from "../assets/images/profile.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function Home() {
  return (
    <Container fluid="md" className="py-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <Row
          id="home"
          className="align-items-center justify-content-center min-vh-100 text-center text-md-start"
        >
          <Col md={7}>
            <motion.h1 variants={itemVariants} className="display-2 fw-bolder">
              HI, I AM <br />
              OSAMA MOHAMED.
            </motion.h1>
            <motion.p variants={itemVariants} className="lead text-muted my-4">
              A Sydney based front-end developer passionate about building
              accessible and user friendly websites.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="d-flex gap-3 justify-content-center justify-content-md-start"
            >
              <Button
                href="#connect"
                size="lg"
                variant="success"
                style={{
                  backgroundColor: "#d3e97a",
                  border: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                CONTACT ME
              </Button>
              <a
                href="https://www.linkedin.com/in/%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%81%D8%B6%D9%8A%D9%84-61625719a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin color="#d3e97a" size={48} />
              </a>
              <a
                href="https://github.com/oosa12377"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color="#d3e97a" size={48} />
              </a>
            </motion.div>
          </Col>
          <Col md={5} className="mt-5 mt-md-0">
            <motion.div variants={itemVariants}>
              <Image
                src={profile}
                alt="profilePhoto"
                rounded
                fluid
                style={{ maxHeight: "600px" }}
              />
            </motion.div>
          </Col>
        </Row>
      </motion.div>

      <hr className="my-5" />

      <section id="projects">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-4 fw-bold">Featured Projects</h2>
            <p className="lead text-muted">
              Here are some of the selected projects that showcase my passion
              for front-end development.
            </p>
          </Col>
        </Row>
        <Projects />
      </section>

      <hr className="my-5" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Container as="section" id="about-snippet" className="py-5">
          <Row className="align-items-center">
            <Col md={5}>
              <h2 className="display-4 fw-bold">About Me</h2>
            </Col>
            <Col md={7}>
              <h3 className="fw-light">Hello, I'm Osama Mohamed...</h3>
              <p className="text-muted">
                I have experience in HTML, CSS, JavaScript, React...
              </p>
              <Button as={Link} to="/about" variant="outline-light">
                More About Me
              </Button>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <hr className="my-5" />
    </Container>
  );
}

export default Home;
