"use client";

import { Provider } from "react-redux";
import store from "./index";

interface ReduxproviderProps {
  children: React.ReactNode;
}

export default function Reduxprovider({ children }: ReduxproviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
