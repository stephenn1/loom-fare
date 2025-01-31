import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isModal: boolean;
}

export function Modal({ children, isModal }: ModalProps) {
  return (
    <div
      className={`bg-black bg-opacity-60 backdrop-blur-sm z-20 fixed top-0 left-0 w-full h-full p-5 grid content-center transition-all overflow-hidden ${
        isModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className={`bg-white p-5 w-full max-w-lg mx-auto rounded-lg`}>
        {children}
      </div>
    </div>
  );
}
