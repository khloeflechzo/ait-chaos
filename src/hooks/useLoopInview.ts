import { useIsInViewport } from '@Hooks/useIsInViewport';
import { gsap } from 'gsap';
import { DependencyList, MutableRefObject, useEffect } from 'react';

interface IUseLoopInView {
  looper: () => void;
  refInView: MutableRefObject<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement | null>;
}
export const useLoopInView = (
  { looper, refInView }: IUseLoopInView,
  desp: DependencyList
): { inView: boolean } => {
  const { visible: inView } = useIsInViewport({ ref: refInView }, [desp]);

  useEffect(() => {
    if (inView) {
      gsap.ticker.add(looper);
    } else {
      gsap.ticker.remove(looper);
    }

    return () => {
      gsap.ticker.remove(looper);
    };
  }, [inView, looper, desp]);

  return { inView };
};
