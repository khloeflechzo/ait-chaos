import classNames from 'classnames';
import Image from 'next/image';
import React, { ReactElement } from 'react';

import MTE from '../MTE';
import ThreeButtons from '../ThreeButtons';
import s from './styles.module.scss';

const MTEAndThreeButtons = ({ className = '' }: { className?: string }): ReactElement => {
  return (
    <div className={classNames(s.wrapper_white, className)}>
      <Image
        quality={100}
        src="/icons/buttons/buy-address.png"
        alt="text-block-wrapper"
        priority
        fill
      />
      <MTE />
      <ThreeButtons />
    </div>
  );
};

export default MTEAndThreeButtons;
