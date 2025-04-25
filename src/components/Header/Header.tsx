import "./Header.scss";

import { useState } from "react"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div className="header">
      <Container>
        <Navbar expand="lg">
          <Container fluid className="p-0">
            <Navbar.Brand href="#Home">Portfolio</Navbar.Brand>

            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShow}/>

            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Portfolio
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link href="#About" onClick={handleClose}>About</Nav.Link>
                  <Nav.Link href="#Experience" onClick={handleClose}>Experience</Nav.Link>
                  <Nav.Link href="#Education" onClick={handleClose}>Education</Nav.Link>
                  <Nav.Link href="#Contacts" onClick={handleClose}>Contacts</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default Header;
