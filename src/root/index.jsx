
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Shop from "../pages/shop";

const Root = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
};

export default Root;
