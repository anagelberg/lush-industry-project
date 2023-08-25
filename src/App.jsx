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
    location.pathname === "/scan" ? setShowNav(false) : setShowNav(true);
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
      </Routes>
    </div>
  );
}

export default App;
