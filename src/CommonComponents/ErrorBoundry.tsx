"use client";
import React, { ReactNode, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";

interface Props {
  children: ReactNode;
}

unstable_batchedUpdates(() => {
  console.error = () => { };
});

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("ToastContainer")) {
        event.preventDefault();
      }
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return <>{children}</>;
};

export default ErrorBoundary;
