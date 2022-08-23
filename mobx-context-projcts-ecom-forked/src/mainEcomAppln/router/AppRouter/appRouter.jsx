import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Cart from "../../pages/cart";
import ButtonAppBar from "../../components/appBar";
import ProductDetails from '../../pages/productDetails';
import Categories from '../../pages/categeries'
function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <ButtonAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route exact path="/categories/cate=:name" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
