import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import ProductCard from "./components/ProductCard/ProductCard";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState } from "react";
/* example data */
import exampleImg from "./assets/images/exampleImage.jpg";
import Webcam from "react-webcam";

const videoConstraints = {
  facingMode: { exact: "environment" },
};

function App() {
  const [showWebcam, setShowWebCam] = useState(false);
  return (
    <>
      <Navbar />
      <div className="examples">
        <div className="example">
          Example Button
          <Button text="Example Button" />
        </div>

        <Button onClick={() => setShowWebCam(true)} text="Scan item" />
        <div className={showWebcam ? "webcam" : "webcam webcam--hidden"}>
          <Webcam
            onClick={() => setShowWebCam(false)}
            videoConstraints={videoConstraints}
          />
        </div>

        <div className="example">
          Example Product Card
          <ProductCard
            img={exampleImg}
            type="Bubble bar"
            name="The comforter"
            description="Sweet blackcurrant bubbles"
            price="$15.00"
            weight="200g"
          />
        </div>

        <div className="example">
          Example Dropdowns
          <Dropdown
            title="Select Items"
            items={["Item 1", "Item 2", "Item 3"]}
          />
          <Dropdown
            title="Select Items"
            items={["Item 1", "Item 2", "Item 3"]}
          />
          <Dropdown
            title="Select Items"
            items={["Item 1", "Item 2", "Item 3"]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
