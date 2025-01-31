import React from "react";
import { CheckBoxInputProps } from "./check-box-input";
import { SearchInputProps } from "./search-input";
import { SelectInputProps } from "./select-input";
import { OtpInputProps } from "./otp-input";
import { PasswordInputProps } from "./password-input";
import { SortInputProps } from "./sort-input";

export type InputProps<T> = {
  type: T;
} & (T extends Inputs.CheckBox
  ? CheckBoxInputProps
  : T extends Inputs.Otp
  ? OtpInputProps
  : T extends Inputs.Password
  ? PasswordInputProps
  : T extends Inputs.Search
  ? SearchInputProps
  : T extends Inputs.Select
  ? SelectInputProps
  : T extends Inputs.Sort
  ? SortInputProps
  : InputBaseProps);

export type InputBaseProps = {
  required?: boolean;
  label?: string;
  id: string;
  placeholder?: string;
  name: string;
  defaultValue?: string | number;
  onChange?: (e: React.ChangeEvent | string) => void;
  readonly?: boolean;
};

export interface RequiredFieldProps {
  label: string;
}

export enum Inputs {
  CheckBox = "CheckBox",
  Date = "Date",
  Email = "Email",
  FileUpload = "FileUpload",
  Password = "Password",
  Number = "Number",
  Otp = "Otp",
  Search = "Search",
  SelectContact = "SelectContact",
  Select = "Select",
  SelectTeam = "SelectTeam",
  Sort = "Sort",
  Tel = "Tel",
  TextArea = "TextArea",
  Text = "Text",
  Time = "Time",
  Toggle = "Toggle",
}
