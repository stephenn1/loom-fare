import React from "react";
import { ButtonProps, ButtonVariants } from "./types";
import PrimaryFilled from "./primary-filled";
import PrimaryOutlined from "./primary-outlined";
import Default from "./default";

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case ButtonVariants.PrimaryFilled:
      return <PrimaryFilled {...props} />;

    case ButtonVariants.PrimaryOutlined:
      return <PrimaryOutlined {...props} />;

    default:
      return <Default {...props} />;
  }
}
