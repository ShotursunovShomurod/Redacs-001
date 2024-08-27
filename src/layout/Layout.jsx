import Footer from "@/components/Footer/Footer";
import Hader from "@/components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const mainLayout = () => {
  return (
    <>
      <Hader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default mainLayout;
