import React from "react";
import { RequiredFieldProps } from "../types";
import { Icon } from "@/ui/icons";
import { Icons } from "@/ui/icons/types";

RequiredField;

export default function RequiredField({ label }: RequiredFieldProps) {
  return (
    <div className="grid grid-flow-col w-max gap-1">
      <Icon type={Icons.AlertCircle} size={15} color="#ff5f15" />
      <p className="text-[#ff5f15] text-xs">{label} is required.</p>
    </div>
  );
}
