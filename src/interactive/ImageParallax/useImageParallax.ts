'use client';

import useWindowResize from '@Hooks/useWindowResize';
import { useLenis } from '@studio-freight/react-lenis';
import { MathMap } from '@Utils/mathUtils';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

import s from './styles.module.scss';

interface IuseImageParallax {
  refWrap: MutableRefObject<HTMLDivElement | null>;
  refContent: MutableRefObject<HTMLDivElement | HTMLImageElement | HTMLVideoElement | null>;
  offset?: number;
  scale?: number;
}

export default function useImageParallax({
  refWrap,
  refContent,
  offset = 1,
  scale = 1.2,
}: IuseImageParallax): void {
  const refOptions = useRef({
    isFirstRender: false,
  });
  const { width } = useWindowResize();

  const runParallax = useCallback((): void => {
    const rectWrap = refWrap.current?.getBoundingClientRect();
    if (!rectWrap) return;
    const { innerHeight: height } = window;
    const disParallax = Math.abs((scale - 1) * rectWrap.height);

    const rageTrigger = MathMap(
      height + rectWrap.height / 2,
      height,
      0,
      -disParallax * 2,
      disParallax
    );
    const current = MathMap(
      rectWrap.top + rectWrap.height / 2,
      height,
      0,
      -disParallax * 2,
      disParallax
    );

    if (Math.abs(current) >= Math.abs(rageTrigger)) {
      if (!refOptions.current.isFirstRender && refContent.current) {
        refContent.current.style.transform = `translate3d(0px, ${rageTrigger * offset}px, 0px)`;
        refOptions.current.isFirstRender = true;
      }
      return;
    }

    if (refContent.current) {
      refContent.current.style.transform = `translate3d(0, ${current * offset}px, 0)`;
      refContent.current.style.backfaceVisibility = `hidden`;
      refContent.current.style.willChange = `transform`;
      refContent.current.style.overflow = `hidden`;
      refContent.current.style.inset = `0px`;
    }
  }, [offset, refContent, refWrap, scale]);

  useEffect(() => {
    if (refWrap.current) refWrap.current.style.height = 'auto';
    if (refContent.current) refContent.current.style.height = 'auto';

    const rectWrap = refWrap.current?.getBoundingClientRect();
    if (!rectWrap || scale < 1) return;

    refWrap.current?.classList.add(s.img_parallax);
    refContent.current?.classList.add(s.img_parallax__el);

    if (refContent.current) {
      refContent.current.style.height = `${rectWrap.height * scale}px`;
      refContent.current.style.maxWidth = `none`;
    }

    if (refWrap.current) refWrap.current.style.height = `${rectWrap.height}px`;
  }, [refContent, refWrap, scale, width]);

  useLenis(runParallax, []);
}
