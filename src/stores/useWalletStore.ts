'use client';

import { create } from 'zustand';

type WalletStore = {
  address: string | null;
  setAddress: (newAddress: string | null) => void;
};

const useWalletStore = create<WalletStore>((set) => {
  return {
    address: null,
    setAddress: (newAddress: string | null): void => {
      set({ address: newAddress });
    },
  };
});

export { useWalletStore };
