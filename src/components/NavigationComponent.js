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
        <NavbarBrand to="/home">WC</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="d-flex justify-content-between nav-links bg-white"
            navbar
          >
            <NavItem>
              <NavLink className="text-white navigation-link" to="/">
                Home
              </NavLink>
              <hr class="dropdown-divider d-sm-none" />
            </NavItem>
            <NavItem>
              <NavLink className="text-white navigation-link" to="/play">
                Play
              </NavLink>
              <hr class="dropdown-divider d-sm-none" />
            </NavItem>
            <NavItem>
              <NavLink className="text-white navigation-link" to="/rules">
                Rules
              </NavLink>
              <hr class="dropdown-divider d-sm-none" />
            </NavItem>
            <NavItem>
              <NavLink className="text-white navigation-link" to="/contactus">
                Contact
              </NavLink>
              <hr class="dropdown-divider d-sm-none" />
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
