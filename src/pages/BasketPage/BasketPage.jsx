import { useState } from "react";
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
  
  return (
    <>
      <div className="progress-bar">
        <img
          className="progress-bar__image"
          src={progressBar1}
          alt="Progress Bar - Step 1 - Basket"
        />
      </div>
      <div className="title">My Shopping Basket (1)</div>
      <div className="checkout-item">
        <div>
        <img
          className="checkout-item__image"
          src={item}
          alt="item information"
        />
        </div>
        <div className="quantity-wrapper">
        <div className="quantity">
            <img className="quantity__addicon" src={addIcon} alt="Add Icon"/>
            <p className="quantity__number">1</p>
            <img className="quantity__minusicon"src={minusIcon} alt="Minus Icon"/>
        </div>
        <div className="quantity__price">CA$8.00</div>
      </div>
      </div>
      <div className="add-item">
        <img className="add-item__image" src={addItem} alt="Add another item" />
      </div>
      <div className="subtotal">
        <div className="subtotal__text">Subtotal</div>
        <div className="subtotal__number">CA$8.00</div>
      </div>
      <div className="tax">
        <div className="tax__text">Tax</div>
        <div className="tax__number">CA$0.96</div>
      </div>
      <div className="total">
        <div className="total__text">Total</div>
        <div className="total__number">CA$9.68</div>
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
