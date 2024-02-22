import classNames from 'classnames';
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
    <TypoLabel size={12} color="white" className="!leading-5 !uppercase">
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