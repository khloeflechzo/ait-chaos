import Lenis from '@studio-freight/lenis';

import { IAnimationElement } from '@/types/common';

export const pageScrollTop = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop || 0;
};

export const pageScrollLeft = (): number => {
  return window.pageXOffset || document.documentElement.scrollLeft || 0;
};

export const checkPageScrolled = (): boolean => {
  return pageScrollTop() > 10;
};

export const getDelay = ({
  refContentCurrent,
  delayEnter = 0,
  delayTrigger = 0,
}: {
  refContentCurrent: IAnimationElement | null;
  delayEnter?: number;
  delayTrigger?: number;
}): number => {
  if (!refContentCurrent) return 0;

  const { top, left } = refContentCurrent.getBoundingClientRect();
  if (pageScrollTop() + top > window.innerHeight || pageScrollLeft() + left > window.innerWidth) {
    return delayTrigger;
  }
  return delayEnter;
};

export const getDelayHr = ({
  lenis,
  refContentCurrent,
  delayEnter = 0,
  delayTrigger = 0,
}: {
  lenis: Lenis | undefined;
  refContentCurrent: IAnimationElement | null;
  delayEnter?: number;
  delayTrigger?: number;
}): number => {
  if (!refContentCurrent || !lenis) return 0;

  const scrollLeft = lenis.scroll || 0;
  const { left } = refContentCurrent.getBoundingClientRect();

  if (scrollLeft + left > window.innerWidth) {
    return delayTrigger;
  }
  return delayEnter;
};

export const getSpaceTrigger = (el: IAnimationElement | null): number => {
  const trigger = window.innerHeight / 5;
  if (!el) return trigger;

  const { height } = el.getBoundingClientRect();
  if (height < trigger) return height;
  return trigger;
};

//eslint-disable-next-line
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null;

  return function (...args: Parameters<T>): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
