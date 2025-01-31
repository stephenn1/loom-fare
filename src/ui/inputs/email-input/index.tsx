"use client";

import React, { useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";

export function EmailInput({
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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setOnInvalid(false);
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
          type="email"
          name={name}
          onChange={handleOnChange}
          onInvalid={handleOnInvalid}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
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
