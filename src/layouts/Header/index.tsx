import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement } from 'react';

import Button from '@/components/Button';
import ImagePreload from '@/components/ImagePreload';
import { headerButtonsData } from '@/constants/datas/header';

import s from './styles.module.scss';

export const Header = (): ReactElement => {
  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__container)}>
        <ImagePreload alt="logo" src="/icons/logo.svg" width={60} height={60} />
        <div className={s.buttons}>
          <div className={s.buttons_link}>
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
          <button className={s.hamburger}>
            <Image src="/icons/buttons/hamburger.png" fill alt="hamburger" />
          </button>
        </div>
      </div>
    </header>
  );
};
