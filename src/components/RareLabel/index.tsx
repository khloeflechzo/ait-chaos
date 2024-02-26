'use client';

import cn from 'classnames';
import React, { ReactElement } from 'react';

import { cubesDatas } from '@/constants/datas/contents';
import { useCubesStore } from '@/stores/useCubesStore';

import s from './styles.module.scss';

interface IRareLabel {
  className?: string;
}

const RareLabel = ({ className }: IRareLabel): ReactElement => {
  const { activeCard } = useCubesStore();

  return (
    <div className={cn(s.rare, className)}>
      <p className={cn(s.rare_label, s[`rare_label__${cubesDatas[activeCard].type}`])}>
        {cubesDatas[activeCard].type}
      </p>
    </div>
  );
};

export default RareLabel;
