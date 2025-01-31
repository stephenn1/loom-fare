"use client";

import React, { useEffect, useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

export function DateInput({
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
  const currentDate = new Date();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) return;

    if (!e.target.value.match(/^\d{0,2}(\/?\d{0,2})(\/?\d{0,4})$/)) return;

    // Checks If DD is Greater Than 31
    if (Number(e.target.value?.split("/")[0]) > 31) {
      setInputValue("31/");
      return;
    }

    // Checks If MM is Greater Than 12
    if (Number(e.target.value?.split("/")[1]) > 12) {
      setInputValue(e.target.value.substring(0, 3) + "12/");
      return;
    }

    // Checks If YYYY is Greater Than current Date.
    if (Number(e.target.value?.split("/")[2]) > currentDate.getFullYear()) {
      setInputValue(e.target.value.substring(0, 6) + currentDate.getFullYear());
      return;
    }

    // Checks If DD is Lesser Than or Equal To 0
    if (
      e.target.value.length === 2 &&
      inputValue.length < e.target.value.length
    ) {
      if (Number(e.target.value) <= 0) {
        setInputValue("01/");
      } else {
        setInputValue(`${e.target.value}/`);
      }
      return;
    }

    // Checks If MM is Lesser Than or Equal To 0
    if (
      e.target.value.length === 5 &&
      inputValue.length < e.target.value.length
    ) {
      if (Number(e.target.value?.split("/")[1]) <= 0) {
        setInputValue(e.target.value.substring(0, 3) + "01/");
      } else {
        setInputValue(`${e.target.value}/`);
      }
      return;
    }

    // Checks If YYYY is Lesser Than (Current Year - 100)
    if (e.target.value.length === 10) {
      if (
        Number(e.target.value?.split("/")[2]) <=
        currentDate.getFullYear() - 100
      ) {
        setInputValue(
          e.target.value.substring(0, 6) + currentDate.getFullYear()
        );
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
    inputValue &&
      inputValue.length !== 10 &&
      setInputValue(`01/01/${currentDate.getFullYear()}`);
  };

  useEffect(() => {
    defaultValue && setInputValue(defaultValue as string);
  }, [defaultValue]);

  return (
    <div className="grid gap-2 content-start">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input `}>
        <input
          id={id}
          type={"text"}
          placeholder={placeholder}
          onChange={handleOnChange}
          onInvalid={handleOnInvalid}
          value={inputValue}
          onBlur={handleFocusOut}
          required={required}
          name={name}
        />

        <button type="button" className="suffix">
          <Icon type={Icons.Calendar} size={20} color="#252525" />
        </button>
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
