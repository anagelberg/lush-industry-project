import "./Navbar.scss";
import logo from "../../assets/logo/logo.svg";
import heart from "../../assets/icons/heart-light.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="navbar__logo"
        src={logo}
        alt="lush logo"
        onClick={() => (window.location.href = "https://www.lush.ca/en/home")}
      />
    </nav>
  );
}

export default Navbar;
