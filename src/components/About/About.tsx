import "./About.scss";
import { getImagesUrl } from "../../utils/getImageUrl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <Container className="about">
      <h2 className="about__img-text mb-3">About me</h2>
      <Row className="justify-content-between align-items-center">
        <Col xs={12} xl={5} className="about__img d-none d-xl-block">
          <img
            className="about__img-img"
            src={getImagesUrl("about.png")}
            alt="about"
          />
        </Col>

        <Col xs={12} xl={6} className="about__content">
          {[
            {
              icon: "cursor.svg",
              title: "Frontend Developer",
              text: "I create responsive sites with React. My code is cleaner than my desk!",
            },
            {
              icon: "computer.svg",
              title: "Backend Developer",
              text: "I build fast back-end systems. My APIs are faster than my morning coffee!",
            },
            {
              icon: "site.svg",
              title: "Telegram Bot Developer",
              text: "I build Telegram bots with Python. My bots have fewer bugs than my last coffee break!",
            },
          ].map((item, index) => (
            <div className="about__content-block" key={index}>
              <div className="about__content-img">
                <img src={getImagesUrl(item.icon)} alt={item.title} />
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
