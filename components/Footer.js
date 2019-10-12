import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../components/ContactForm";

const date = new Date().getFullYear();

const Footer = props => {
  const [contactModal, setContactModal] = useState(false);
  const handleContactModal = () => {
    setContactModal(!contactModal);
  };

  const footerNavMenue = [
    {
      label: "Donation ",
      link: "#donation",
      icon: ""
    },
    {
      label: "Contact Us",
      link: "#contact",
      icon: "",
      handler: handleContactModal
    }
  ];

  const followUs = props.socialMedia.map((link, index) => (
    <li className="list-inline-item" key={index}>
      <a href={link.link} className="footer-icon">
        <FontAwesomeIcon icon={link.icon} size="2x" />
      </a>
    </li>
  ));

  const footerNav = footerNavMenue.map((navLink, index) => (
    <li key={index}>
      <a href={navLink.link} onClick={navLink.handler}>
        {navLink.label}
      </a>
    </li>
  ));
  return (
    <>
      <ContactForm
        show={contactModal}
        handleContactModal={handleContactModal}
      />
      <footer className="footer footer-default">
        <div className="container text-center">
          <p className="text-muted">&copy;{date} Emboldened. Follow us</p>
          <ul className="list-inline">{followUs}</ul>
          <div style={{ paddingTop: "20px" }}>
            <nav>
              <ul>
                {footerNav}
                {/* <li>
                  <a onClick={handleContactModal}>Click Me</a>
                </li> */}
              </ul>
            </nav>
            <div className="copyright">
              Made with <FontAwesomeIcon icon={"heart"} /> and{" "}
              <FontAwesomeIcon icon={"coffee"} /> by Emboldened Team in Sydney
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
