"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import RequiredField from "../_shared/required-field";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

export interface SelectInputProps {
  label?: string;
  placeholder?: string;
  name: string;
  options?: string[];
  required?: boolean;
  defaultValue?: string;
  onInput?: () => void;
  isSearch?: boolean;
  dropDownPos?: "top" | "bottom";
  onChange?: (e: string) => void;
}

export function SelectInput({
  label,
  placeholder,
  name,
  options,
  required,
  defaultValue,
  onInput,
  isSearch,
  dropDownPos,
  onChange,
}: SelectInputProps) {
  const [dropDownList, setDropDownList] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [onInValid, setOnInvalid] = useState(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setDropDownList(
      options?.filter((option) =>
        option.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleShowOptions = () => {
    setOnInvalid(false);
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    onChange?.(option);
    setShowOptions(false);
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  useEffect(() => {
    setDropDownList(options);
  }, [options]);

  useEffect(() => {
    onInput?.();
  }, [selectedOption]);

  return (
    <div className="grid gap-2 content-start">
      <label onClick={handleShowOptions} className={`label`}>
        {label} {required && "*"}
      </label>

      {/* Options */}
      {showOptions && (
        <span
          onClick={handleShowOptions}
          className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.2)] z-10"
        ></span>
      )}

      <div className={`relative ${showOptions && "z-50"}`}>
        <div
          className={`base-input grid grid-cols-[1fr_auto] items-center gap-3 bg-white`}
        >
          <input
            type="text"
            onInvalid={handleOnInvalid}
            required={!selectedOption && required}
          />

          <input
            readOnly
            type={"text"}
            name={name}
            value={selectedOption}
            className="suffix-input cursor-pointer"
            placeholder={placeholder}
            onClick={handleShowOptions}
          />

          {showOptions && isSearch && (
            <input
              type={"text"}
              className="suffix-input"
              placeholder={"Type to search..."}
              onChange={handleSearch}
            />
          )}

          <button type="button" onClick={handleShowOptions} className="suffix">
            <Icon
              type={showOptions ? Icons.ChevronUp : Icons.ChevronDown}
              size={20}
              color="#a3a3a3"
            />
          </button>
        </div>

        <ul
          className={`w-full absolute rounded-[4px] grid max-h-0 overflow-y-auto input-scroll-bar bg-white z-50 transition-all shadow-[0_0_10px_-5px_rgba(0,0,0,.3)] ${
            dropDownPos === "top" ? "bottom-full" : "top-full"
          } ${
            showOptions && dropDownList?.length
              ? `${dropDownPos === "top" ? "mb-2" : "mt-2"} max-h-44 border`
              : ""
          }`}
        >
          {dropDownList?.map((option, i) => (
            <li
              key={i}
              className={`py-3 px-4 cursor-pointer transition-all text-xs text-gray-600 font-medium hover:bg-[#E7EFFE] ${
                i > 0 && `border-t border-[#DFDFDF]`
              }`}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
