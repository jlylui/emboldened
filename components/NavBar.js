import { useState, useEffect } from "react";
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
              {/* {" "}
              <span className="nav-top-icon">
                <FontAwesomeIcon icon={menu.icon} />
              </span> */}
              {menu.label}
            </a>
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
      <nav className={"navbar navbar-expand-lg bg-primary fixed-top " + navbarColor} expand="lg" color="info">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand"
              href="https://demos.creative-tim.com/now-ui-kit-react/#/index?ref=nukr-index-navbar"
              target="_blank"
              id="navbar-brand"
            >
              Now UI Kit React
            </a>
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
