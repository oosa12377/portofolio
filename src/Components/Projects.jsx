import React from "react";
import { motion } from "framer-motion";

import { Row, Col, Image, Button } from "react-bootstrap";
import { BoxArrowUpRight, Github } from "react-bootstrap-icons";

import project1 from "../assets/images/project1.jpeg";
import youtube from "../assets/images/youtube_clone.jpeg";
import twitter from "../assets/images/twitter.png";

const projectsData = [
  {
    image: project1,
    title: "Prayers Tracker",
    description:
      "This application aims to simplify the process of tracking prayer times by combining accurate data, real-time updates, and location awareness into a single, accessible platform.",
    year: 2024,
    role: "Front-End Developer",
    liveDemoUrl: "https://oosa12377.github.io/PrayerTimes/",
    githubUrl: "https://github.com/oosa12377/PrayerTimes",
  },
  {
    image: twitter,
    title: "Twitter Clone",
    description:
      "A lightweight, front-end Twitter clone built purely with HTML and CSS, mimicking the core visual elements of the Twitter (now X) interface. This project focuses on replicating the responsive design and layout.",
    year: 2024,
    role: "Front-End Developer",
    liveDemoUrl: "https://oosa12377.github.io/Twitter_clone/",
    githubUrl: "https://github.com/oosa12377/Twitter_clone",
  },
  {
    image: youtube,
    title: "YouTube Clone",
    description:
      "A front-end replication of the YouTube interface, created using HTML and CSS. This project showcases skills in building complex, responsive layouts by cloning the familiar design of YouTube's video feed and sidebar.",
    year: 2024,
    role: "Front-End Developer",
    liveDemoUrl: "https://oosa12377.github.io/youtube_clone/",
    githubUrl: "https://github.com/oosa12377/youtube_clone",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Projects() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {projectsData.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Row className="align-items-center my-5 text-center text-md-start">
            <Col md={6} lg={5} order={{ md: index % 2 === 0 ? 1 : 2 }}>
              <Image src={project.image} alt={project.title} rounded fluid />
            </Col>

            <Col md={6} lg={7} order={{ md: index % 2 === 0 ? 2 : 1 }}>
              <h3 className="fw-bold">{project.title}</h3>
              <p className="text-muted">{project.description}</p>

              <div className="mt-4">
                <p className="mb-1">
                  <strong>Year:</strong> {project.year}
                </p>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
              </div>

              <div className="d-flex gap-3 mt-4 justify-content-center justify-content-md-start">
                <Button
                  href={project.liveDemoUrl}
                  target="_blank"
                  variant="outline-light"
                >
                  Live Demo <BoxArrowUpRight className="ms-2" />
                </Button>
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  variant="outline-secondary"
                >
                  See on GitHub <Github className="ms-2" />
                </Button>
              </div>
            </Col>
          </Row>
          {index < projectsData.length - 1 && <hr className="my-5" />}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Projects;
