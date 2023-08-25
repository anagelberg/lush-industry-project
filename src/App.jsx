import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import StoreLandingPage from "./pages/StoreLandingPage/StoreLandingPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import { useState, useEffect } from "react";
import Scan from "./pages/Scan/Scan";
import BasketPage from "./pages/BasketPage/BasketPage";
import ApplePay from "./pages/ApplePay/ApplePay";
import Modal1 from "./pages/Modal1/Modal1";
import Modal2 from "./pages/Modal2/Modal2";
import Checkout1 from "./pages/Checkout1/Checkout1";
import Checkout2 from "./pages/Checkout2/Checkout2";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const [showNav, setShowNav] = useState(true);
  const location = useLocation();

  useEffect(() => {
    [
      "/scan",
      // "/modal1",
      // "/modal2",
      // "/checkout1",
      // "/checkout2",
      // "/apple",
      // "/confirmation",
    ].includes(location.pathname)
      ? setShowNav(false)
      : setShowNav(true);
  }, [location.pathname]);

  return (
    <div className="app__content">
      <div className={showNav ? "show" : "hide"}>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<StoreLandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/modal1" element={<Modal1 />} />
        <Route path="/modal2" element={<Modal2 />} />
        <Route path="/checkout1" element={<Checkout1 />} />
        <Route path="/checkout2" element={<Checkout2 />} />
        <Route path="/apple" element={<ApplePay />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default App;
