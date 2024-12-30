"use client";
import { Error6 } from "@/Data/Pages/Others";
import ErrorComponent from "./Common/ErrorComponent";

const Error503Container = () => {

  return (
    <ErrorComponent title="Page Not Found" SvgComponent={Error6} />
  );
};

export default Error503Container;