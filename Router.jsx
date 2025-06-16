import React from "react";

import { Route, Routes } from "react-router-dom";
// import Landing from "./src/Pages/Landing/Landing"
import Cart from "./src/Pages/Cart/Cart";
import Order from "./src/Pages/Orders/Order";
import Payment from "./src/Pages/Payment/Payment";
import Auth from "./src/Pages/Auth/Auth";
import Landing from "./src/Pages/Landing/Landing";
import Results from "./src/Pages/Results/Results";
import ProductDetail from "./src/Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./src/Components/ProtectedRoute/ProtectedRoute"
function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51Q51fnFjJ1fEgSapfbDSAdhtVRdNaq7lRMXtqwdeY4xSEdDk5dOL4UPRKgQDrj5pThTgnpipZAkrfkNfpWn5kLQ70084KQAdb3"
  );
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/payments"
        element={
          <ProtectedRoute
            msg={"You must log in to pay "}
            redirect={"/payments"}
          >
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={"you must log in to access your orders"}
            redirect={"/orders"}
          >
            <Order />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;
