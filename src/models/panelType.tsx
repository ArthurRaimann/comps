import { MouseEventHandler, ReactNode } from 'react';

export interface PanelType {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}
