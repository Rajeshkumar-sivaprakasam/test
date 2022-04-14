import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Cover from "../../assets/images/cover.png";
import "./navbar.css";
function NavBar() {
  return (
    <nav>
      <Navbar bg="light" style={{ color: "white" }} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: "60px" }}>
            <img style={{ width: "150px", height: "54px" }} src={Cover} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown
                style={{ margin: "0px 8px" }}
                title="Products"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Stocks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Investing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trading</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Crytocurrency
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link style={{ margin: "0px 8px" }} href="#action1">
                Feature
              </Nav.Link>
              <Nav.Link style={{ margin: "0px 8px" }} href="#action2">
                Benefits
              </Nav.Link>
              <Nav.Link style={{ margin: "0px 8px" }} href="#action2">
                How it works
              </Nav.Link>
              <NavDropdown
                style={{ margin: "0px 8px" }}
                title="Who are we"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Our Mission
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Our partners
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Crytocurrency
                </NavDropdown.Item>
              </NavDropdown>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "150px",
                }}
              >
                <Button
                  style={{
                    display: "block",
                    float: "left",
                    width: "120px",
                    padding: "10px 30px",
                    borderRadius: "5px",
                    border: "solid 1px black",
                    background: "white",
                    color: "black",
                    margin: "0px 10px",
                  }}
                >
                  Login
                </Button>
                <Button
                  style={{
                    display: "block",
                    float: "left",
                    width: "120px",
                    padding: "10px 30px",
                    borderRadius: "5px",
                  }}
                  variant="danger"
                >
                  Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavBar;
