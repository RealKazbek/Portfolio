import "./Experience.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import html from "../../../assets/img/svg/html.svg";
import css from "../../../assets/img/svg/css.svg";
import bootstrap from "../../../assets/img/svg/bootstrap.svg";
import javascript from "../../../assets/img/svg/javascript.svg";
import typescript from "../../../assets/img/svg/typescript.svg";
import react from "../../../assets/img/svg/react.svg";

import school from "../../../assets/img/svg/school.svg";
import iitu from "../../../assets/img/svg/iitu.svg";

// ICONS FROM https://icons8.com
{
  /* <a target="_blank" href="https://icons8.com/icon/20909/html-5">HTML 5</a> иконка от <a target="_blank" href="https://icons8.com">Icons8</a> */
}

function Experience() {
  return (
    <Container className="experience">
      <Row>
        <Col>
          <h2 className="experience__title mb-4">Experience</h2>
        </Col>
        <Col className="educationFirst">
          <h2 className="experience__title mb-4">Education</h2>
        </Col>
      </Row>

      <Row className="justify-content-between align-items-start">
        <Col xs={12} xl={5} className="experience__skills" id="Experience">
          {[
            {
              icon: html,
              title: "HTML5",
            },
            {
              icon: css,
              title: "CSS3",
            },
            {
              icon: bootstrap,
              title: "Bootstrap",
            },
            {
              icon: javascript,
              title: "JavaScript",
            },
            {
              icon: typescript,
              title: "TypeScript",
            },
            {
              icon: react,
              title: "React",
            },
          ].map((item, index) => (
            <div className="experience__content-block" key={index}>
              <div className="experience__content-img">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="experience__content-text">
                <p className="experience__content-title">{item.title}</p>
              </div>
            </div>
          ))}
        </Col>
        <Col xs={12} xl={6} className="experience__education" id="Education">
          <h2 className="experience__title mb-4 educationSecond">Education</h2>

          {[
            {
              icon: school,
              title: "State Educational Institution Secondary school №149",
              date: "2012 - 2023",
            },
            {
              icon: iitu,
              title: "International Information Technologies University",
              date: "2023 - 2027",
            },
          ].map((item, index) => (
            <div className="about__content-block" key={index}>
              <div className="about__content-img">
                <img src={item.icon} alt={item.title} />
              </div>
              <div className="about__content-text">
                <h2 className="about__content-text">{item.title}</h2>
                <p className="about__content-subtitle">{item.date}</p>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
