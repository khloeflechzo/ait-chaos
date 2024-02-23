import Image from 'next/image';
import React, { ReactElement } from 'react';

import ImagePreload from '../ImagePreload';
import s from './styles.module.scss';

const Address = (): ReactElement => {
  return (
    <div className={s.address}>
      <ImagePreload src="/icons/buttons/big.png" alt="text-block-wrapper" priority fill />
      <button className={s.address_btn}>
        <div className={s.address_btn__content}>
          <p>CA $CHAOS: 0x...73js</p>
          <Image src="/icons/copy.svg" alt="copy" width={24} height={24} />
        </div>
      </button>
    </div>
  );
};

export default Address;
