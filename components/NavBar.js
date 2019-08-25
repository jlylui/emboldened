import Link from "next/link";

const NavBar = props => (
  <div className="w3-top">
    <div className="w3-bar w3-white w3-card" id="nav-bar">
      <Link href="/">
        <a className="w3-bar-item w3-button w3-wide"> Home</a>
      </Link>
      <Link href="/about">
        <a className="w3-bar-item w3-button w3-wide"> About</a>
      </Link>
    </div>
  </div>
);

export default NavBar;
