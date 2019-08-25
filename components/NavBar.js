import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import "./NavBar.css";

const NavBar = props => {
  const [toggleMenue, setToggleMenue] = useState(false);

  const toggleBarClick = () => {
    setToggleMenue(!toggleMenue);
  };

  const navMenu = props.navMenu.map((menu, index) => {
    if (index === 0) {
      return null;
    } else {
      return (
        <Link href={menu.link} key={index}>
          <a className="w3-bar-item w3-button w3-wide">
            {" "}
            <span className="nav-top-icon">
              <FontAwesomeIcon icon={menu.icon} />
            </span>
            {menu.label}
          </a>
        </Link>
      );
    }
  });

  const dropDownNavMenue = toggleMenue ? (
    <div className="w3-bar-block w3-hide-large w3-hide-medium">{navMenu}</div>
  ) : null;

  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-card" id="nav-bar">
        <Link href={props.navMenu[0].link}>
          <a className="w3-bar-item w3-button w3-wide">
            {props.navMenu[0].brand}{" "}
          </a>
        </Link>

        <div className="w3-right w3-hide-small">{navMenu}</div>
        <a
          href="#"
          className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
          onClick={toggleBarClick}
        >
          <FontAwesomeIcon icon="bars" />
        </a>
        {dropDownNavMenue}
      </div>
    </div>
  );
};

export default NavBar;
