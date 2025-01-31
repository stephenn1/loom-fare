import { ReactNode } from "react";

export interface TableProps extends TableContextProps {
  children: ReactNode;
}

export interface TableContextProps {
  tableGrid?: string;
}
