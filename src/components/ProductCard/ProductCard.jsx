import "./ProductCard.scss";
import heartIcon from "../../assets/icons/heart-dark.svg";
import Button from "../Button/Button";

function ProductCard({ img, type, name, dscription, price, weight }) {
  return (
    <div className="product">
      <img className="product" src={img} alt="" />
      <p className="product">{type}</p>
      <h4 className="product">{name}</h4>
      <p className="product">{description}</p>
      <p className="product">
        <span>{price}</span>/{weight}
      </p>
      <Button />
    </div>
  );
}
