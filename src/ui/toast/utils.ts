// useToast.ts
import { useContext } from "react";
import { ToastContext } from "./toast-context-provider";
import { ToastProps } from "./@types";

export function useToast() {
  const { setToasts } = useContext(ToastContext);

  const callToast = ({ type, title, message }: ToastProps) => {
    setToasts((prevToasts: ToastProps[]) => [
      ...prevToasts,
      { title, message, type },
    ]);
  };

  return {
    callToast,
  };
}
