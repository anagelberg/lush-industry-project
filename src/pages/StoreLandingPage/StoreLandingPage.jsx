//TODO: Button to open camera /scan item

// Camera will open on this page
// When camera closes, link to Product Page
import Webcam from "react-webcam";
import { useState } from "react";
import "./StoreLandingPage.scss";
import Button from "../../components/Button/Button";
import robsonPic from "../../assets/images/Robson-image.jpg";
import underdashImage from "../../assets/images/promo-underdash.svg";
import locationIcon from "../../assets/icons/lush-icon-storelocator.svg";
import cameraIcon from "../../assets/icons/camera.svg";
import { useNavigate } from "react-router";

function StoreLandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="title">
        <div className="title__text">
          welcome to your <br /> digital shopping basket
        </div>
        <img
          className="title__image"
          src={underdashImage}
          alt="Underdash Image"
        />
      </div>

      <div className="store-location">
        <img
          className="store-location__image"
          src={locationIcon}
          alt="Location Icon"
        />
        <div className="store-location__text">Lush Cosmetics Robson St.</div>
      </div>

      <div className="hero">
        <img
          className="hero__image"
          src={robsonPic}
          alt="Picture of Robson Lush Store"
        />
      </div>

      <div className="button">
        <Button
          onClick={() => navigate("/scan")}
          text="SCAN your lush product"
          icon={cameraIcon}
        />
      </div>
    </>
  );
}

export default StoreLandingPage;
