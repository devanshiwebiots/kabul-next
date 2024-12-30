"use client";
import { Error3 } from "@/Data/Pages/Others";
import ErrorComponent from "./Common/ErrorComponent";

const Error403Container = () => {

  return (
    <ErrorComponent title="Sorry, Something Goes Wrong" SvgComponent={Error3} />
  );
};

export default Error403Container;