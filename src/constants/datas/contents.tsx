import Image from 'next/image';

import { TypoLabel } from '@/components/Typo';
import { ButtonProps } from '@/types/common';

export enum CubeEnumTypes {
  Common = 'common',
  Rare = 'rare',
  Epic = 'epic',
  Legendary = 'legendary',
  Chaos = 'chaos',
}

export const cubesDatas = [
  { type: CubeEnumTypes.Common },
  { type: CubeEnumTypes.Rare },
  { type: CubeEnumTypes.Epic },
  { type: CubeEnumTypes.Legendary },
  { type: CubeEnumTypes.Chaos },
];

export const carouselData: ButtonProps[] = [
  {
    label: 'Build On #Pandora',
    bgColor: 'green',
    child: null,
  },
  {
    label: 'NFTs + Defi',
    bgColor: 'pink',
    child: null,
  },
  {
    label: 'Build On #Pandora',
    bgColor: 'blue',
    child: null,
  },
  {
    label: 'NFTs + Defi',
    bgColor: 'pink',
    child: null,
  },
  {
    label: 'Build On #Pandora',
    bgColor: 'green',
    child: null,
  },
];

export enum ButtonType {
  buy = 'buy',
  sell = 'sell',
  transfer = 'transfer',
}

export const twoButtonsData: ButtonProps[] = [
  {
    label: ButtonType.buy,
    bgColor: 'yellow',
    child: (
      <TypoLabel tag="p" size={16} color="black">
        NFTS
      </TypoLabel>
    ),
  },
  {
    label: ButtonType.buy,
    bgColor: 'green',
    child: (
      <TypoLabel tag="p" size={16} color="black">
        $CHAOS
      </TypoLabel>
    ),
  },
];

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

export const TextBlockValue = [
  'Experience the unique fusion of NFTs and DeFi with CHAOS, crafted on the ERC404 protocol by PANDORA.',
  'Unveil the intrigue of CHAOS boxes—where the rarity determines the amount of Stablecoin you earn.',
  'Begin your journey by effortlessly transferring $CHAOS tokens until you acquire your desired NFTs. Start exploring the world of CHAOS now!',
];

export enum CTADirectionType {
  UP = 'up',
  DOWN = 'down',
}

export const ctaValue = [
  {
    label: 'BUY CHAOS ON UNISWAP',
    direction: CTADirectionType.DOWN,
  },
  {
    label: 'Buy NFTs #CHAOSBOX on Opensea or Blur',
    direction: CTADirectionType.UP,
  },
];

export const StakingBoxNfts = [
  {
    type: CubeEnumTypes.Common,
    box: <Image src="/images/cubes/chaos.png" alt="box-nft" width={200} height={200} />,
    arrow: <Image src="/icons/buttons/arrow.svg" alt="arrow" width={32} height={32} />,
    avt: <Image src="/icons/buttons/avt-nft.png" alt="arrow" width={40} height={40} />,
    title: 'CHAOS NFT',
    bridge: 'BRIDGE ASSETS TO',
  },
  // { type: CubeEnumTypes.Rare },
  // { type: CubeEnumTypes.Epic },
  // { type: CubeEnumTypes.Legendary },
];
