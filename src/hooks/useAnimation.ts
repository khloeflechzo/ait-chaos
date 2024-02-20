import { MathMap } from '@Utils/mathUtils';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { MutableRefObject, useEffect, useMemo, useRef } from 'react';

import useAnimationStore from '@/stores/useAnimationStore';
import { IAnimationProps, IValueHookAnimation } from '@/types/animation';
import { IAnimationElement } from '@/types/common';

interface IProps extends IAnimationProps, IValueHookAnimation {
  trigger: MutableRefObject<IAnimationElement | null>;
}

export default function useAnimation({
  trigger,
  initAnimation,
  playAnimation,
  isObserver,
  threshold,
  start,
  horizontal,
  markers,
  isInPopup,
}: IProps): void {
  const refObserver = useRef<IntersectionObserver | null>(null);
  const { isPlay, isPlayForPopup } = useAnimationStore();

  const isPlayTrigger = useMemo(() => {
    return (isInPopup && isPlayForPopup) || isPlay;
  }, [isPlay, isPlayForPopup]);

  useEffect(() => {
    initAnimation();
  }, [initAnimation]);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      let calcTheshold = threshold || 0;

      if (calcTheshold === 0 && trigger.current) {
        const { height, top } = trigger.current.getBoundingClientRect();
        if (top >= window.innerHeight) {
          calcTheshold = MathMap(height / window.innerHeight, 0, 100, 30, 0);
          calcTheshold = Math.max(Math.min(calcTheshold, 30), 0);
        }
      }

      if (!isObserver) {
        isPlayTrigger &&
          ScrollTrigger.create({
            trigger: trigger.current,
            onEnter: () => playAnimation(),
            start: start || `top+=${calcTheshold}% bottom`,
            horizontal,
            once: true,
            markers,
          });
      } else {
        refObserver.current = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              playAnimation();
              trigger.current && refObserver.current?.unobserve(trigger.current);
              refObserver.current?.disconnect();
            }
          },
          { threshold: calcTheshold / 100 }
        );
        isPlayTrigger && trigger.current && refObserver.current?.observe(trigger.current);
      }
    }, [trigger]);

    return () => {
      gsapContext.revert();
      refObserver.current?.disconnect();
    };
  }, [playAnimation, isPlayTrigger]);
}
