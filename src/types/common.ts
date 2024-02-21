import { ReactElement, ReactNode } from 'react';

export type IAnimationElement =
  | HTMLDivElement
  | HTMLElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLHeadElement
  | HTMLLinkElement
  | HTMLButtonElement
  | SVGSVGElement;

export interface IconProps {
  className?: string;
  color?: string;
}

export interface ButtonProps {
  label: string;
  icon?: ReactNode | ReactElement;
  bgColor?: 'black' | 'white' | 'green' | 'pink' | 'blue';
  textColor?: 'black' | 'white';
}
