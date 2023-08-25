//See receipt button
import apple from "../../assets/page-shots/applepay.svg";
import { useNavigate } from "react-router";

function ApplePay() {
  const navigate = useNavigate();

  return (
    <div
      className="page-screenshot"
      onClick={() => {
        navigate("/confirmation");
      }}
    >
      <img src={apple} alt="" />
    </div>
  );
}

export default ApplePay;
