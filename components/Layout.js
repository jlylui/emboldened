import "../static/bootstrap.min.css";
import "../static/theme.css"
import "./Layout.css";

import Head from 'next/head'
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
      <Head>
        <title>Emboldened</title> { /*todo make dynamic */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar navMenu={navMenu} />

      <div className="page-header clear-filter" 
      filter-color="black"
      >
        <div className="page-header-image" data-parallax="true"
        style={{
          backgroundImage: `url(${props.banner.image})`
        }}>
        </div>
        <div className="container">
          <div className="content-center brand">
            <h1 className="h1-seo">{props.banner.title}</h1>
            <h3>{props.banner.subTitle}</h3>
          </div>
        </div>        
      </div>
      
      <div className="main">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
