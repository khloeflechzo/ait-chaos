import { getDelay } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback } from 'react';

import { IAnimationHook, IValueHookAnimation } from '@/types/animation';

import s from './styles.module.scss';

interface IUseBoxMaskLeft extends IAnimationHook {
  refTrigger: MutableRefObject<HTMLDivElement | null>;
  refMaskWrapper: MutableRefObject<HTMLDivElement | null>;
  refMaskElement: MutableRefObject<HTMLDivElement | null>;
}

export default function useBoxMaskLeft({
  refTrigger,
  refMaskWrapper,
  refMaskElement,
  ease,
  duration,
  delayTrigger = 0,
  delayEnter = 0,
}: IUseBoxMaskLeft): IValueHookAnimation {
  const onComplete = useCallback(() => {
    refTrigger.current?.classList.add(s.isComplete);
  }, []);

  const options = {
    xPercent: 0,
    scale: 1,
    ease: ease || 'power3.out',
    duration: duration || 1.2,
    onComplete,
  };

  const initAnimation = useCallback(() => {
    gsap.set(refMaskWrapper.current, { xPercent: -100 });
    gsap.set(refMaskElement.current, { xPercent: 100, scale: 1.2 });
  }, [refTrigger]);

  const playAnimation = useCallback(() => {
    const delay = getDelay({
      refContentCurrent: refTrigger.current,
      delayTrigger,
      delayEnter,
    });
    gsap.to([refMaskWrapper.current, refMaskElement.current], {
      delay,
      ...options,
    });
  }, [delayEnter, delayTrigger, refTrigger]);

  return { initAnimation, playAnimation };
}
