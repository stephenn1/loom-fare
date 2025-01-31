import React, { ReactNode } from "react";
import { TableRow } from "./table-row";

interface TableHeaderProps {
  children: ReactNode;
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <div className="sticky top-0 bg-[#F1F3F9] border-b border-[#E4E7EC]">
      <TableRow className="text-black font-semibold text-sm">
        {children}
      </TableRow>
    </div>
  );
}
