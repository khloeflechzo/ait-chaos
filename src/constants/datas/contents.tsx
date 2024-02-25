import { TypoLabel } from '@/components/Typo';
import { ButtonProps } from '@/types/common';

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
