'use client';

import useAnimation from '@Hooks/useAnimation';
import { getDelay, getDelayHr } from '@Utils/uiHelper';
import cn from 'classnames';
import { gsap } from 'gsap';
import React, { CSSProperties, useCallback, useRef } from 'react';

import useHorizontalStore from '@/stores/useHorizontalStore';
import { IAnimationProps } from '@/types/animation';

import s from './styles.module.scss';

interface IProp extends IAnimationProps {
  color?: 'white' | 'black' | 'silver' | 'gray';
  size?: number;
}

export default function Line({
  color = 'white',
  size = 1,
  delayTrigger,
  delayEnter,
  duration,
}: IProp): React.ReactElement {
  const { target: targetScroller } = useHorizontalStore();
  const lineRef = useRef<HTMLDivElement>(null);
  const initAnimation = useCallback((): void => {
    gsap.set(lineRef.current, { width: '0%' });
  }, []);

  const getDelayCallBack = useCallback((): number => {
    return targetScroller
      ? getDelayHr({
          lenis: targetScroller.current,
          refContentCurrent: lineRef.current,
          delayEnter,
          delayTrigger,
        })
      : getDelay({ refContentCurrent: lineRef.current, delayEnter, delayTrigger });
  }, [targetScroller]);

  const playAnimation = useCallback((): void => {
    const delay = getDelayCallBack();
    gsap.to(lineRef.current, {
      width: '100%',
      ease: 'power3.inOut',
      duration: duration || 1.2,
      delay,
    });
  }, [getDelayCallBack]);

  useAnimation({
    trigger: lineRef,
    initAnimation,
    playAnimation,
    isObserver: true,
    threshold: 100,
  });

  return (
    <div
      ref={lineRef}
      className={cn(s.line, s[`line__${color}`])}
      style={{ '--size': `${size}px` } as CSSProperties}
    ></div>
  );
}
