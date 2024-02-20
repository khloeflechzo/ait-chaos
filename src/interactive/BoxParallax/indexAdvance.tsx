'use client';

import useAnimation from '@Hooks/useAnimation';
import useBoxParallax from '@Interactive/BoxParallax/useBoxParallax';
import { getDelay } from '@Utils/uiHelper';
import { gsap } from 'gsap';
import React, { PropsWithChildren, useCallback, useRef } from 'react';

import s from './styles.module.scss';

interface IBoxParallax extends PropsWithChildren {
  className?: string;
  offset?: number;
  isObserver?: boolean;
  isAnimation?: boolean;
  delayEnter?: number;
  delayTrigger?: number;
}

export default function BoxParallaxAdvance({
  children,
  className,
  offset,
  isAnimation,
  delayEnter,
  delayTrigger,
  isObserver,
}: IBoxParallax): React.ReactElement {
  const refWrap = useRef<HTMLDivElement | null>(null);
  const refContent = useRef<HTMLDivElement | null>(null);
  useBoxParallax({ refWrap, refContent, offset: offset || 0.5 });

  const initAnimation = useCallback(() => {
    if (!isAnimation) return;
    gsap.set(refContent.current, { '--clipPath': ' inset(100% 0% 0% 0%)', scale: 1.2 });
  }, [isAnimation]);

  const playAnimation = useCallback(() => {
    if (!isAnimation) return;
    const delay = getDelay({ delayEnter, delayTrigger, refContentCurrent: refContent.current });
    gsap.fromTo(
      refContent.current,
      { '--clipPath': ' inset(100% 0% 0% 0%)', scale: 1.2 },
      {
        delay,
        '--clipPath': ' inset(0% 0% 0% 0%)',
        ease: 'power3.inOut',
        duration: 1,
      }
    );
  }, [isAnimation]);

  useAnimation({
    trigger: refWrap,
    initAnimation,
    playAnimation,
    isObserver,
    threshold: 50,
  });

  return (
    <div className={`${s.boxparallax} ${className}`} ref={refWrap}>
      <div className={s.boxparallax_inner} ref={refContent}>
        {children}
      </div>
    </div>
  );
}
