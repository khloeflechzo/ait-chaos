import React, { ReactElement } from 'react';

import ImagePreload from '@/components/ImagePreload';

import s from './styles.module.scss';

const Cubes = (): ReactElement => {
  return (
    <div className={s.cubes}>
      <ImagePreload fill alt="cubes" src="/images/cube.png" className={s.cubes_image} />
    </div>
  );
};

export default Cubes;
