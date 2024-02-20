import useSplitType from '@Hooks/useSpitType';
import Lenis from '@studio-freight/lenis';
import { getDelay, getDelayHr } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

import useHorizontalStore from '@/stores/useHorizontalStore';
import { IAnimationElement } from '@/types/common';

import s from './styles.module.scss';

interface IUseParagraphScroller {
  refContent: MutableRefObject<IAnimationElement | null>;
  delayTrigger?: number;
  delayEnter?: number;
}

export default function useParagraphLineWords({
  refContent,
  delayTrigger,
  delayEnter,
}: IUseParagraphScroller): {
  animationHide: () => void;
  animationIn: (delay?: number) => void;
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

  useEffect(() => {
    refContent.current?.classList.add(s.lineWords);
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
  }, [targetScroller]);

  const pageHide = useCallback(() => {
    if (splitter?.words) {
      gsap.killTweensOf(splitter.words);
      gsap.set(splitter.words, { y: '100%', overwrite: 'auto' });
    }
  }, [splitter]);

  const animationIn = useCallback(
    (delayIn?: number) => {
      const delay = getDelayCallBack();
      splitter?.lines &&
        splitter?.lines.forEach((lines, key) => {
          gsap.to(lines.querySelectorAll('.word'), {
            y: '0%',
            delay: (delayIn || delay) + key / 10,
            ease: 'power3.out',
            duration: 1.2,
            overwrite: 'auto',
          });
        });
    },
    [splitter]
  );

  return { animationHide: pageHide, animationIn };
}
