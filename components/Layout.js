import "./Layout.css";
import "../static/bootstrap.min.css";

import NavBar from "./NavBar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUsers,
  faCalendarDay,
  faEnvelope,
  faHandsHelping,
  faHandshake,
  faUserPlus,
  faGift,
  faBars,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faHome,
  faUsers,
  faCalendarDay,
  faEnvelope,
  faHandsHelping,
  faHandshake,
  faUserPlus,
  faGift,
  faBars,
  faSpinner
);

const navMenu = [
  {
    brand: "EMBOLDENED",
    label: "HOME",
    link: "/",
    icon: "home",
    logo: "../static/img/jl-icon-19144-light-square.png"
  },
  {
    label: "WHO WE ARE",
    link: "/about",
    icon: "users"
  },
  {
    label: "CONFERENCE",
    link: "/conference",
    icon: "calendar-day"
  },
  {
    label: "CONTACT US",
    link: "/#contact",
    icon: "envelope"
  },
  {
    label: "GET INVOLVED",
    link: "/get-involved",
    icon: "handshake"
  }
];

const socialMedia = [
  {
    icon: ["fab", "facebook"],
    link: ""
  },
  {
    icon: ["fab", "instagram"],
    link: ""
  },
  {
    icon: ["fab", "youtube"],
    link: ""
  },
  {
    icon: ["fab", "twitter"],
    link: ""
  },
  {
    icon: ["fab", "pinterest"],
    link: ""
  }
];

const Layout = props => {
  return (
    <div>
      <NavBar navMenu={navMenu} />
      <div className="page-header clear-filter">
        <header
          className="page-header-image"
          style={{
            backgroundImage: `url(${props.banner.image})`
          }}
        >
          <div className="container">
            <div className="text-center brand">
              <h1 className="banner-h1">{props.banner.title}</h1>
              <h4>{props.banner.subTitle}</h4>
            </div>
          </div>
        </header>
      </div>
      <div className="container" id="main">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
