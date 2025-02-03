import React from "react";
import AccDetails from "./acc-details";

export default function Transfer() {
  return (
    <div className="bg-white rounded-r-lg grid gap-10 content-start h-full py-5 px-5 overflow-auto custom-scroll-bar">
      <div className="grid gap-3">
        <p className="text-2xl font-medium">Transfer </p>
        <AccDetails />
      </div>
    </div>
  );
}
