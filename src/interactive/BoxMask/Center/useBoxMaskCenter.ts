import useAnimation from '@Hooks/useAnimation';
import { getDelay } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback } from 'react';

type IUseBoxMaskCenter = {
  refTrigger: MutableRefObject<HTMLDivElement | null>;
  delayTrigger?: number;
  delayEnter?: number;
  ease?: string;
  duration?: number;
};
export default function useBoxMaskCenter({
  refTrigger,
  ease,
  duration,
  delayTrigger = 0,
  delayEnter = 0,
}: IUseBoxMaskCenter): void {
  const initAnimation = useCallback(() => {
    gsap.getTweensOf(refTrigger.current);
    gsap.set(refTrigger.current, { '--clip': 'inset(0% 50%)' });
  }, [refTrigger]);

  const playAnimation = useCallback(() => {
    const delay = getDelay({ refContentCurrent: refTrigger.current, delayTrigger, delayEnter });
    gsap.to(refTrigger.current, {
      '--clip': 'inset(0% 0%)',
      ease: ease || 'power3.out',
      duration: duration || 1.2,
      delay,
    });
  }, [delayEnter, delayTrigger, duration, ease, refTrigger]);

  useAnimation({
    trigger: refTrigger,
    threshold: 100,
    initAnimation,
    playAnimation,
  });
}
