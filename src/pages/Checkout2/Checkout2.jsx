//See receipt button
import checkout2 from "../../assets/page-shots/checkout2.svg";
import { useNavigate } from "react-router";
function Checkout2() {
  const navigate = useNavigate();
  return (
    <div
      className="page-screenshot"
      onClick={() => {
        navigate("/apple");
      }}
    >
      <img src={checkout2} alt="" />
    </div>
  );
}

export default Checkout2;
