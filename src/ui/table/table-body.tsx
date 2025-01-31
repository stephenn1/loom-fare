"use client";

import React, { ReactNode } from "react";

interface TableBodyProps {
  children: ReactNode;
}

export function TableBody({ children }: TableBodyProps) {
  return (
    <div className="grid text-black text-sm content-start">{children}</div>
  );
}
