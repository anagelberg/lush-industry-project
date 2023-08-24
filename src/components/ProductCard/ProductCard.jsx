import "./ProductCard.scss";
import heartIcon from "../../assets/icons/heart-dark.svg";

import Button from "../Button/Button";

function ProductCard({ img, type, name, description, price, weight }) {
  return (
    <div className="product">
      <img className="product__heart" src={heartIcon} alt="" />
      <img className="product__img" src={img} alt="" />
      <p className="product__type">{type}</p>
      <h4 className="product__name">{name}</h4>
      <p className="product__description">{description}</p>
      <p className="product__price">
        <span className="product__cost">{price}</span> / {weight}
      </p>
      <Button text="add to cart" />
    </div>
  );
}

export default ProductCard;
