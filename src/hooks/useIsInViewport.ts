import { DependencyList, MutableRefObject, useEffect, useMemo, useState } from 'react';

export function useIsInViewport(
  {
    ref,
    options,
  }: {
    ref: MutableRefObject<HTMLDivElement | HTMLButtonElement | HTMLAnchorElement | null>;
    options?: IntersectionObserverInit;
  },
  desp: DependencyList
): { visible: boolean; getVisible: () => boolean; kill: () => void } {
  const [visible, setVisible] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== 'undefined')
      return new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        {
          ...{ threshold: 0, rootMargin: '0px 0px 0px 0px' },
          ...options,
        }
      );

    return null;
  }, [options]);

  useEffect(() => {
    if (!ref?.current) return;
    observer?.observe(ref.current);
    return () => {
      observer?.disconnect();
    };
  }, [observer, ref, desp]);

  const getVisible = (): boolean => {
    return visible;
  };

  const kill = (): void => {
    ref?.current && observer?.unobserve(ref.current);
    observer?.disconnect();
  };

  return { visible, getVisible, kill };
}
