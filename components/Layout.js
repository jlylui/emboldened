import "../static/bootstrap.min.css";
import "../static/theme.css";
import "../static/animate.css";
import "./Layout.css";

import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Link from "./Link";

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
  faPlus,
  faCross,
  faComment
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
  faPlusSquare,
  faCross,
  faComment
);

const navMenu = [
  {
    brand: "Emboldened",
    label: "home",
    link: "/",
    icon: "home",
    logo: "/static/img/Website-logo-black_on_white-circular-crop.png"
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
    label: "Register for Conference",
    link: "/#register",
    icon: "envelope"
  },
  {
    label: "Get Involved",
    link: "/get-involved",
    icon: "handshake"
  },
  {
    label: "Faith Statement",
    link: "/faith-statement",
    icon: "cross"
  }
];

const socialMedia = [
  {
    icon: ["fab", "linkedin"],
    link: ""
  },
  {
    icon: ["fab", "instagram"],
    link: ""
  },
  {
    icon: ["fab", "youtube"],
    link: ""
  }
];

const assetPrefix = process.env.ASSET_PREFIX;

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Emboldened</title> {/*todo make dynamic */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`${assetPrefix}/static/img/website_logo___black_on_white_circular_crop_jNC_icon.ico`}
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <NavBar navMenu={navMenu} />

      <div
        className={`${props.banner.className} page-header clear-filter `}
        filter-color="black">
        <div
          className="page-header-image"
          data-parallax="true"
          style={{
            backgroundImage: `url("${assetPrefix}${props.banner.image}")`
          }}></div>
        <div className="container">
          <div className="content-center">
            <h1 className="h1-seo">{props.banner.title}</h1>
            {props.banner.subTitle !== "" ? (
              <h3 className="h3-seo">
                {props.banner.subTitle}
                <Link href={`${props.banner.linkRef}`}>
                  <a className="nav-link">{props.banner.linkLabel}</a>
                </Link>
              </h3>
            ) : null}
          </div>
        </div>
      </div>
      <div className="main">{props.children}</div>
      <Footer socialMedia={socialMedia} />
    </div>
  );
};

export default Layout;
