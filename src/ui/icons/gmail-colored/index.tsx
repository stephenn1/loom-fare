import React from "react";
import { IconProps } from "../types";

export default function GmailColored({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.63636 18.0028H5.45456V8.7301L2.95434 4.36426L0 4.63918V16.3665C0 17.2705 0.732281 18.0028 1.63636 18.0028Z"
        fill="#0085F7"
      />
      <path
        d="M18.5449 18.0028H22.3631C23.2672 18.0028 23.9995 17.2705 23.9995 16.3665V4.63918L21.0494 4.36426L18.545 8.7301V18.0028H18.5449Z"
        fill="#00A94B"
      />
      <path
        d="M18.5456 1.63881L16.3027 5.91863L18.5456 8.72973L24.0001 4.6388V2.45701C24.0001 0.434727 21.6915 -0.720273 20.0728 0.493368L18.5456 1.63881Z"
        fill="#FFBC00"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.45553 8.72959L3.31836 4.21506L5.45553 1.63867L12.001 6.54775L18.5464 1.63867V8.72959L12.001 13.6387L5.45553 8.72959Z"
        fill="#FF4131"
      />
      <path
        d="M0 2.45701V4.6388L5.45456 8.72973V1.63881L3.92728 0.493368C2.30864 -0.720273 0 0.434727 0 2.45701Z"
        fill="#F04438"
      />
    </svg>
  );
}
