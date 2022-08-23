import React from "react";
import { useGlobalContext } from "../store/cartContext";
import { useGlobalContextOfPayment } from "../store/paymentStore";
const Cart = () => {
  const { cart } = useGlobalContext();
  const { payment, isModalOpenOfPayment } = useGlobalContextOfPayment();
  return (
    <>
      This is a cart page
      {JSON.stringify(cart)}
      {JSON.stringify(payment)}
      {JSON.stringify(isModalOpenOfPayment)}
    </>
  );
};
export default Cart;
