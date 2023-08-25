//See receipt button
import checkout1 from "../../assets/page-shots/checkout.svg";
import { useNavigate } from "react-router";
function Checkout1() {
  const navigate = useNavigate();
  return (
    <div
      className="page-screenshot"
      onClick={() => {
        navigate("/checkout2");
      }}
    >
      <img src={checkout1} alt="" />
    </div>
  );
}

export default Checkout1;
