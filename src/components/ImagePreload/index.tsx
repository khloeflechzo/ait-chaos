'use client';

import s from '@Components/ImagePlaceHolder/style.module.scss';
import Image, { ImageProps } from 'next/image';
import React, { forwardRef, useEffect } from 'react';

import useLoadManageStore from '@/stores/useLoadManageStore';

const ImagePreload = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { registerLoad, unRegisterLoad } = useLoadManageStore();
  useEffect(() => {
    registerLoad();
    return (): void => {
      unRegisterLoad();
    };
  }, []);

  return (
    <Image
      ref={ref}
      onLoad={() => unRegisterLoad()}
      className={`${props.className} ${s.image_preload__origin}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
      loading="eager"
      alt={props.alt}
    />
  );
});

ImagePreload.displayName = 'ImagePreload';
export default ImagePreload;
