export interface ToastProps {
  type?: ToastTypes;
  title?: string;
  message?: string;
}

export type ToastTypes = "success" | "error" | "info";
