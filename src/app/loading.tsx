'use client'
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="theme-loader">
            <div className="snippet" data-title="dot-floating">
              <div className="stage">
                <div className="dot-floating" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;