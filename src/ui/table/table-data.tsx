import React, { ReactNode } from "react";

interface TableDataProps {
  children: ReactNode;
  className?: string;
}

export function TableData({ children, className }: TableDataProps) {
  return <div className={`px-5 ${className}`}>{children}</div>;
}
