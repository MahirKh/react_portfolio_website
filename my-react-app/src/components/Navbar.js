import { Link } from "react-router-dom";
import React from "react";
import "../styles/Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const hamburgerIcon = <FontAwesomeIcon icon={faBars} />;
const exitIcon = <FontAwesomeIcon icon={faTimes} />;

const Navbar = () => {
  const [state, setState] = useState({
    name: hamburgerIcon,
    clicked: false,
  });
  const name = state.name;
  const clicked = state.clicked;
  console.log({ name });

  function handleClick() {
    if (clicked === false) {
      setState({ name: exitIcon, clicked: true });
    }
    if (clicked) {
      setState({ name: hamburgerIcon, clicked: false });
    }
    console.log({ name });
  }

  return (
    <div className="NavbarItems">
      <h1 className="navbar-logo">
        React
        <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon">
        <i onClick={handleClick}>{state.name}</i>
      </div>
      <div className={state.clicked ? "nav-menu active" : "nav-menu"}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
