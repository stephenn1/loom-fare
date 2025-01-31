"use client";

import React, { useEffect, useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

export function TimeInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
}: InputBaseProps) {
  const [onInValid, setOnInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [meridiem, setMeridiem] = useState("AM");
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const handleSetMeridiem = (meridiem: "AM" | "PM") => {
    handleDropDown();
    setMeridiem(meridiem);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 7) return;

    if (!e.target.value.match(/^\d{0,2}(\s?\:?\s?\d{0,2})$/)) return;

    // Checks If HH is Greater Than 12
    if (Number(e.target.value?.split(":")[0].trim()) > 12) {
      setInputValue("12 : ");
      return;
    }

    // Checks If MM is Greater Than 59
    if (Number(e.target.value?.split(" : ")[1]) > 59) {
      setInputValue(e.target.value.substring(0, 5) + "00");
      return;
    }

    // Checks If HH is Lesser Than or Equal To 0
    if (
      e.target.value.length === 2 &&
      inputValue.length < e.target.value.length
    ) {
      setInputValue(`${e.target.value} : `);
      return;
    }

    // Checks If MM is Lesser Than or Equal To 0
    if (e.target.value.length === 7) {
      if (Number(e.target.value?.split(" : ")[1]) <= 0) {
        setInputValue(e.target.value.substring(0, 5) + "00");
      } else {
        setInputValue(`${e.target.value}`);
      }
      return;
    }

    setInputValue(e.target.value);
    onChange?.(inputValue);
    setOnInvalid(false);
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  const handleFocusOut = () => {
    inputValue && inputValue.length !== 7 && setInputValue(`00 : 00`);
  };

  useEffect(() => {
    defaultValue && setInputValue(defaultValue as string);
  }, [defaultValue]);

  return (
    <div className="grid gap-2 content-start">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input`}>
        <input
          id={id}
          type={"text"}
          placeholder={placeholder}
          onChange={handleOnChange}
          onInvalid={handleOnInvalid}
          required={required}
          value={inputValue}
          onBlur={handleFocusOut}
          name={name + "-input-field"}
        />

        <div className="col-[-1/1] row-[-1/1] justify-self-end relative mr-3">
          <button
            type="button"
            className="grid grid-flow-col w-max text-xs gap-1 items-center border border-gray-400 justify-center px-2 py-1 rounded-md"
            onClick={handleDropDown}
          >
            {meridiem}
            <Icon type={Icons.TimeCircle} size={16} color="#252525" />
          </button>
          <div
            className={`absolute bg-white top-full border-gray-400 w-full rounded-md overflow-hidden grid transition-all ${
              isDropDown ? "mt-1 max-h-max border" : "max-h-0"
            }`}
          >
            <button
              type="button"
              onClick={() => handleSetMeridiem("AM")}
              className="text-xs text-left px-2 py-1 transition-all hover:bg-gray-200"
            >
              AM
            </button>
            <button
              type="button"
              onClick={() => handleSetMeridiem("PM")}
              className="text-xs text-left px-2 py-1 transition-all hover:bg-gray-200"
            >
              PM
            </button>
          </div>
        </div>

        <input
          id={id}
          type={"text"}
          name={name}
          value={`${inputValue} ${inputValue ? meridiem : ""}`}
          className="hidden"
          readOnly
        />
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
