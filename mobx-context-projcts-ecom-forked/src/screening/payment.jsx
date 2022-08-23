import React from "react";
import { useGlobalContextOfPayment } from "../store/paymentStore";
const Payment = () => {
  const { payment, isModalOpenOfPayment } = useGlobalContextOfPayment();
  return (
    <>
      This is a payment section
      {JSON.stringify(payment)}
      {JSON.stringify(isModalOpenOfPayment)}
    </>
  );
};
export default Payment;
