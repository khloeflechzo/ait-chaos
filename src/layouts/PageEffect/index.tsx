'use client';

import usePageEffectStore from '@Layouts/PageEffect/usePageEffectStore';
import cn from 'classnames';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

import useAnimationStore from '@/stores/useAnimationStore';
import useLoadManageStore from '@/stores/useLoadManageStore';

import s from './styles.module.scss';

export default function PageEffect(): React.ReactElement {
  const { toggle, setInComplete, inComplete, reset } = usePageEffectStore();
  const { loaded, reset: resetLoader } = useLoadManageStore();
  const { play } = useAnimationStore();
  const pathName = usePathname();

  const refContent = useRef(null);
  useEffect(() => {
    if (toggle) {
      resetLoader();
      gsap.to(refContent.current, {
        opacity: 1,
        pointerEvents: 'auto',
        ease: 'power3.out',
        duration: 0.6,
        onComplete: setInComplete,
      });
    }
  }, [toggle]);

  useEffect(() => {
    if (loaded && inComplete && pathName) {
      gsap.to(refContent.current, {
        opacity: 0,
        ease: 'power3.inOut',
        pointerEvents: 'none',
        duration: 0.5,
        onComplete: () => {
          play();
          reset();
        },
      });
    }
  }, [pathName, loaded, inComplete]);

  return <div className={cn(s.transition)} ref={refContent}></div>;
}
