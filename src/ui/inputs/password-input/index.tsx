"use client";

import React, { useEffect, useState } from "react";
import { InputBaseProps } from "../types";
import RequiredField from "../_shared/required-field";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

export interface PasswordInputProps extends InputBaseProps {
  isCheckPassword?: (e: boolean) => void;
}

const passwordChecks = [
  { title: "at least one uppercase", slug: "one-uppercase" },
  { title: "at least one digit", slug: "one-digit" },
  {
    title: "at least one non alphanumeric character",
    slug: "one-alphanumeric-character",
  },
];

export function PasswordInput({
  label,
  onChange,
  placeholder,
  id,
  name,
  required,
  isCheckPassword,
}: PasswordInputProps) {
  const [showHash, setShowHash] = useState(false);
  const [onInValid, setOnInvalid] = useState(false);
  const [checks, setChecks] = useState<string[]>([]);

  // Function Triggers when input value changes
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    setOnInvalid(false);

    // At least one uppercase check
    e.target.value.match(/^(?=.*[A-Z]).*$/)
      ? !checks.includes(passwordChecks[0].slug) &&
        setChecks((prev) => [...prev, passwordChecks[0].slug])
      : setChecks((prev) => [
          ...prev.filter((elem) => elem !== passwordChecks[0].slug),
        ]);

    // At least one digit
    e.target.value.match(/^(?=.*\d).+$/)
      ? !checks.includes(passwordChecks[1].slug) &&
        setChecks((prev) => [...prev, passwordChecks[1].slug])
      : setChecks((prev) => [
          ...prev.filter((elem) => elem !== passwordChecks[1].slug),
        ]);

    // At least one non alphanumeric chracter
    e.target.value.match(/^(?=.*\W).+$/)
      ? !checks.includes(passwordChecks[2].slug) &&
        setChecks((prev) => [...prev, passwordChecks[2].slug])
      : setChecks((prev) => [
          ...prev.filter((elem) => elem !== passwordChecks[2].slug),
        ]);
  };

  // Function Triggers when form submits and input is invalid.
  const handleOnInvalid = () => {
    setOnInvalid(true);
  };

  // Function handles password visibility
  const handleToggleShowHash = () => {
    setShowHash(!showHash);
  };

  useEffect(() => {
    isCheckPassword?.(checks.length === passwordChecks.length);
  }, [checks]);

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className={`label`}>
        {label} {required && "*"}
      </label>

      <div className={`base-input`}>
        <input
          id={id}
          type={showHash ? "text" : "password"}
          placeholder={placeholder}
          onChange={handleOnChange}
          name={name}
          onInvalid={handleOnInvalid}
          required={required}
          className="suffix-input"
        />
        <button type="button" onClick={handleToggleShowHash} className="suffix">
          <Icon
            type={showHash ? Icons.EyeClose : Icons.EyeOpen}
            size={20}
            color="#a3a3a3"
          />
        </button>
      </div>

      {/* Password Checks */}
      {isCheckPassword && (
        <div className="grid gap-1">
          {passwordChecks.map((check, index) => (
            <div
              key={index}
              className="grid grid-cols-[auto_1fr] gap-1 items-center"
            >
              <span
                className={`w-4 h-4 rounded-full grid place-content-center border-2 transition-all ${
                  checks.includes(check.slug)
                    ? "bg-primary border-primary"
                    : "bg-white border-[#8D8D8F]"
                } `}
              >
                <Icon type={Icons.Check} size={12} color="#FFFFFF" />
              </span>
              <p
                className={`text-sm ${
                  checks.includes(check.slug)
                    ? "text-primary"
                    : "text-[#8D8D8F]"
                }`}
              >
                {check.title}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Required Field Message */}
      {onInValid && (
        <RequiredField label={label ? label : placeholder ? placeholder : ""} />
      )}
    </div>
  );
}
