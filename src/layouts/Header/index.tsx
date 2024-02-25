'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement, useState } from 'react';

import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import ImagePreload from '@/components/ImagePreload';
import { headerButtonsData } from '@/constants/datas/header';
import useWindowResize from '@/hooks/useWindowResize';

import BuyModal from './BuyModal';
import HeroMobile from './HeroMobile';
import s from './styles.module.scss';

export const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [openBuy, setOpenBuy] = useState(false);
  const { isDesktop } = useWindowResize();

  const handleButtonChaos = async (): Promise<void> => {
    if (!isDesktop) {
      setOpenBuy(true);
      return;
    } else {
      location.reload();
      // try {
      //   if ((window as any).ethereum) {
      //         const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      //         const currentAccount = accounts[0];
      //         console.log(currentAccount);
      //         // Now you can use `currentAccount` in your contract interactions
      //         await getBalanceOfUser("0x63092eE66F5d8d14754265aDB370D024ebFa2BcF");
      //     } else {
      //         console.error('MetaMask extension not detected');
      //     }
      // } catch (error) {
      //     console.error('Error getting account or balance:', error);
      // }
    }
  };

  return (
    <header className={s.header}>
      <div className={s.header__line}>
        <Image src={'/icons/header-line.png'} fill alt="header-line" />
      </div>
      <div className={classNames('container', s.header__container)}>
        <div className={s.header_logo}>
          <ImagePreload alt="logo" src="/icons/logo.svg" fill />
        </div>
        <div className={s.buttons}>
          <div className={classNames(s.buttons_link, open ? s.open : '')}>
            {headerButtonsData.map((btn, idx) => (
              <Button
                key={btn.label}
                label={btn.label}
                child={btn.child}
                bgColor={btn.bgColor}
                textColor={btn.textColor}
                onClick={() => {
                  if (idx === headerButtonsData.length - 1) {
                    handleButtonChaos();
                  }
                }}
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
      <Carousel />
      {open && <HeroMobile />}
      {openBuy && <BuyModal setOpenBuy={setOpenBuy} />}
    </header>
  );
};
