import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import CTA from '@/modules/Landing/Right/CTA';

import s from './style.module.scss';
const BuyModal = ({
  setOpenBuy,
}: {
  setOpenBuy: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {
  return (
    <div className={s.header_buymobile} onClick={() => setOpenBuy(false)}>
      <div className={s.header_buymobile_main} onClick={(e) => e.stopPropagation()}>
        <CTA />
      </div>
    </div>
  );
};

export default BuyModal;
