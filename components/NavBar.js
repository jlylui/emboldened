import "./NavBar.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavBar = props => {
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

            {/* <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Download</p>
                </NavLink> */}

          </Link>
        </li>
      );
    }
  });

  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <nav className={"navbar navbar-expand-lg bg-white fixed-top " + navbarColor} expand="lg" color="info">
        <div className="container">
          <div className="navbar-translate">
            <Link href={props.navMenu[0].link}>
              <a className="navbar-brand" id="navbar-brand">
                <img
                  src={`../${props.navMenu[0].logo}`}
                  alt=""
                  width="30"
                  height="30"
                />{" "}
                {props.navMenu[0].brand}
              </a>
            </Link>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <ul className="navbar-nav">
              {navMenu}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
