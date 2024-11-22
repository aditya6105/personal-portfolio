import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <h3>
            Thank you for visiting my portfolio!
            <br /> I’m always open to feedback and exciting job opportunities.
            <br />
            Let’s connect!
          </h3>
        </Row>
      </div>
    </Col>
  );
};
