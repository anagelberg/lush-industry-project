//TODO: Button to open camera /scan item

// Camera will open on this page
// When camera closes, link to Product Page
import Webcam from "react-webcam";
import { useState } from "react";
import Button from "../../components/Button/Button";

// const videoConstraints = {
//   facingMode: { exact: "environment" },
// };

function StoreLandingPage() {
  //   const [showWebcam, setShowWebCam] = useState(false);

  return (
    <>
      <Button
        //   onClick={() => setShowWebCam(true)}

        text="Scan item"
      />
      {/* <div className={showWebcam ? "webcam" : "webcam webcam--hidden"}></div> */}
    </>
  );
}

export default StoreLandingPage;
