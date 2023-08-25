//See receipt button
import "./Scan.scss";
import Webcam from "react-webcam";
import cameraCircle from "../../assets/icons/camera-circle.svg";
import productPopup from "../../assets/icons/product-popup.svg";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
// import shoppingCart from "../../assets/icons/shopping-cart-black.svg";
import { useState } from "react";

const videoConstraints = {
  facingMode: { exact: "environment" }, //toggle "user" "environment"
  // width: 428,
  // height: 926,
};

function Scan() {
  const [numScans, setNumScans] = useState(0);
  const [showProduct, setShowProduct] = useState(false);

  const simulateScan = () => {
    setNumScans((prev) => prev + 1);
    setShowProduct(true);
    setTimeout(() => {
      setShowProduct(false);
    }, 1500);
  };

  return (
    <>
      <div className="webcam__container">
        <Webcam videoConstraints={videoConstraints} />
        <div className="webcam__overlay" onClick={() => simulateScan()}>
          <ShoppingCart quantity={numScans} />
          <div className="webcam__center-imgs">
            <img className="webcam__circle" src={cameraCircle} alt="" />
            <img
              className={
                showProduct
                  ? "webcam__popup"
                  : "webcam__popup webcam__popup--hide"
              }
              src={productPopup}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Scan;
