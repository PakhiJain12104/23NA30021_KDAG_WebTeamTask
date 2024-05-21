import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Home from "./Home";
import Course from "./Course";
import ScrollSpy from "react-ui-scrollspy";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{ backgroundColor: "#E0E0E0" }}>
          <Navbar.Brand href="#home">Eduarmy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#course">Course</Nav.Link>
              <Nav.Link href="#enroll">Enroll Now</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
