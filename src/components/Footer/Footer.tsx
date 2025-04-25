import "./Footer.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// ICONS FROM
// <a target="_blank" href="https://icons8.com/icon/16318/github">GitHub</a> иконка от <a target="_blank" href="https://icons8.com">Icons8</a>
import telegram from "../../../assets/img/telegram.svg";
import instagram from "../../../assets/img/instagram.svg";
import github from "../../../assets/img/github.svg";

function Footer() {
  return (
    <div id="Contacts" className="contacts">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} xl={5} className="contacts__text">
            <h2>Contact</h2>
            <p>Slide into my inbox like it's a DMs party!</p>
          </Col>
          <Col xs={12} xl={6} className="contacts__content">
            {[
              {
                icon: telegram,
                title: "t.me/RealKazbek",
                link: "https://t.me/RealKazbek",
              },
              {
                icon: instagram,
                title: "instagram.com/RealKazbek",
                link: "http://instagram.com/RealKazbek",
              },
              {
                icon: github,
                title: "github.com/RealKazbek",
                link: "https://github.com/RealKazbek",
              },
            ].map((item, index) => (
              <div className="contacts__content-block" key={index}>
                <div className="contacts__content-img">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="contacts__content-text">
                  <h2 className="contacts__content-title"><a href={item.link} target="_blank">{item.title}</a></h2>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
