"use client";
import SideBar from "@/Layout/Sidebar";
import { RootLayoutProps } from "@/Types/Layout";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { setToggleSidebar } from "@/Redux/Reducer/Layout/LayoutSlice";
import { setLayout } from "@/Redux/Reducer/Layout/ThemeCustomizerSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const compactSidebar = () => {
    let windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(setLayout("compact-wrapper"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(setLayout(localStorage.getItem("layout")));
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);
  return (
    <>
      <div className={`page-wrapper ${layout}`} id='pageWrapper'>
        <div className='page-body-wrapper'>
          <SideBar />
          <div className='page-body'>
            {children}
            </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};
export default RootLayout;
