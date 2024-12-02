import { NoSsrProps } from "@/Types/Common";
import dynamic from "next/dynamic";
import React, { Fragment } from "react";

const NoSsr: React.FC<NoSsrProps> = (props) => <Fragment>{props.children}</Fragment>;

export default dynamic(() => Promise.resolve(NoSsr), {ssr: false});