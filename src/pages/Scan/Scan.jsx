//See receipt button
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: { exact: "user" }, //toggle "user" "environment"
  width: 428,
  height: 926,
};

function Scan() {
  return (
    <>
      <div className="webcam__container">
        <Webcam videoConstraints={videoConstraints} />
      </div>
    </>
  );
}
export default Scan;
