//See receipt button
import modal1 from "../../assets/page-shots/modal1.svg";
import { useNavigate } from "react-router";

function Modal1() {
  const navigate = useNavigate();
  return (
    <div
      className="page-screenshot"
      onClick={() => {
        navigate("/modal2");
      }}
    >
      <img src={modal1} alt="" />
    </div>
  );
}

export default Modal1;
