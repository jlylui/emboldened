import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {
  const followUs = props.socialMedia.map((link, index) => (
    <li className="list-inline-item" key={index}>
      <a href={link.link} className="footer-icon">
        <FontAwesomeIcon icon={link.icon} size="2x" />
      </a>
    </li>
  ));

  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="text-muted">@Emboldened 2019. Follow us</p>
        <ul className="list-inline">{followUs}</ul>
      </div>
    </footer>
  );
};

export default Footer;
