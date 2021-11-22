import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoImage from "../dummyImages/mmhs.png";
import { NavBarStyles } from "../Exporter/Exporter"
export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expanded={expanded} expand="lg" variant="dark" style={{backgroundColor : "#0275D8"}}>
      <Container fluid style={{marginLeft : "2%", marginRight : "1%"}}>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoImage} alt="logo" width="70px" height="37px" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ps-3">
            <Nav.Link onClick={() => setExpanded(false)}>
              <Link to="/courses" className="nav-link"  style={NavBarStyles.navLinks}>
                Courses
              </Link>
            </Nav.Link>

            <Nav.Link onClick={() => setExpanded(false)}>
              <Link to="/activities" className="nav-link" style={NavBarStyles.navLinks}>
                Activities
              </Link>
            </Nav.Link>

            <Nav.Link onClick={() => setExpanded(false)}>
              <Link to="/library" className="nav-link"  style={NavBarStyles.navLinks}>
                Library
              </Link>
            </Nav.Link>

            <Nav.Link onClick={() => setExpanded(false)}>
              <Link to="/login" className="nav-link" style={NavBarStyles.navLinks} >
                Login
              </Link>
            </Nav.Link>

            <Nav.Link onClick={() => setExpanded(false)}>
              <Link to="/register" className="nav-link"  style={NavBarStyles.navLinks}>
                Register
              </Link>
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
