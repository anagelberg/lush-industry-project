import "./Navbar.scss";
import logo from "../../assets/logo/Lush_logo_cropped.png";
import heart from "../../assets/icons/heart-light.svg";
import shoppingCart from "../../assets/icons/shopping-cart.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__top">
        <img
          className="navbar__logo"
          src={logo}
          alt="lush logo"
          onClick={() => (window.location.href = "https://www.lush.ca/en/home")}
        />
        <input
          className="navbar__search"
          placeholder="I am looking for..."
        ></input>
        {/* welcome component -- maybe an svg*/}
        <div>
          <img className="navbar__icon" src={heart} />
          <img className="navbar__icon" src={shoppingCart} />
        </div>
      </div>
      <div className="navbar__bottom">
        <a href="https://www.lush.ca/en/home">Our Impact</a>
        <a href="https://www.lush.ca/en/home">New</a>
        <a href="https://www.lush.ca/en/home">Bath and Shower</a>
        <a href="https://www.lush.ca/en/home">Skincare</a>
        <a href="https://www.lush.ca/en/home">Hair</a>
        <a href="https://www.lush.ca/en/home">Body</a>
        <a href="https://www.lush.ca/en/home">Gifts</a>
        <a href="https://www.lush.ca/en/home">Scent</a>
        <a href="https://www.lush.ca/en/home">Makeup</a>
        <a href="https://www.lush.ca/en/home">Discover</a>
        <a href="https://www.lush.ca/en/home">Lush Collections</a>
      </div>
    </nav>
  );
}

export default Navbar;
