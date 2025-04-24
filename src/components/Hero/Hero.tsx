import "./Hero.scss";

import { getImagesUrl } from "../../utils/getImagesUrl";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <Container className="hero" id="#Home">
      <Row className="align-items-center">
        <Col
          className="hero__content"
          md={{ span: 6, order: 1 }}
          xs={{ span: 12, order: 2 }}
        >
          <h1 className="hero__content-title">Hi, I’m Kazbek</h1>
          <p className="hero__content-subtitle">
            I’m a full-stack developer from Almaty, mastering React and
            TypeScript. Currently debugging my code... and my history exam
            notes!{" "}
          </p>
          <div className="hero__content-btn">
            <Button variant="outline-primary">Contact Me</Button>
          </div>
        </Col>

        <Col
          className="hero__img"
          md={{ span: 6, order: 2 }}
          xs={{ span: 12, order: 1 }}
        >
          <img src={getImagesUrl("hero.png")} alt="Hero" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
