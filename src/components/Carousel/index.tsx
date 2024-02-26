'use client';

import '@splidejs/react-splide/css';

// @ts-ignore: Ignore import react-splide error
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import React, { ReactElement } from 'react';

import ImagePreload from '@/components/ImagePreload';
import { TypoLabel } from '@/components/Typo';
import { carouselData } from '@/constants/datas/contents';

import s from './styles.module.scss';

const Carousel = (): ReactElement => {
  const options = {
    gap: '4rem',
    autoWidth: true,
    arrows: false,
    pagination: false,
    type: 'loop',
    drag: 'free',
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
  };

  return (
    <div className={s.wrapper}>
      <Splide
        options={{
          ...options,
        }}
        extensions={{ AutoScroll }}
      >
        {carouselData.map((item) => (
          <SplideSlide key={item.label}>
            <div className={s.item}>
              <div className={s.item__image}>
                <ImagePreload
                  src={`/icons/buttons/${item.bgColor}-small.png`}
                  alt="text-block-wrapper"
                  priority
                  fill
                />
              </div>
              <TypoLabel color="white" size={24}>
                {item.label}
              </TypoLabel>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
