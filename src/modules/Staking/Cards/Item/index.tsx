import Image from 'next/image';
import React, { ReactElement } from 'react';

import s from './styles.module.scss';

const CardItem = (): ReactElement => {
  return (
    <div className={s.item}>
      <Image src="/images/nft-wrapper.svg" alt="nft-wrapper" fill className={s.item_bg} />
    </div>
  );
};

export default CardItem;
