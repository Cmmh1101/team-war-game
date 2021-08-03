import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { NavbarBrand } from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar" light expand="sm">
      <div className="container">
        <NavbarBrand href="/" className="logo-img">
          <img
            className="card-logo_1"
            src="../cards/C_of_hearts.png"
            alt="WC cards logo"
          />
          <img
            className="card-logo_2"
            src="../cards/W_of_Spades.png"
            alt="WC cards Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="d-flex justify-content-end nav-links bg-white" navbar>
            <NavItem>
              <NavLink className="text-white navigation-link mx-4" to="/home">
                Home
              </NavLink>
              <hr className="dropdown-divider d-sm-none" />
            </NavItem>
            <NavItem>
              <NavLink className="text-white navigation-link mx-4" to="/play">
                Play
              </NavLink>
              <hr className="dropdown-divider d-sm-none" />
            </NavItem>
            <NavItem>
              <NavLink className="text-white navigation-link mx-4" to="/rules">
                Rules
              </NavLink>
              <hr className="dropdown-divider d-sm-none" />
            </NavItem>
            <NavItem>
              <NavLink
                className="text-white navigation-link mx-4"
                to="/contactus"
              >
                Contact
              </NavLink>
              <hr className="dropdown-divider d-sm-none" />
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
