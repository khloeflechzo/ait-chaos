import Image from 'next/image';

import { ButtonProps } from '@/types/common';

export const headerButtonsData: ButtonProps[] = [
  {
    label: 'Staking',
    child: null,
    bgColor: 'black',
    textColor: 'white',
  },
  {
    label: 'Open box',
    child: null,
    bgColor: 'black',
    textColor: 'white',
  },
  {
    label: 'BUY CHAOS',
    child: <Image width={20} height={20} src="/icons/arrow.svg" alt="arrow" />,
    bgColor: 'white',
    textColor: 'black',
  },
];
