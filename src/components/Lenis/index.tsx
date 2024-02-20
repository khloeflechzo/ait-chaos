'use client';

import Lenis from '@studio-freight/lenis';
import { ReactLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import React, { PropsWithChildren, useEffect, useRef } from 'react';

import useAnimationStore from '@/stores/useAnimationStore';

interface ISmoothScroller extends PropsWithChildren {}

export default function LenisScroller({ children }: ISmoothScroller): React.ReactElement {
  const lenisRef = useRef<Lenis>();
  const { isPlay } = useAnimationStore();

  useEffect(() => {
    function update(time: number): void {
      lenisRef.current?.raf(time * 1000);
    }

    console.log('____isPlay', isPlay);

    if (isPlay) {
      lenisRef.current?.start();
      gsap.ticker.add(update);
    } else {
      lenisRef.current?.stop();
      gsap.ticker.remove(update);
    }

    // window.lenisRoot = lenisRef;
    return () => {
      gsap.ticker.remove(update);
    };
  }, [isPlay]);

  return (
    <ReactLenis isStopped={true} root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}
