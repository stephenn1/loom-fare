"use client";

import React from "react";
import "./index.css";
import { TextInput } from "./text-input";
import { InputBaseProps, InputProps, Inputs } from "./types";
import { CheckBoxInput, CheckBoxInputProps } from "./check-box-input";
import { EmailInput } from "./email-input";
import { PasswordInput, PasswordInputProps } from "./password-input";
import { SearchInput, SearchInputProps } from "./search-input";
import { SelectInput, SelectInputProps } from "./select-input";
import { NumberInput } from "./number-input";
import OtpInput, { OtpInputProps } from "./otp-input";
import { TelInput } from "./tel-input";
import { DateInput } from "./date-input";
import { TextAreaInput } from "./text-area-input";
import { SortInput, SortInputProps } from "./sort-input";
import { TimeInput } from "./time-input";

export function Input<T extends Inputs>(props: InputProps<T>): JSX.Element {
  const { type } = props;
  const inputBaseProps = props as InputBaseProps;
  const checkBoxInputProps = props as CheckBoxInputProps;
  const otpInputProps = props as OtpInputProps;
  const passwordInputProps = props as PasswordInputProps;
  const searchInputProps = props as SearchInputProps;
  const selectInputProps = props as SelectInputProps;
  const sortInputProps = props as SortInputProps;

  switch (type) {
    case Inputs.CheckBox:
      return <CheckBoxInput {...checkBoxInputProps} />;

    case Inputs.Date:
      return <DateInput {...inputBaseProps} />;

    case Inputs.Email:
      return <EmailInput {...inputBaseProps} />;

    case Inputs.Number:
      return <NumberInput {...inputBaseProps} />;

    case Inputs.Otp:
      return <OtpInput {...otpInputProps} />;

    case Inputs.Password:
      return <PasswordInput {...passwordInputProps} />;

    case Inputs.Search:
      return <SearchInput {...searchInputProps} />;

    case Inputs.Select:
      return <SelectInput {...selectInputProps} />;

    case Inputs.Sort:
      return <SortInput {...sortInputProps} />;

    case Inputs.Tel:
      return <TelInput {...inputBaseProps} />;

    case Inputs.TextArea:
      return <TextAreaInput {...inputBaseProps} />;

    case Inputs.Text:
      return <TextInput {...inputBaseProps} />;

    case Inputs.Time:
      return <TimeInput {...inputBaseProps} />;

    default:
      return <p>Pick an Input Type from &quot;Inputs&quot; Enum.</p>;
  }
}
