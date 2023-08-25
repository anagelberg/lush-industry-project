import "./ShoppingCart.scss";
import shoppingIcon from "../../assets/icons/shopping-cart-black.svg";
import shoppingCircle from "../../assets/icons/black-circle.svg";
import { useNavigate } from "react-router";

function ShoppingCart({ quantity }) {
  const navigate = useNavigate();

  return (
    <div className="cart" onClick={() => navigate("/basket")}>
      <img src={shoppingIcon} alt="" />
      <img
        className={quantity > 0 ? "cart__quant" : "cart__quant--hidden"}
        src={shoppingCircle}
        alt=""
      />
    </div>
  );
}

export default ShoppingCart;
