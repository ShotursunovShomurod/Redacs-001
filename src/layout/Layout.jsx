import Hader from "@/components/Header/Header";
import Footerq from '@/components/Footer/Footer'
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
      <Footerq/>
    </>
  );
};

export default mainLayout;
