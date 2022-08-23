import { Preview } from "@mui/icons-material";
import React from "react";
import { useGlobalContext } from "../store/productContext";
import {useGlobalContextOfPayment} from "../store/paymentStore";
const HomePage = () => {
  const { isSidebarOpen, isModalOpen, product } = useGlobalContext();
  const { payment,isModalOpenOfPayment } = useGlobalContextOfPayment();
  return (
    <>
      {" "}
      product page
      {JSON.stringify(product)}
      {JSON.stringify(isSidebarOpen)}
      {JSON.stringify(isModalOpen)}
      {JSON.stringify(payment)}
      {JSON.stringify(isModalOpenOfPayment)}
    </>
  );
};
export default HomePage;
