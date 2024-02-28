import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import Nfts from './Nfts';
import s from './style.module.scss';

const Staking = (): ReactElement => {
  return (
    <div className={s.staking}>
      <div className={classNames('container', s.staking_container)}>
        <div className={s.staking_title}>
          <Image src="/icons/staking-icon-left.svg" alt="icon" width={19} height={14} />
          <div>Staking</div>
          <Image src="/icons/staking-icon-left.svg" alt="icon" width={19} height={14} />
        </div>
        <Nfts />
      </div>
    </div>
  );
};

export default Staking;
