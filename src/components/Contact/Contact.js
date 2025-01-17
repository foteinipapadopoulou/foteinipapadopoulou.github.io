import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineMail, AiOutlineMessage, AiOutlineUser, AiOutlineSend, AiTwotoneEnvironment } from "react-icons/ai";
import laptopImg from "../../Assets/meeting.png";

function Contact() {
  const [form, setForm] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [validated, setValidated] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Here you can handle the form submission, like sending the form data to an API
      const formData = {
        email: form.email.value,
        name: form.name.value,
        message: form.message.value,
      };
  
      try {
        const response = await fetch('https://formcarry.com/s/mprp5IvSAS3', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) throw new Error('Network response was not ok');
        // Handle success
        const result =  response.json();
        console.log(result);
        
        alert('Form submitted successfully!');
  
        setForm({ email: '', name: '', message: '' });
        setValidated(false); // Reset validation state
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to submit the form. Please try again.');
      }
    }
    setValidated(true);
  };

  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{ padding: "10px" }}>
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "10px",
            }}
          >
            <div style={{ justifyContent: "center"}}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "10px" }}>
              <strong className="purple">CONTACT</strong>
            </h1>
            
            <p><AiTwotoneEnvironment /> 's-Hertogenbosch, Netherlands & Athens, Greece </p>
            <p><AiOutlineMail/> fotinipapad [at] outlook [dot] com</p>
             
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="formContact">
              <p style={{ fontSize: "0.9em" }}>Please fill out the form below or choose any of the other ways to contact me and I will get back to you as soon as I can.</p>
           
              <Form.Group controlId="email">
                <Form.Label><AiOutlineMail /> Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" value={form.email} onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label><AiOutlineUser /> Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter name" value={form.name} onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label> <AiOutlineMessage /> Message</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="Enter message" value={form.message} onChange={handleChange} />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
                Submit <AiOutlineSend />
              </Button>
            </Form>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
