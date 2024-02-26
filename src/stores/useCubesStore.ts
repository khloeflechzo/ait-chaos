'use client';

import { create } from 'zustand';

type Cubes = {
  prevActiveCard: number;
  togglePrevActiveCard: (newPrevActiveCard: number) => void;

  activeCard: number;
  toggleActiveCard: (newActiveCard: number) => void;
};

const useCubesStore = create<Cubes>((set) => ({
  activeCard: 0,
  toggleActiveCard: (newActiveCard: number): void => set({ activeCard: newActiveCard }),

  prevActiveCard: 4,
  togglePrevActiveCard: (newPrevActiveCard: number): void =>
    set({ prevActiveCard: newPrevActiveCard }),
}));

export { useCubesStore };
