import classNames from 'classnames';
import { ReactElement } from 'react';

import Button from '@/components/Button';
import SvgInsert from '@/components/SvgInsert';
import { headerButtonsData } from '@/constants/datas/header';

import s from './styles.module.scss';

export const Header = (): ReactElement => {
  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__container)}>
        <SvgInsert src="/icons/logo.svg" width={60} height={60} />
        <div className={s.buttons}>
          {headerButtonsData.map((btn) => (
            <Button
              key={btn.label}
              label={btn.label}
              child={btn.child}
              bgColor={btn.bgColor}
              textColor={btn.textColor}
            />
          ))}
        </div>
      </div>
    </header>
  );
};
