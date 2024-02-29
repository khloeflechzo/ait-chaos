import React, { ReactElement } from 'react';

import BuildOn from '@/components/BuildOn';
import CTA from '@/components/CTA';
import MTE from '@/components/MTE';
import Soicals from '@/components/Socials';
import ThreeButtons from '@/components/ThreeButtons';

import s from './styles.module.scss';
import TextBlock from './TextBlock';

export default function LeftSide(): ReactElement {
  return (
    <div className={s.wrapper}>
      <ThreeButtons />
      <TextBlock />
      <div className={s.wrapper_mteb}>
        <MTE />
        <BuildOn />
      </div>
      <div className={s.wrapper_cta}>
        <CTA />
        <Soicals />
      </div>
    </div>
  );
}
