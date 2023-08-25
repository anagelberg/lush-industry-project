//See receipt button
import checkout1 from "../../assets/page-shots/checkout.svg";
import "./Checkout1.scss";
import { useNavigate } from "react-router";
import requiredStar from "../../assets/icons/requiredStar.svg";
function Checkout1() {
  const navigate = useNavigate();
  return (
    <div className="absolute-container">
      <div className="page-screenshot">
        <img src={checkout1} alt="" />
        <div className="input-container">
          <input
            className="absolute-container__absolute"
            placeholder=""
          ></input>
          <img className="star" src={requiredStar} alt="" />
        </div>
        <div
          className="clickable"
          onClick={() => {
            navigate("/apple");
          }}
        ></div>
      </div>
    </div>
  );
}

export default Checkout1;
