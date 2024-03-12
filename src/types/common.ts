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
  child?: ReactNode | ReactElement;
  bgColor?: 'black' | 'white' | 'green' | 'pink' | 'blue' | 'silver' | 'yellow' | 'gray';
  textColor?: 'black' | 'white';
}

export interface ChaosToken {
  identifier: string;
  collection: string;
  contract: string;
  token_standard: string;
  name: string;
  description: string;
  image_url: string;
  metadata_url: string;
  opensea_url: string;
  updated_at: string;
  is_disabled: boolean;
  is_nsfw: boolean;
}
