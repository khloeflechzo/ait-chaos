import classNames from 'classnames';
import { ReactElement } from 'react';

import SvgInsert from '@/components/SvgInsert';

import s from './styles.module.scss';

export const Header = (): ReactElement => {
  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__container)}>
        <SvgInsert src="/icons/logo.svg" width={60} height={60} />
      </div>
    </header>
  );
};
