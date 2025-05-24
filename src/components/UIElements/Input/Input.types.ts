import { HTMLProps, SyntheticEvent } from "react";

export interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, "size" | "onChange"> {
  id?: string;

  /**
   * Type of Input can be
   */
  type?: string;

  value?: string | number | null;

  size?: "sm" | "md" | "lg";

  label?: string;

  error?: boolean;

  message?: string;

  width?: string;

  placeholder?: string;

  required?: boolean;

  onChange?: (inputValue: string) => void;
  onKeyDown?: (event) => void;
  onKeyUp?: (event) => void;

  onFocus?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;

  onChangePure?: (event: SyntheticEvent) => void;

  disabled?: boolean;
  name?: string;
  hasSearch?: boolean;
  isLoading?: boolean;
  handleSearch?: (value: string) => void;
  tooltipText?: string;
}

export type PeriodInputProps = {
  value?: Period;
  onChange: (value: Period) => void;
  label?: string;
  required?: boolean;
  error?: boolean;
  message?: string;
};

export type Period = {
  period: "daily" | "weekly" | "monthly" | "yearly";
  value: number;
};
