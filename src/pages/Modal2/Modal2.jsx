//See receipt button
import modal2 from "../../assets/page-shots/modal2.svg";
import { useNavigate } from "react-router";

function Modal2() {
  const navigate = useNavigate();
  return (
    <div
      className="page-screenshot"
      onClick={() => {
        navigate("/checkout1");
      }}
    >
      <img src={modal2} alt="" />
    </div>
  );
}

export default Modal2;
