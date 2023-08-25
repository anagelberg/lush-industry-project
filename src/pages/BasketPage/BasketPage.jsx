import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import "./BasketPage.scss";
import item from "../../assets/images/Itemized.png";
import progressBar1 from "../../assets/images/Progress Bar.png";
import addItem from "../../assets/images/Add Another Item.png";
import { useNavigate } from "react-router";
import addIcon from "../../assets/icons/carbon_add-filled.svg"
import minusIcon from "../../assets/icons/zondicons_minus-solid.svg"


function BasketPage() {
  const navigate = useNavigate("/");
  const [quantity, setQuantity] = useState (1);
  const [price, setPrice] = useState (8.25);
  const [tax, setTax] = useState (0.99); 
  const [total, setTotal] = useState (9.24); 
const handleAdd = () => {
    setQuantity(prevQty => prevQty + 1) 
    setPrice(prePrice => prePrice+ 8.25)

}

const handleMinus = () => {
    setQuantity(quantity - 1)
    setPrice(price - 8.25) 

}

useEffect(() => {
    setTax(Number(Number(price * 0.12).toFixed(2)))
    setTotal (price + tax)
}, [price, tax])


  return (
    <>
      <div className="progress-bar">
        <img
          className="progress-bar__image"
          src={progressBar1}
          alt="Progress Bar - Step 1 - Basket"
        />
      </div>
      <div className="title">My Shopping Basket ({quantity})</div>
      <div className="checkout-item">
        <div className="checkout-item__image-wrapper">
        <img
          className="checkout-item__image"
          src={item}
          alt="item information"
        />
        </div>
        <div className="quantity-wrapper">
        <div className="quantity">
            <img onClick={handleAdd} className="quantity__addicon" src={addIcon} alt="Add Icon"/>
            <p className="quantity__number">{quantity}</p>
            <img onClick={handleMinus} className="quantity__minusicon"src={minusIcon} alt="Minus Icon"/>
        </div>
        <div className="quantity__price">CA${price}</div>
      </div>
      </div>
      <div className="add-item">
        <img className="add-item__image" src={addItem} alt="Add another item" />
      </div>
      <div className="subtotal">
        <div className="subtotal__text">Subtotal</div>
        <div className="subtotal__number">CA${price}</div>
      </div>
      <div className="tax">
        <div className="tax__text">Tax</div>
        <div className="tax__number">CA${tax}</div>
      </div>
      <div className="total">
        <div className="total__text">Total</div>
        <div className="total__number">CA${total}</div>
      </div>
      <div className="button">
        <Button
          onClick={() => navigate("/modal1")}
          text="REVIEW order with lush employee"
        />
      </div>
      <div className="checkout-note">
        <div className="checkout-note__text">
          A LUSH employee will meet you by the store entrance
        </div>
      </div>
      
    </>
  );
}

export default BasketPage;
