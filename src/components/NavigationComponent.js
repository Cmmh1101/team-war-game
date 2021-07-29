import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="secondary" dark expand="sm">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="container">
            <Nav className="d-flex justify-content-between navbar" navbar>
              <NavItem>
                <NavLink className="text-white" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/">
                  Play
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" href="/">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
