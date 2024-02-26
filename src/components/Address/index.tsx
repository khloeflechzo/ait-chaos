import cn from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import ImagePreload from '../ImagePreload';
import s from './styles.module.scss';

const Address = ({ className }: { className?: string }): ReactElement => {
  return (
    <div className={cn(s.address, className)}>
      <ImagePreload src="/icons/buttons/gray.png" alt="text-block-wrapper" priority fill />
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
