/* eslint-disable */

'use client';

// import useAppRouter from '@Hooks/useAppRouter';
import useLogicAnimate from '@Layouts/Animation/useLogicAnimate';
// import PageEffect from '@Layouts/PageEffect';
import usePageEffectStore from '@Layouts/PageEffect/usePageEffectStore';
import PageLoader from '@Layouts/PageLoader';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/navigation';
import React, { PropsWithChildren, ReactElement, useEffect, useMemo } from 'react';

import useAnimationStore from '@/stores/useAnimationStore';

interface IProp extends PropsWithChildren {}
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  history.scrollRestoration = 'manual';

  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}
export default function Animate({ children }: IProp): ReactElement {
  useLogicAnimate();

  const router = useRouter();
  const { isPlayed, isPlay } = useAnimationStore();
  const { inComplete, url } = usePageEffectStore();

  const isFirstLoader = useMemo(() => {
    return !isPlayed && !isPlay;
  }, [isPlayed, isPlay]);

  useEffect(() => {
    if (!inComplete) return;
    router.push(url, { scroll: true });
  }, [inComplete]);

  return (
    <main>
      {children}
      {isFirstLoader && <PageLoader />}
      {/*<PageEffect />*/}
    </main>
  );
}
