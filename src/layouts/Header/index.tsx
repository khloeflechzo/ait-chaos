'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useState } from 'react';

import Button from '@/components/Button';
import ImagePreload from '@/components/ImagePreload';
import { headerButtonsData } from '@/constants/datas/header';

import BuyModal from './BuyModal';
import HeroMobile from './HeroMobile';
import s from './styles.module.scss';

export const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);
  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__container)}>
        <ImagePreload alt="logo" src="/icons/logo.svg" width={60} height={60} />
        <div className={s.buttons}>
          <div
            className={classNames(s.buttons_link, open ? s.open : '')}
            onClick={() => setOpenBuy((prev) => !prev)}
          >
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
          <button className={s.hamburger} onClick={() => setOpen((prev) => !prev)}>
            <Image
              src={open ? '/icons/buttons/close.png' : '/icons/buttons/hamburger.png'}
              fill
              alt="hamburger"
            />
          </button>
        </div>
      </div>
      {open && <HeroMobile />}
      {openBuy && <BuyModal setOpenBuy={setOpenBuy} />}
    </header>
  );
};
