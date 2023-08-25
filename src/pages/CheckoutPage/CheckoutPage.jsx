// Google Pay, Apple pay buttons
// Or Make QR
// Or enter credit card info

import { useNavigate } from "react-router";

function CheckoutPage() {
  const navigate = useNavigate();
  return <p onClick={() => navigate("/modal1")}>Checkout page</p>;
}

export default CheckoutPage;
