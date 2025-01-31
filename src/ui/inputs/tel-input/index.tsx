"use client";

import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";

export function TelInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
  readonly,
}: InputBaseProps) {
  const [onInValid, setOnInvalid] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Store value in inputValue variable
    const inputValue = e.target.value;
    if (!e.target.value) {
      setPhoneNumber("");
    }

    // Input Checks
    if (
      inputValue.includes("+") ||
      isNaN(Number(inputValue)) || // If it is not a number
      inputValue[0] !== "0" || // If the first value is not Zero(0)
      Number(inputValue[1]) < 7 || //If the second number is less than 7, 8, 9
      (inputValue[2] && Number(inputValue[2]) > 1) // If the third value is not zero(0)/
    )
      return;

    // Set Input Value to Phone Number format
    if (inputValue.length > 10) {
      setPhoneNumber(
        `+234 ${inputValue.substring(1, 4)} ${inputValue.substring(
          4,
          7
        )} ${inputValue.substring(7, 11)}`
      );
      onChange?.(`+234${inputValue.substring(1, 11)}`);
      return;
    }

    setPhoneNumber(inputValue);
    setOnInvalid(false);
  };

  // Handles Backspace
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    if (e.key === "Backspace" && inputValue.includes("+")) {
      const arr = inputValue?.split(" ");
      arr[0] = "0";
      setPhoneNumber(arr.join("").substring(0, arr.join("").length));
      onChange?.("");
    }
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  useEffect(() => {
    if (defaultValue) {
      setPhoneNumber(defaultValue as string);
    }
  }, [defaultValue]);

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input`}>
        <input
          id={id}
          type={"text"}
          placeholder={placeholder}
          onChange={handleOnChange}
          name={name}
          value={phoneNumber}
          onInvalid={handleOnInvalid}
          required={required}
          onKeyDown={handleKeyPress}
          readOnly={readonly}
        />
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
