import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import headerImaage from "../images/image1.jpg"


const Header2 = () => {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center">
        
        <Col xs={12} md={6}>
          <div className="center-text-xs">
            <h2>Nigeria ReboAdvisor</h2>
            <p>
              Discover the vibrant landscapes and rich culture as we guide you through the intricacies of the Nigerian market.
              Our insights and advice are tailored to help both locals and foreigners navigate the business environment with ease.
              Join us to explore the opportunities that Nigeria has to offer.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
          <Image src={headerImaage} alt="Nigerian ReboAdvisor" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Header2;
