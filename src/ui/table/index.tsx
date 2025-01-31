"use client";

import React from "react";
import { TableContext } from "./table-context";
import { TableProps } from "./types";

export function Table({ children, tableGrid }: TableProps) {
  return (
    <TableContext.Provider value={{ tableGrid: tableGrid ?? "grid-flow-col" }}>
      <div className="overflow-hidden border border-[#E4E7EC] rounded-lg grid">
        <div
          className={`w-full h-full relative grid grid-rows-[auto_1fr] overflow-auto custom-scroll-bar`}
        >
          {children}
        </div>
      </div>
    </TableContext.Provider>
  );
}
