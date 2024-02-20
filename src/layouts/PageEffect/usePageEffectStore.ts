import { create } from 'zustand';

type ILoadStore = {
  toggle: boolean;
  url: string;
  inComplete: boolean;
  outComplete: boolean;
  animationIn: (url: string) => void;
  animationOut: () => void;
  setOutComplete: () => void;
  setInComplete: () => void;
  reset: () => void;
};

const usePageEffectStore = create<ILoadStore>()((set) => ({
  toggle: false,

  inComplete: false,
  outComplete: false,

  url: '/',
  animationIn: (url: string): void => set({ toggle: true, url }),
  animationOut: (): void => set({ toggle: false }),
  setOutComplete: (): void => set({ outComplete: true }),
  setInComplete: (): void => set({ inComplete: true }),
  reset: (): void => set({ toggle: false, inComplete: false, outComplete: false }),
}));

export default usePageEffectStore;
