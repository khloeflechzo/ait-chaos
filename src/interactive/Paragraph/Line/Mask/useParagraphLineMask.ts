import useSplitType from '@Hooks/useSpitType';
import Lenis from '@studio-freight/lenis';
import { getDelay, getDelayHr } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

import useHorizontalStore from '@/stores/useHorizontalStore';
import { IAnimationHook } from '@/types/animation';
import { IAnimationElement } from '@/types/common';

import s from './styles.module.scss';

interface IUseParagraphScroller extends IAnimationHook {
  refContent: MutableRefObject<IAnimationElement | null>;
}

export default function useParagraphLineMask({
  refContent,
  delayTrigger,
  delayEnter,
}: IUseParagraphScroller): {
  animationHide: () => void;
  animationIn: (delay?: number) => void;
  animationOut: () => void;
} {
  const { target } = useHorizontalStore();
  const targetScroller = useRef<Lenis | undefined>();

  useEffect(() => {
    targetScroller.current = target?.current;
  }, [target]);

  const { splitter } = useSplitType({
    refTarget: refContent,
    types: 'lines,words',
  });

  const pageHide = useCallback(() => {
    if (splitter?.lines) {
      gsap.killTweensOf(splitter.words);
      gsap.set(splitter.words, { y: '100%', overwrite: 'auto' });
    }
  }, [splitter]);

  const getDelayCallBack = useCallback((): number => {
    return targetScroller.current
      ? getDelayHr({
          lenis: targetScroller.current,
          refContentCurrent: refContent.current,
          delayEnter,
          delayTrigger,
        })
      : getDelay({ refContentCurrent: refContent.current, delayEnter, delayTrigger });
  }, [targetScroller]);

  const animationIn = useCallback(
    (delayIn?: number) => {
      const delay = getDelayCallBack();

      splitter?.lines?.length &&
        splitter?.lines?.forEach((line, key) => {
          const words = line.querySelectorAll('.word');
          gsap.to(words, {
            y: '0%',
            delay: (delayIn || delay) + key / 10,
            ease: 'power3.out',
            duration: 1.2,
            stagger: 0.015,
            overwrite: 'auto',
          });
        });
    },
    [splitter]
  );

  const animationOut = useCallback(() => {
    splitter?.lines?.length &&
      gsap.to(splitter.lines, {
        scrollTrigger: refContent.current,
        stagger: 0.15,
        y: '0%',
        ease: 'power3.out',
        duration: 1.2,
      });
  }, [splitter]);

  refContent.current?.classList.add(s.LineMask);
  return { animationHide: pageHide, animationIn, animationOut };
}
