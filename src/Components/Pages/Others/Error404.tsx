"use client";
import { Error4 } from "@/Data/Pages/Others";
import ErrorComponent from "./Common/ErrorComponent";

const Error404Container = () => {

  return (
    <ErrorComponent title="Internal Server Error" SvgComponent={Error4} />
  );
};

export default Error404Container;