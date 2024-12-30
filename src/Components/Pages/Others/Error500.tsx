"use client";
import { Error5 } from "@/Data/Pages/Others";
import ErrorComponent from "./Common/ErrorComponent";

const Error500Container = () => {

  return (
    <ErrorComponent title="Page Not Found" SvgComponent={Error5} />
  );
};

export default Error500Container;