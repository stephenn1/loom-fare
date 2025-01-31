"use client";

import React, { useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";

export function TextAreaInput({
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

  const handleOnChange = (e: React.ChangeEvent) => {
    onChange?.(e);
    setOnInvalid(false);
  };

  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  return (
    <div className="grid grid-rows-[auto_1fr] gap-2">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input`}>
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={handleOnChange}
          name={name}
          onInvalid={handleOnInvalid}
          required={required}
          defaultValue={defaultValue}
          readOnly={readonly}
          className="resize-none min-h-64 input-scroll-bar"
        />
      </div>

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
