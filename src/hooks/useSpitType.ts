import { debounce } from '@Utils/uiHelper';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import SplitType, { TypesList } from 'split-type';

import { IAnimationElement } from '@/types/common';

interface IUseSplitType {
  refTarget: MutableRefObject<IAnimationElement | null>;
  types?: TypesList;
}

export default function useSplitType({ refTarget, types }: IUseSplitType): {
  splitter?: SplitType;
  isReSplit: number;
  clearReSplit: () => void;
} {
  const refTexts = useRef<SplitType>(null);
  const refResize = useRef<ResizeObserver | null>(null);
  const [isReSplit, setIsReSplit] = useState<number>(0);
  const refCurrentWidth = useRef<number>(0);
  const [splitter, setSplitter] = useState<SplitType>();

  useEffect(() => {
    if (!refTarget.current) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const text = new SplitType(refTarget.current, { types });
    setSplitter(text);
    refCurrentWidth.current = refTarget.current.getBoundingClientRect().width;
    const dbouceResize = debounce(() => {
      if (!refTarget.current) return;
      const { width } = refTarget.current.getBoundingClientRect();

      if (refCurrentWidth.current === width) return;
      refCurrentWidth.current = width;

      text?.split({ types });
      setSplitter(text);

      setIsReSplit(
        refTexts.current?.lines?.length ||
          refTexts.current?.words?.length ||
          refTexts.current?.chars?.length ||
          0
      );
    }, 50);

    refResize.current = new ResizeObserver(dbouceResize);
    refResize.current?.observe(refTarget.current);

    return () => {
      refResize.current?.disconnect();
      refResize.current = null;
    };
  }, [refTarget, types]);

  const clearReSplit = useCallback((): void => {
    if (!refTarget.current || !refResize.current) return;
    refResize.current?.unobserve(refTarget.current);
    refResize.current?.disconnect();
    refResize.current = null;
  }, [refTarget]);

  return { splitter, isReSplit, clearReSplit };
}
