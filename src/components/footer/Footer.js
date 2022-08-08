import "./Footer2.css";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="containerFooter">
      {/* //contacto */}
      <div className="containerFooter-up ">
        <div className="cgi box center">
          <h1 style={{ margin: "2%" }}>CGI CONSULTING INC.</h1>
          <img
            src="/img/Logo-removebg-previewEdited.png"
            alt="Logo CGI."
            className="logo"
          />
          <p>Consultoría y Gestión para la Inversión en Infraestructura</p>
        </div>
        {/* //redes */}

        <div className="contactUs box center">
          <h2 style={{ margin: "2%" }}>Contáctenos</h2>
          <div className="email">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-icon"
            ></FontAwesomeIcon>
            <p>info@cgiconsulting.co</p>
          </div>
          <div className="iconsRedes">
            <a
              href="https://www.facebook.com/cgiconsultinginc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookF}
                className="nav-icon"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.linkedin.com/company/cgiconsulting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="nav-icon"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://www.instagram.com/cgiconsulting/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="nav-icon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
        {/* //servicios */}
        <div className="services_footer box">
            <h2 style={{ margin: "2%" }}>Servicios</h2>
        <ul>
          <li>
            <Link to="/servicios">Ingeniería y Construcción</Link>
          </li>
          <li>
            <Link to="/servicios">Energía y Automatización</Link>
          </li>
          <li>
            <Link to="/servicios">Bienes Raíces Industriales</Link>
          </li>
          <li>
            <Link to="/servicios">Suministro y Automatización</Link>
          </li>
          <li>
            <Link to="/servicios">Gestión de Riesgos y Seguros</Link>
          </li>
        </ul>
      </div>
      </div>

      {/* <div className="line"></div> */}
      <div className="containerFooter-down">
        <div className="copyright">
          Copyright 2022.Todos los derechos reservados.
        </div>
      </div>

    </div>
  );
};

export default Footer;
