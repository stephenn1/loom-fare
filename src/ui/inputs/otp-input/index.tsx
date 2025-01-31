import React, { useEffect, useState } from "react";

export interface OtpInputProps {
  length: number;
  name: string;
  defaultValue?: string;
  onChange?: (e: string) => void;
}

const OtpInput = ({ length, name, defaultValue, onChange }: OtpInputProps) => {
  const [otp, setOtp] = useState(
    defaultValue ? defaultValue?.split("") : Array(length).fill("")
  );
  const handleChange = (element: HTMLInputElement, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if ((event.target as HTMLInputElement).previousSibling) {
        (
          (event.target as HTMLInputElement).previousSibling as HTMLInputElement
        ).focus();
      }
    }
  };
  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = event.clipboardData.getData("text");
    const pasteArr = pasteData.trim()?.split("");
    const newOtp: string[] = [];
    otp.forEach((_, index) => {
      const pasteArrElem = pasteArr[index];
      pasteArrElem != undefined ? newOtp.push(pasteArrElem) : newOtp.push("");
    });
    setOtp(newOtp);
  };
  useEffect(() => {
    onChange?.(otp.join(""));
  }, [otp]);

  return (
    <div className="grid gap-6 grid-flow-col w-full mx-auto">
      {otp.map((data, index) => {
        return (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
            className="otp-input w-full mx-auto"
            onPaste={handlePaste}
          />
        );
      })}
      <input
        type="text"
        name={name}
        value={otp.join("")}
        readOnly
        className="hidden"
      />
    </div>
  );
};

export default OtpInput;
