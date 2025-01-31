import React from "react";
import { IconProps } from "../types";

export default function Dot({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 7 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="3.19922" cy="3" r="3" fill={color} />
    </svg>
  );
}
