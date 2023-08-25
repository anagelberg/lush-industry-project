//See receipt button
import modal1 from "../../assets/page-shots/modal1.svg";
import "./Modal1.scss";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import CharInput from "../../components/CharInput/CharInput";
import { useState } from "react";

function Modal1() {
  const navigate = useNavigate();

  const totalInputs = 6;
  const [index, setIndex] = useState(1);

  const handleChange = (value, index) => {
    console.log(`Input ${index} changed to ${value}`);
    setIndex((prev) => prev + 1);
  };

  return (
    <div className="absolute-container">
      <div className="page-screenshot">
        <img src={modal1} alt="" />
        <div className="password-container">
          {Array.from({ length: totalInputs }).map((_, index) => (
            <CharInput
              key={index}
              index={index}
              onChange={handleChange}
              total={totalInputs}
            />
          ))}
        </div>

        <div className="button-absolute">
          <Button
            disabled={index <= totalInputs}
            modifier="--secondary"
            text="proceed to checkout"
            onClick={() => {
              navigate("/checkout1");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal1;
