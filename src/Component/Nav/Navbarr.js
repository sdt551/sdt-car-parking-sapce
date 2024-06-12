import React, { useState } from "react";
import "./Navbarr.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Img/logo.png";
import { NavLink } from "react-router-dom";

function Navbarr() {
  const [active, setActive] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 200) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <div className="container-fluid header">
      <div className="row mx-5">
        <div className={active && "scrollBg"}>
          <div className="nav w-100  py-3 d-flex align-items-center justify-content-between g-5">
            <div>
              <img src={Logo} alt="" />
            </div>

            <Navbar expand="lg" data-bs-theme="dark" className=" py-1">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  variant="underline"
                  defaultActiveKey="/home"
                  className="ms-auto all-manu"
                >
                  <NavLink className="nav-link px-2 nav-item" to="/">
                    Home
                  </NavLink>
                  <NavLink className="nav-link px-2 nav-item" to="/shop">
                    About Us
                  </NavLink>
                  <NavLink className="nav-link px-2 nav-item" to="/cart">
                    Plan
                  </NavLink>
                  <NavLink className="nav-link px-2 nav-item" to="/about">
                    Testimonials
                  </NavLink>
                  <button className="px-2 nav-item login" to="/contact">
                    Login
                  </button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
