import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import ProductCard from "./components/ProductCard/ProductCard";
import Dropdown from "./components/Dropdown/Dropdown";

/* example data */
import exampleImg from "./assets/images/exampleImage.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="examples">
        <div className="example">
          Example Button
          <Button text="Example Button" />
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
