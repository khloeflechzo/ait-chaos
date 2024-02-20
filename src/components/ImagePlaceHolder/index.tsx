'use client';

import Image, { ImageProps } from 'next/image';
import React, { forwardRef, useState } from 'react';

import s from './style.module.scss';

const ImagePlaceHolder = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div ref={ref} className={`${s.image_preload} ${isLoaded && s.loaded}`}>
      <Image
        className={`${props.className} ${s.image_preload__origin}`}
        onLoad={(): void => {
          setIsLoaded(true);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
        alt={props.alt}
      />
      <Image
        className={`${props.className} ${s.image_preload__placeholder}`}
        src={props.src}
        width={10}
        height={10}
        loading="eager"
        alt="eager"
      />
    </div>
  );
});

ImagePlaceHolder.displayName = 'ImagePlaceHolder';
export default ImagePlaceHolder;
