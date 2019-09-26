import "../static/bootstrap.min.css";
import "../static/theme.css";
import "./Layout.css";

import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faUsers,
  faVideo,
  faEnvelope,
  faHandsHelping,
  faHandshake,
  faUserPlus,
  faGift,
  faBars,
  faSpinner,
  faHeart,
  faCoffee,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  fab,
  faHome,
  faUsers,
  faVideo,
  faEnvelope,
  faHandsHelping,
  faHandshake,
  faUserPlus,
  faGift,
  faBars,
  faSpinner,
  faHeart,
  faCoffee,
  faPlus,
  faPlusSquare
);

const navMenu = [
  {
    brand: "Emboldened",
    label: "home",
    link: "/",
    icon: "home",
    logo: "../static/img/jl-icon-19144-light-square.png"
  },
  {
    label: "About Us",
    link: "/about",
    icon: "users"
  },
  {
    label: "Behind the Scenes",
    link: "/behind-scenes",
    icon: "video"
  },
  {
    label: "Contact Us",
    link: "/#contact",
    icon: "envelope"
  },
  {
    label: "Get Invovled",
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
        <title>Emboldened</title> {/*todo make dynamic */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar navMenu={navMenu} />

      <div
        className={`${props.banner.className} page-header clear-filter `}
        filter-color="black"
      >
        <div
          className="page-header-image"
          data-parallax="true"
          style={{
            backgroundImage: `url(${props.banner.image})`
          }}
        ></div>
        <div className="container">
          <div className="content-center">
            <h1 className="h1-seo">{props.banner.title}</h1>
            <h3 className="h3-seo">{props.banner.subTitle}</h3>
          </div>
        </div>
      </div>
      <div className="main">{props.children}</div>
      <Footer socialMedia={socialMedia} />
    </div>
  );
};

export default Layout;
