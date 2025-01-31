"use client";

import React, { useState } from "react";
import RequiredField from "../_shared/required-field";
import { InputBaseProps } from "../types";

export function NumberInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  defaultValue,
}: InputBaseProps) {
  const [onInValid, setOnInvalid] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const isValidNumberRegex = /^-?\d+(\.\d+)?([eE][+-]?\d+)?$/;

    const isNotEmptyAndNotNegative =
      inputValue !== "" && parseFloat(inputValue) >= 0;
    if (isValidNumberRegex.test(inputValue) || inputValue === "") {
      if (inputValue.startsWith("-")) {
        setOnInvalid(true);
      } else {
        setOnInvalid(false);
      }
      onChange?.(e);
    } else {
      setOnInvalid(true);
    }
    if (!isNotEmptyAndNotNegative) {
      setOnInvalid(false); // If the input is empty or negative, clear the required error
    }
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  return (
    <div className="grid gap-2 content-start">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input`}>
        <input
          id={id}
          type="number"
          name={name}
          onChange={handleOnChange}
          onInvalid={handleOnInvalid}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
        />
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
