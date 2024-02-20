import Lenis from '@studio-freight/lenis';
import { getDelay, getDelayHr } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

import useHorizontalStore from '@/stores/useHorizontalStore';
import { IAnimationHook, IValueHookAnimation } from '@/types/animation';
import { IAnimationElement } from '@/types/common';

interface IUseFade extends IAnimationHook {
  refContent: MutableRefObject<IAnimationElement | null>;
  scale?: number;
}

export default function useScale({
  refContent,
  duration = 0.6,
  delayTrigger,
  delayEnter,
  scale = 1.2,
}: IUseFade): IValueHookAnimation {
  const { target } = useHorizontalStore();
  const targetScroller = useRef<Lenis | undefined>();

  useEffect(() => {
    targetScroller.current = target?.current;
  }, [target]);

  const initAnimation = useCallback(() => {
    gsap.set(refContent.current, { scale });
  }, []);

  const getDelayCallBack = useCallback((): number => {
    return targetScroller.current
      ? getDelayHr({
          lenis: targetScroller.current,
          refContentCurrent: refContent.current,
          delayEnter,
          delayTrigger,
        })
      : getDelay({ refContentCurrent: refContent.current, delayEnter, delayTrigger });
  }, []);

  const playAnimation = useCallback(() => {
    const delay = getDelayCallBack();
    gsap.to(refContent.current, {
      scale: 1,
      delay,
      ease: 'power3.out',
      overwrite: 'auto',
      duration,
    });
  }, []);

  return { initAnimation, playAnimation };
}
