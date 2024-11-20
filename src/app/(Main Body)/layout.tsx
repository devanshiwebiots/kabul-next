"use client";
import { BreadCrumbs } from "@/Layout/BreadCrumbs";
import { RootLayoutProps } from "@/Types/Layout";
import React from "react";
import { Toaster } from "react-hot-toast";


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="page-wrapper" id='pageWrapper'>
        <div className='page-body-wrapper'>
          <div className='page-body'>
            <BreadCrumbs />
            {children}
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};
export default RootLayout;