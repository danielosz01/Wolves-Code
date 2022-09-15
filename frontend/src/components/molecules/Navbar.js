/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
<<<<<<< HEAD
=======
import ContactForm from "../organisms/ContactForm";
>>>>>>> f534ec1a250793f84570e76977b390925f3081cd
import "bootstrap/js/dist/collapse";

//styles
import "./styles/Navbar.css";
import "./styles/NavbarModal.css";

//assets
import logoNav from "../../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <NavLink to="/" activeClassName="navbar-brand">
          <img src={logoNav} alt="" aria-hidden="true" className="navbarLogo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-icon">
            <div className="barButton" />
            <div className="barButton" />
            <div className="barButton" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/stats" className="nav-link">
                Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/testimonials" className="nav-link">
                Testimonials
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to="/recent-work" className="nav-link">
                Recent work
              </NavLink>
            </li> */}
            <li className="nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="nav-link" onClick={showModal}>
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="divModalContact">
        <button
          type="button"
          onClick={hideModal}
<<<<<<< HEAD
          className="buttonModal h-auto"
        >
          <p>close</p>
        </button>
=======
          className="buttonModalContact h-auto"
        >
          <p>close</p>
        </button>
        <ContactForm />
>>>>>>> f534ec1a250793f84570e76977b390925f3081cd
      </Modal>
    </nav>
  );
}
