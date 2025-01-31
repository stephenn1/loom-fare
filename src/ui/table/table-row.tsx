"use client";

import React, { ReactNode, useContext } from "react";
import { TableContext } from "./table-context";

interface TableRowProps {
  index?: number;
  children: ReactNode;
  className?: string;
}

export function TableRow({ index, children, className }: TableRowProps) {
  const { tableGrid } = useContext(TableContext);

  return (
    <div
      className={`py-3 grid border-b border-[#E4E7EC] ${tableGrid} ${
        index && (index % 2 ? "bg-[#F8F9FC]" : "bg-[#FFFFFF]")
      } ${className}`}
    >
      {children}
    </div>
  );
}
