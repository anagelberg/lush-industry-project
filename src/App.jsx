import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoreLandingPage from "./pages/StoreLandingPage/StoreLandingPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreLandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
