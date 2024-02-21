import { ButtonProps } from '@/types/common';

export enum ButtonType {
  buy = 'buy',
  sell = 'sell',
  transfer = 'transfer',
}

export const threeButtonsData: ButtonProps[] = [
  {
    label: ButtonType.buy,
    bgColor: 'green',
    child: null,
  },
  {
    label: ButtonType.sell,
    bgColor: 'pink',
    child: null,
  },
  {
    label: ButtonType.transfer,
    bgColor: 'blue',
    child: null,
  },
];
