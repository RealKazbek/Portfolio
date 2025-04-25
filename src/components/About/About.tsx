import "./About.scss";

import about from "../../../assets/img/png/about.png"

import cursor from "../../../assets/img/svg/cursor.svg"
import computer from "../../../assets/img/svg/computer.svg"
import site from "../../../assets/img/svg/site.svg"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container className="about" id="About">
      <h2 className="about__img-text mb-4">About me</h2>
      <Row className="justify-content-between align-items-center">
        <Col xs={12} xl={5} className="about__img d-none d-xl-block">
          <img
            className="about__img-img"
            src={about}
            alt="about"
          />
        </Col>

        <Col xs={12} xl={6} className="about__content">
          {[
            {
              icon: cursor,
              title: "Frontend Developer",
              text: "I create responsive sites with React. My code is cleaner than my desk!",
            },
            {
              icon: computer,
              title: "Backend Developer",
              text: "I build fast back-end systems. My APIs are faster than my morning coffee!",
            },
            {
              icon: site,
              title: "Telegram Bot Developer",
              text: "I build Telegram bots with Python. My bots have fewer bugs than my last coffee break!",
            },
          ].map((item, index) => (
            <div className="about__content-block" key={index}>
              <div className="about__content-img">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="about__content-text">
                <h2 className="about__content-title">{item.title}</h2>
                <p className="about__content-subtitle">{item.text}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default About;
