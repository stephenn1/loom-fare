import Image from "next/image";
import React from "react";

export function PageLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-secondary grid items-center justify-center">
      <span className="block relative w-32 sm:w-64 animate-pulse">
        <Image src={"/logo.svg"} width={500} height={500} alt="Logo" />
      </span>
    </div>
  );
}
