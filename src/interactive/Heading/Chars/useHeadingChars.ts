import useAnimation from '@Hooks/useAnimation';
import useSplitType from '@Hooks/useSpitType';
import { getDelay } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import { MutableRefObject, useCallback } from 'react';

import s from './styles.module.scss';

interface IUseHeadingChars {
  refContent: MutableRefObject<HTMLDivElement | HTMLSpanElement | HTMLHeadingElement | null>;
  delayTrigger?: number;
  delayEnter?: number;
  offset?: number;
  isObserver?: boolean;
  start?: string;
  horizontal?: boolean;
}

export default function useHeadingChars({
  refContent,
  delayTrigger = 0,
  delayEnter = 0,
  offset = 0,
  isObserver,
  start,
  horizontal,
}: IUseHeadingChars): { words: HTMLElement[] | undefined | null } {
  const { splitter } = useSplitType({
    refTarget: refContent,
    types: 'lines,words',
  });

  const initAnimation = useCallback(() => {
    if (!splitter?.words) return;
    refContent.current?.classList.add(s.headingChars);
    gsap.killTweensOf(splitter?.words);
    gsap.set(splitter?.words, { y: '100%' });
  }, [refContent, splitter?.words]);

  const playAnimation = useCallback(() => {
    if (!splitter?.words) return;
    const delay = getDelay({ refContentCurrent: refContent.current, delayEnter, delayTrigger });
    gsap.to(splitter?.words, {
      stagger: 0.015,
      y: '0%',
      duration: 1.6,
      ease: 'power3.out',
      delay: offset ? -offset : delay,
      overwrite: 'auto',
    });
  }, [delayEnter, delayTrigger, offset, refContent, splitter?.words]);

  useAnimation({
    trigger: refContent,
    initAnimation,
    playAnimation,
    isObserver,
    start,
    horizontal,
  });
  return { words: splitter?.words };
}
