import React from "react";

export type CheckBoxInputProps = {
  value: boolean;
  onChangeCheckBoxInputValue: (e: boolean) => void;
};

export function CheckBoxInput({
  onChangeCheckBoxInputValue,
  value,
}: CheckBoxInputProps) {
  const handleCheckBoxOnChange = () => {
    onChangeCheckBoxInputValue?.(!value);
  };

  return (
    <button
      className={`w-5 h-5 rounded-full grid relative border place-content-center ${
        value
          ? "border-blue-normal bg-blue-normal "
          : "border-grey-light_inactive"
      }`}
      onClick={handleCheckBoxOnChange}
      type="button"
    >
      {/* <Icon type={ICONS.chevron_up_icon} size={16} color={"white"} /> */}
    </button>
  );
}
