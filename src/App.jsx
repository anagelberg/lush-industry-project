import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
// import

function App() {
  return (
    <>
      <Navbar />

      <div className="example">
        Example Button
        <Button text="Example Button" />
      </div>

      <div className="example">
        Example Product Card
        <Button text="Example Button" />
      </div>
    </>
  );
}

export default App;
