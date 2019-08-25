import "../static/w3.css";
import NavBar from "../components/NavBar";

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
    logo: "images/jl-icon-19144-light-square.png"
  },
  {
    label: "WHO WE ARE",
    link: "#about",
    icon: "users"
  },
  {
    label: "CONFERENCE",
    link: "#conference",
    icon: "calendar-day"
  },
  {
    label: "CONTACT US",
    link: "#contact",
    icon: "envelope"
  },
  {
    label: "GET INVOLVED",
    link: "get-involved",
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

const App = () => {
  return (
    <div className="App">
      <NavBar navMenu={navMenu} />
    </div>
  );
};

export default App;
