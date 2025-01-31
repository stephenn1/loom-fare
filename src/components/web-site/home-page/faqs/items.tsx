"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface ItemProps {
  ques: string;
  ans: string;
}

export default function Items({ ans, ques }: ItemProps) {
  const [isAns, setIsAns] = useState(false);
  return (
    <div className="relative bg-secondary p-5 rounded-lg">
      <div className="grid grid-flow-col gap-10 items-center justify-between">
        <p className="font-bold text-gray-700 text-sm sm:text-base">{ques}</p>
        <button
          onClick={() => setIsAns(!isAns)}
          className="relative overflow-hidden rounded-lg grid text-xl text-gray-700"
        >
          {isAns ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </div>
      <p
        className={`overflow-hidden transition-all text-sm sm:text-base ${
          isAns ? "max-h-[1000px] pt-5 mt-5 border-t " : "max-h-0"
        }`}
      >
        {ans}
      </p>
    </div>
  );
}
