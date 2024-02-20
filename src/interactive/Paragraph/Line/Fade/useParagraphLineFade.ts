import useSplitType from '@Hooks/useSpitType';
import { getDelay } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback, useEffect } from 'react';
import SplitType, { TypesList } from 'split-type';

import { IAnimationElement } from '@/types/common';

import s from './styles.module.scss';

interface IUseParagraphScroller {
  refContent: MutableRefObject<IAnimationElement | null>;
  delayTrigger?: number;
  delayEnter?: number;
  type?: TypesList;
}

export default function useParagraphLineFade({
  refContent,
  delayTrigger,
  delayEnter,
  type,
}: IUseParagraphScroller): {
  animationHide: () => void;
  animationIn: (delay?: number) => void;
  splitter: SplitType | undefined;
  isReSplit: number;
} {
  const { splitter, isReSplit } = useSplitType({
    refTarget: refContent,
    types: type || 'lines,words',
  });

  const pageHide = useCallback(() => {
    if (splitter?.words) {
      gsap.killTweensOf(splitter.words);
      gsap.set(splitter.words, { y: '100%', opacity: 0, overwrite: 'auto' });
    }
  }, [splitter]);

  const animationIn = useCallback(
    (delayIn?: number) => {
      const mDelayIn = typeof delayIn !== 'number' ? 0 : delayIn;

      const delay = getDelay({ refContentCurrent: refContent.current, delayEnter, delayTrigger });
      splitter?.lines &&
        splitter?.lines.forEach((lines, key) => {
          gsap.to(lines.querySelectorAll('.word'), {
            y: '0%',
            opacity: 1,
            delay: (mDelayIn || delay) + key / 10,
            ease: 'power3.out',
            duration: 1.6,
            overwrite: 'auto',
          });
        });
    },
    [delayEnter, delayTrigger, refContent, splitter?.lines]
  );

  useEffect(() => {
    refContent.current?.classList.add(s.lineFade);
  }, [refContent]);

  return { animationHide: pageHide, animationIn, splitter, isReSplit };
}
