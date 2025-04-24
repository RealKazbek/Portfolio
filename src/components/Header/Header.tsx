import "./Header.scss";

import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const sections = ["About", "Experience", "Projects", "Contacts"];
    const scrollPosition = window.scrollY + 100;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (
        el &&
        el.offsetTop <= scrollPosition &&
        el.offsetTop + el.offsetHeight > scrollPosition
      ) {
        setActiveLink(id);
        break;
      }
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="header">
      <Navbar expand="lg">
        <Container fluid className="p-0">
          <Navbar.Brand href="#">Portfolio</Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Portfolio
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                {["About", "Experience", "Projects", "Contacts"].map(
                  (section) => (
                    <Nav.Link
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={activeLink === section ? "active" : ""}
                    >
                      {section}
                    </Nav.Link>
                  )
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
