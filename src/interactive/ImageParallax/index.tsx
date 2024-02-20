'use client';

import ImagePreload from '@Components/ImagePreload';
import useImageParallax from '@Interactive/ImageParallax/useImageParallax';
import React, { useRef } from 'react';

import s from './styles.module.scss';

interface IImageParallax {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  scale?: number;
  className?: string;
}

export default function ImageParallax({
  src,
  alt,
  className = '',
  width,
  height,
  scale,
}: IImageParallax): React.ReactElement {
  const refWrap = useRef<HTMLDivElement | null>(null);
  const refContent = useRef<HTMLImageElement | null>(null);

  useImageParallax({ refWrap, refContent, scale });
  return (
    <div className={`${s.img_parallax} imgParallax`}>
      <div ref={refWrap} className={`${className} ${s.img_parallax__inner} imgParallax_inner`}>
        <ImagePreload width={width} height={height} ref={refContent} src={src} alt={alt} />
      </div>
    </div>
  );
}
