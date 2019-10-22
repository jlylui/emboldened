import "./NavBar.css";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
import Link from "./Link";
const assetPrefix = process.env.ASSET_PREFIX;

const NavBar = props => {
  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const linkClick = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
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

  useEffect(() => {
    setIsLoading(false);
    const updateNavbarColor = () => {
      const windowHeight = window.innerHeight / 2;
      if (
        document.documentElement.scrollTop >= windowHeight ||
        document.body.scrollTop >= windowHeight
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < windowHeight ||
        document.body.scrollTop < windowHeight
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [isLoading]);
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
      <nav
        className={"navbar navbar-expand-lg bg-white fixed-top " + navbarColor}
        expand="lg"
        color="info">
        <div className="container">
          <div className="navbar-translate">
            <Link href={props.navMenu[0].link}>
              <a className="navbar-brand">
                <img
                  src={`${assetPrefix}${props.navMenu[0].logo}`}
                  alt=""
                  width="30"
                  height="30"
                />{" "}
                {props.navMenu[0].brand}
              </a>
            </Link>
            <button
              className={`navbar-toggler ${collapseOpen ? "toggled" : ""}`}
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button">
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">{navMenu}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
