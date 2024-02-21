import Image from 'next/image';

import { ButtonProps } from '@/types/common';

export const headerButtonsData: ButtonProps[] = [
  {
    label: 'Staking',
    icon: null,
    bgColor: 'black',
    textColor: 'white',
  },
  {
    label: 'Open box',
    icon: null,
    bgColor: 'black',
    textColor: 'white',
  },
  {
    label: 'BUY CHAOS',
    icon: <Image width={20} height={20} src="/icons/arrow.svg" alt="arrow" />,
    bgColor: 'white',
    textColor: 'black',
  },
];
