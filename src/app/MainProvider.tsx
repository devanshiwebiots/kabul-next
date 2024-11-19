"use client";
import Store from "@/Redux/Store";
import { RootLayoutProps } from "@/Types/Layout";
import React from "react";
import { Provider } from "react-redux";

const MainProvider: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <Provider store={Store}>{children}</Provider>
  );
};

export default MainProvider;