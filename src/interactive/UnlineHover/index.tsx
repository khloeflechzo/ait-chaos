'use client';
import useUnlineHover from '@Interactive/UnlineHover/useUnlineHover';
import React, { PropsWithChildren, ReactElement, useRef } from 'react';

interface ParagraphLineMaskProps extends PropsWithChildren {
  duration?: number;
}

type typeRef = HTMLDivElement | HTMLSpanElement | HTMLHeadingElement;

export default function Underline({ children, duration }: ParagraphLineMaskProps): ReactElement {
  const refContent = useRef<typeRef>(null);

  useUnlineHover({ refContent, duration });

  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }
  return React.cloneElement(children, {
    ...{ ref: refContent },
  });
}
