import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";

function Connect() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmissionStatus("sending");
    emailjs
      .sendForm("service_ejs3ah5", "template_rcmjrio", form.current, {
        publicKey: "iNSxWDctuRVloxqJd",
      })
      .then(
        () => {
          setSubmissionStatus("success");

          setTimeout(() => {
            e.target.reset();
            setSubmissionStatus(null);
          }, 2000);
        },
        (error) => {
          setSubmissionStatus("error");
        }
      );
  };

  return (
    <Container as="section" id="connect" className="py-5 my-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-5 mb-md-0">
          <h2 className="display-4 fw-bold">Let's Connect</h2>
          <p className="text-muted lead">
            Say hello at{" "}
            <a href="mailto:oosa12377@gmail.com">oosa12377@gmail.com</a>. For
            more info, here's my resume:
          </p>

          <Button
            href="https://drive.google.com/file/d/1RDjpvhX5RLEQR7FCxF8A70nxDNWA1BOU/view?usp=sharing"
            target="_blank"
            variant="outline-light"
            className="my-3"
          >
            View Resume
          </Button>

          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/%D8%A3%D8%B3%D8%A7%D9%85%D8%A9-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%81%D8%B6%D9%8A%D9%84-61625719a/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
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

        <Col md={6}>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="from_name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="from_email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                name="message"
                required
              />
            </Form.Group>

            <Button
              type="submit"
              size="lg"
              style={{
                backgroundColor: "#d3e97a",
                border: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>

            {submissionStatus === "success" && (
              <Alert variant="success" className="mt-3">
                Message sent successfully!
              </Alert>
            )}
            {submissionStatus === "error" && (
              <Alert variant="danger" className="mt-3">
                Failed to send message. Please try again.
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Connect;
