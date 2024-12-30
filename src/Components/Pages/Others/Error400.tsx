"use client";
import { Error1 } from "@/Data/Pages/Others";
import ErrorComponent from "./Common/ErrorComponent";

const Error400Container = () => {

  return (
    <ErrorComponent title="Page Not Found" SvgComponent={Error1} />
  );
};

export default Error400Container;