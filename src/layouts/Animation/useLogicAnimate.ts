'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

import useAnimationStore from '@/stores/useAnimationStore';
import useLoadManageStore from '@/stores/useLoadManageStore';

export default function useLogicAnimate(): void {
  const pathName = usePathname();
  const { reset: resetAnimation, setPlayed, resetForPopup } = useAnimationStore();
  const { loaded, reset: resetLoader } = useLoadManageStore();
  const refTime = useRef<NodeJS.Timeout>();
  const { registerLoad, unRegisterLoad } = useLoadManageStore();

  useEffect(() => {
    resetLoader();
    resetForPopup();
    resetAnimation();

    //quickLoaded
    registerLoad();
    refTime.current = setTimeout(unRegisterLoad, 300);
    return (): void => {
      refTime.current && clearTimeout(refTime.current);
      unRegisterLoad();
    };
  }, [pathName]);

  useEffect(() => {
    setPlayed();
  }, [loaded]);
}
