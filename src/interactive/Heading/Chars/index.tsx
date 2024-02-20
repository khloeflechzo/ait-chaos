'use client';

import useHeadingChars from '@Interactive/Heading/Chars/useHeadingChars';
import React, { PropsWithChildren, ReactElement, useRef } from 'react';

interface ParagraphLineMaskProps extends PropsWithChildren {
  delayEnter?: number;
  delayTrigger?: number;
  isObserver?: boolean;
  start?: string;
  horizontal?: boolean;
}

type typeRef = HTMLDivElement | HTMLSpanElement | HTMLHeadingElement;

export default function HeadingChars({
  children,
  delayEnter,
  delayTrigger,
  isObserver,
  start,
  horizontal,
}: ParagraphLineMaskProps): ReactElement {
  const refContent = useRef<typeRef>(null);

  useHeadingChars({
    refContent,
    delayTrigger,
    delayEnter,
    isObserver,
    start,
    horizontal,
  });
  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }

  return React.cloneElement(children, { ...{ ref: refContent } });
}
