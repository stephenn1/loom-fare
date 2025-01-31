"use client";

import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";
import React, { useRef } from "react";

export interface SearchInputProps {
  delay: number;
  isLoading: boolean;
  onChange: (e: string) => void;
  placeholder: string;
}

export function SearchInput({
  delay,
  isLoading,
  onChange,
  placeholder,
}: SearchInputProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onChange(e.target.value.trim());
    }, delay);
  };

  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-3 items-center border rounded-[5px] border-[#DFDFDF] h-[35px] px-[10px]`}
    >
      {isLoading ? (
        <span className="border border-[#8C8C8C] border-b-transparent w-4 h-4 rounded-full animate-spin"></span>
      ) : (
        <Icon type={Icons.Search} size={14} color="#8C8C8C" />
      )}

      <input
        type={"text"}
        placeholder={placeholder}
        onChange={handleOnChange}
        className={`placeholder:text-[#9C9C9C] outline-none text-sm bg-transparent w-full`}
      />
    </div>
  );
}
