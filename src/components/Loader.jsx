import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <svg
          className="w-20 h-20 animate-spin"
          viewBox="0 0 50 50"
        >
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            stroke="blue"
            strokeOpacity="0.5"
            strokeDasharray="90,150"
            strokeDashoffset="0"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </Html>
  );
};

export default Loader;
