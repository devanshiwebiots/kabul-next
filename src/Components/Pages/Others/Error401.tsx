"use client";
import { Error2 } from "@/Data/Pages/Others";
import ErrorComponent from "./Common/ErrorComponent";

const Error401Container = () => {

  return (
    <ErrorComponent title="Oops! This Page is Not Found." SvgComponent={Error2} />
  );
};

export default Error401Container;