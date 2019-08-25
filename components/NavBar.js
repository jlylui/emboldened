import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = props => {
  const [toggleMenue, setToggleMenue] = useState(false);
  const [toggleBgColor, setToggleBgColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = () => {
    setToggleBgColor(true);
  };
  const toggleBarClick = () => {
    setToggleMenue(!toggleMenue);
    if (!toggleMenue && !toggleBgColor) setToggleBgColor(true);
    if (toggleMenue && toggleBgColor) setToggleBgColor(false);
  };

  const linkClick = () => {
    if (toggleMenue) {
      setToggleMenue(!toggleMenue);
    }
  };

  const navMenu = props.navMenu.map((menu, index) => {
    if (index === 0) {
      return null;
    } else {
      return (
        <li className="nav-item" key={index}>
          <Link href={menu.link}>
            <a className="nav-link" onClick={linkClick}>
              {" "}
              <span className="nav-top-icon">
                <FontAwesomeIcon icon={menu.icon} />
              </span>
              {menu.label}
            </a>
          </Link>
        </li>
      );
    }
  });

  const dropDownNavMenue = toggleMenue ? (
    <div className="navbar-collapse collapse show">
      <ul className="navbar-nav mr-auto">{navMenu}</ul>
    </div>
  ) : (
    ""
  );

  return (
    <nav
      className={
        toggleBgColor
          ? "navbar navbar-fixed-top navbar-expand-lg navbar-light white-bg "
          : "navbar navbar-fixed-top navbar-expand-lg navbar-light bg-transparent "
      }
    >
      <div className="container">
        <Link href={props.navMenu[0].link}>
          <a className="navbar-brand">
            <img
              src={`../${props.navMenu[0].logo}`}
              alt=""
              width="30"
              height="30"
            />{" "}
            {props.navMenu[0].brand}
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navBarContent">
          <ul className="navbar-nav ml-auto">{navMenu}</ul>
        </div>
        <a className="navbar-toggler" onClick={toggleBarClick}>
          <FontAwesomeIcon icon="bars" />
        </a>
        {dropDownNavMenue}
      </div>
    </nav>
  );
};

export default NavBar;
