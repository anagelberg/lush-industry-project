import { useState } from "react";
import Button from "../../components/Button/Button";
import "./BasketPage.scss";
import item from "../../assets/images/Itemized.png"
import progressBar1 from "../../assets/images/Progress Bar.png"
import addItem from "../../assets/images/Add Another Item.png"



function BasketPage() {
    return (
        <>
        <div className="progress-bar">
        <img className="progress-bar__image" src={progressBar1} alt="Progress Bar - Step 1 - Basket"/>
        </div>
        <div className="title">My Shopping Basket (1)</div>
        <div className="checkout-item">
            <img className="checkout-item__image" src={item} alt="item information" />
        </div>
        <div className="add-item">
            <img className="add-item__image" src={addItem} alt="Add another item" />
        </div>
        <div className="subtotal">
            <div className="subtotal__text">Subtotal</div>
            <div className="subtotal__number">CA$8.08</div>
        </div>
        <div className="tax">
            <div className="tax__text">Tax</div>
            <div className="tax__number">CA$1.68</div>
        </div>
        <div className="total">
            <div className="total__text">Total</div>
            <div className="total__number">CA$9.68</div>
        </div>
        <div className="button">
        <Button text="REVIEW order with lush employee"/>
        </div>
       <div className="checkout-note">
        <div className="checkout-note__text">A LUSH employee will meet you by the store entrance</div>
       </div>


        </>


    );
}

export default BasketPage;