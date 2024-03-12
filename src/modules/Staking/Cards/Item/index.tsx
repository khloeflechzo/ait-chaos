import React, { ReactElement } from 'react';

import SvgInsert from '@/components/SvgInsert';

import s from './styles.module.scss';

const CardItem = (): ReactElement => {
  return (
    <div className={s.item}>
      <SvgInsert src="/images/nft-wrapper.svg" className={s.item_bg} />
    </div>
  );
};

export default CardItem;
