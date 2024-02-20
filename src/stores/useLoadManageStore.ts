import { create } from 'zustand';

type ILoadStore = {
  load: number;
  loaded: boolean;
  registerLoad: () => void;
  unRegisterLoad: () => void;
  reset: () => void;
};

const useLoadManageStore = create<ILoadStore>()((set) => ({
  load: 0,
  loaded: false,
  registerLoad: (): void =>
    set((state) => {
      const newLoad = state.load + 1;
      return { load: newLoad };
    }),
  unRegisterLoad: (): void =>
    set((state) => {
      const newLoad = state.load - 1;
      return { load: newLoad, loaded: newLoad <= 0 };
    }),
  reset: (): void => {
    set({ loaded: false, load: 0 });
  },
}));

export default useLoadManageStore;

export const useQuickLoad = (): void => {};
