import useAppRouter from '@Hooks/useAppRouter';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

import useAnimationStore from '@/stores/useAnimationStore';
import useLoadManageStore from '@/stores/useLoadManageStore';

import s from './styles.module.scss';

export default function PageLoader(): React.ReactElement {
  const refContent = useRef<HTMLDivElement>(null);
  const { isHome } = useAppRouter();
  const { loaded } = useLoadManageStore();
  const { play } = useAnimationStore();

  useEffect(() => {
    const gc = gsap.context(() => {
      if (refContent.current && loaded) {
        gsap.to(refContent.current, {
          opacity: 0,
          ease: 'power3.inOut',
          duration: 0.5,
          onComplete: () => {
            play();
            refContent.current?.classList.add(s.isHide);
          },
        });
      }
    }, [refContent]);

    return () => gc.revert();
  }, [loaded, isHome]);
  return <div className={s.pageLoader} ref={refContent}></div>;
}
