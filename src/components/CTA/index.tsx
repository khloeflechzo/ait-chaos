import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import { TypoLabel } from '@/components/Typo';
import { CTADirectionType, ctaValue } from '@/constants/datas/contents';

import s from './styles.module.scss';

const BoxContent = ({
  text,
  direction,
}: {
  text: string;
  direction: CTADirectionType;
}): ReactElement => (
  <div className={classNames(s.block, s[`block__${direction}`])}>
    <Image src="/images/overlay.png" alt="text-block-wrapper" priority fill />
    <TypoLabel size={20} color="white" className="!uppercase !leading-normal">
      {text}
    </TypoLabel>
  </div>
);

const CTA = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      {ctaValue.map((value) => (
        <BoxContent key={value.label} text={value.label} direction={value.direction} />
      ))}
    </div>
  );
};

export default CTA;
