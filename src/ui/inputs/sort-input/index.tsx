"use client";

import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import React, { useState } from "react";

export interface SortInputProps {
  onChange: (e: string) => void;
  isLoading?: boolean;
  placeholder?: string;
  options: string[];
  defaultValue?: string;
}

export function SortInput({
  onChange,
  placeholder,
  options,
  isLoading,
  defaultValue,
}: SortInputProps) {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleToggle = () => {
    setIsDropDown(!isDropDown);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onChange(option!);
    setIsDropDown(false);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className={`fixed top-0 left-0 w-screen h-screen z-10 ${
          isDropDown ? "visible" : "invisible"
        }`}
      ></button>

      <div
        className={`relative grid grid-cols-[auto_1fr_auto] gap-3 items-center border rounded-[5px] bg-white border-[#DFDFDF] h-[35px] px-[10px] ${
          isDropDown && "z-20"
        }`}
      >
        {isLoading ? (
          <span className="border border-[#8C8C8C] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
        ) : (
          <Icon type={Icons.Filter} size={14} color="#8C8C8C" />
        )}

        <input
          type={"text"}
          placeholder={placeholder}
          className={`placeholder:text-[#9C9C9C] outline-none text-sm bg-transparent w-full`}
          value={selectedOption}
          readOnly
        />

        <button onClick={handleToggle}>
          <Icon
            type={isDropDown ? Icons.ChevronUp : Icons.ChevronDown}
            size={20}
            color="#8C8C8C"
          />
        </button>

        <ul
          className={`w-full top-full absolute rounded-[4px] grid max-h-0 input-scroll-bar bg-white z-50 transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
            isDropDown && options.length
              ? "mt-2 max-h-44 border border-[#DFDFDF] overflow-y-auto"
              : "overflow-hidden"
          }`}
        >
          {options?.map((option, i) => (
            <li
              key={i}
              className={`py-3 px-4 cursor-pointer  transition-all text-xs text-gray-600 font-medium hover:bg-[#E7EFFE] grid grid-cols-[1fr_auto] gap-3`}
              onClick={() => handleSelectOption(option)}
            >
              <span>{option}</span>
              <span
                className={`transition-all ${
                  selectedOption === option ? "opacity-100" : "opacity-0"
                }`}
              >
                <Icon type={Icons.Check} size={16} color="#005AFF" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
