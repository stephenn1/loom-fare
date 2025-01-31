export interface ButtonProps {
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: ButtonVariants;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export enum ButtonVariants {
  PrimaryFilled = "primary-filled",
  PrimaryOutlined = "primary-outlined",
}
