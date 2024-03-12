'use client';

import { create } from 'zustand';

import { ChaosToken } from '@/types/common';

type NFTs = {
  nfts: ChaosToken[];
  setNFTs: (rs: ChaosToken[]) => void;
};

const useNFTsStore = create<NFTs>((set) => ({
  nfts: [],
  setNFTs: (rs: ChaosToken[]): void => set({ nfts: rs }),
}));

export { useNFTsStore };
