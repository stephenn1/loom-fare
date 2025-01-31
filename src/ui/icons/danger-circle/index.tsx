import React from "react";
import { IconProps } from "../types";

export default function DangerCircle({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_605_2318)">
        <path
          d="M9.74805 12C9.74805 12.4142 9.41226 12.75 8.99805 12.75C8.58383 12.75 8.24805 12.4142 8.24805 12C8.24805 11.5858 8.58383 11.25 8.99805 11.25C9.41226 11.25 9.74805 11.5858 9.74805 12Z"
          fill={color}
        />
        <path
          d="M8.99805 5.25V9.75M16.498 9C16.498 13.1421 13.1402 16.5 8.99805 16.5C4.85591 16.5 1.49805 13.1421 1.49805 9C1.49805 4.85786 4.85591 1.5 8.99805 1.5C13.1402 1.5 16.498 4.85786 16.498 9Z"
          stroke="#252525"
          stroke-width="1.53"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_605_2318">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
