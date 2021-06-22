import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeaderNav from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";


const About = () => {
  return (
    <>
    <HeaderNav />
    <Jumbotron />
    <Container>
      <Row>
        <Col>
         <h1>About</h1>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default About;
