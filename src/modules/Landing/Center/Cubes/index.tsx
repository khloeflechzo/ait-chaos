'use client';

import '@splidejs/react-splide/css';

// @ts-ignore: Ignore import react-splide error
import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { ReactElement, useLayoutEffect, useRef } from 'react';

import ImagePreload from '@/components/ImagePreload';
import { cubesDatas } from '@/constants/datas/contents';
import { useCubesStore } from '@/stores/useCubesStore';

import s from './styles.module.scss';

const Cubes = (): ReactElement => {
  const options = {
    arrows: false,
    pagination: false,
    type: 'loop',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    speed: 3,
  };

  const { activeCard, toggleActiveCard, prevActiveCard, togglePrevActiveCard } = useCubesStore();
  const refSlide = useRef<Splide>();

  useLayoutEffect(() => {
    if (refSlide.current) {
      refSlide.current.splide.go(activeCard);

      refSlide.current.splide.on('autoplay:playing', function (rate: number): void {
        if (rate === 1) {
          toggleActiveCard(activeCard === 4 ? 0 : activeCard + 1);
          togglePrevActiveCard(activeCard);
        }
      });
    }
  }, [activeCard, prevActiveCard]);

  return (
    <div className={s.cubes}>
      <Splide
        options={{
          ...options,
        }}
        ref={refSlide}
      >
        {cubesDatas.map((item) => (
          <SplideSlide key={item.type}>
            <ImagePreload
              fill
              alt="cubes"
              src={`/images/cubes/${item.type}.png`}
              className={s.cubes_image}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Cubes;
