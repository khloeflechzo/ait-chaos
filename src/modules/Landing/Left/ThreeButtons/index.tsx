'use client';

import React, { ReactElement, useEffect, useState } from 'react';

import Button from '@/components/Button';
import { TypoLabel } from '@/components/Typo';
import { ButtonType, threeButtonsData } from '@/constants/datas/contents';
import { ButtonProps } from '@/types/common';

import s from './styles.module.scss';

interface IPercentages {
  [ButtonType.buy]: number;
  [ButtonType.sell]: number;
  [ButtonType.transfer]: number;
}

export default function ThreeButtons(): ReactElement {
  const [threBtns, setThreeBtns] = useState<ButtonProps[]>([]);

  const [percentages, setPercentages] = useState<IPercentages>({
    [ButtonType.buy]: 0,
    [ButtonType.sell]: 0,
    [ButtonType.transfer]: 0,
  });

  useEffect(() => {
    //fake fetch data

    const rs: IPercentages = {
      [ButtonType.buy]: 2.5,
      [ButtonType.sell]: 2.5,
      [ButtonType.transfer]: 2.5,
    };
    setPercentages(rs);
  }, []);

  useEffect(() => {
    const newBtns = threeButtonsData.map((item) => ({
      ...item,
      child: (
        <TypoLabel tag="p" size={16} color="black">
          {percentages[item.label as ButtonType]}%
        </TypoLabel>
      ),
    }));
    setTimeout(() => {
      setThreeBtns(newBtns);
    }, 300);
  }, [percentages]);

  return (
    <div className={s.wrapper}>
      {threBtns.map((dt) => (
        <Button
          label={dt.label}
          textColor="black"
          bgColor={dt.bgColor}
          key={dt.label + dt.bgColor}
          child={dt.child}
        />
      ))}
    </div>
  );
}
