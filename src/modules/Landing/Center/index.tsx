'use client';

import React, { ReactElement } from 'react';

import Address from '@/components/Address';
import useWindowResize from '@/hooks/useWindowResize';

import Cubes from './Cubes';
import s from './styles.module.scss';
import WrapperBox from './WrapperBox';

const Center = (): ReactElement => {
  const { isMobile } = useWindowResize();

  return (
    <div className={s.wrapper}>
      <WrapperBox>
        <Cubes />
      </WrapperBox>
      {isMobile && <Address />}
    </div>
  );
};

export default Center;
