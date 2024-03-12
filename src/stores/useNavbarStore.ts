import { create } from 'zustand';

type NavbarStore = {
  connectWallet: boolean;
  setConnectWallet: (value: boolean | ((prev: boolean) => boolean)) => void;

  isOpenMenu: boolean;
  setIsOpenMenu: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const useNavbarStore = create<NavbarStore>((set) => {
  return {
    connectWallet: false,
    setConnectWallet: (value): void => {
      set((state) => ({
        connectWallet: typeof value === 'function' ? value(state.connectWallet) : value,
      }));
    },

    isOpenMenu: false,
    setIsOpenMenu: (value): void => {
      set((state) => ({
        isOpenMenu: typeof value === 'function' ? value(state.isOpenMenu) : value,
      }));
    },
  };
});

export { useNavbarStore };
