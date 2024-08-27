import Hader from "@/components/Header/Header";
import { Footer } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const mainLayout = () => {
  return (
    <>
      <Hader />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default mainLayout;
