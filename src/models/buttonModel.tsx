import { ReactNode } from 'react';

export interface ButtonPropsType {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}
