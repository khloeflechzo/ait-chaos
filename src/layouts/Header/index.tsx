'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ReactElement, useState } from 'react';

import Button from '@/components/Button';
import ImagePreload from '@/components/ImagePreload';
import { headerButtonsData } from '@/constants/datas/header';

// import useWindowResize from '@/hooks/useWindowResize';
// import { chaosGetBalanceOfUser } from '@/utils/chaos';
// import { stakeGetBalanceOfUser } from '@/utils/stake';
import HeroMobile from './HeroMobile';
import s from './styles.module.scss';

export const Header = (): ReactElement => {
  const [open, setOpen] = useState(false);
  // const [openBuy, setOpenBuy] = useState(false);
  // const { isDesktop } = useWindowResize();

  // const handleButtonChaos = async (): Promise<void> => {
  //   if (!isDesktop) {
  //     setOpenBuy(true);
  //     return;
  //   } else {
  //     // location.reload();
  //     try {
  //       if (window.ethereum) {
  //         const accounts = (await window.ethereum.request({
  //           method: 'eth_requestAccounts',
  //         })) as string[];
  //         if (!accounts) return;
  //         const currentAccount = accounts[0];
  //         console.log(currentAccount);
  //         // Now you can use `currentAccount` in your contract interactions
  //         await chaosGetBalanceOfUser(currentAccount);
  //       } else {
  //         console.error('MetaMask extension not detected');
  //       }
  //     } catch (error) {
  //       console.error('Error getting account or balance:', error);
  //     }
  //   }
  // };

  const router = useRouter();

  return (
    <header className={s.header}>
      <div className={s.header__line}>
        <div className={s.header__lines}>
          <Image src={'/icons/line/header-line-left.svg'} fill alt="header-line-left" />
        </div>
        <div className={s.header__line__center}></div>
        <div className={s.header__lines}>
          <Image src={'/icons/line/header-line-right.svg'} fill alt="header-line-right" />
        </div>
      </div>
      <div className={classNames('container', s.header__container)}>
        <div className={s.header_logo}>
          <ImagePreload alt="logo" src="/icons/logo.svg" fill />
        </div>
        <div className={s.buttons}>
          <div className={classNames(s.buttons_link, open ? s.open : '')}>
            {headerButtonsData.map((btn) => (
              <Button
                key={btn.label}
                label={btn.label}
                child={btn.child}
                bgColor={btn.bgColor}
                textColor={btn.textColor}
                onClick={() => {
                  if (btn.label === 'Staking') {
                    router.push('/staking', { scroll: false });
                  }
                  return;
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
      {open && <HeroMobile />}
      {/* {openBuy && <BuyModal setOpenBuy={setOpenBuy} />} */}
    </header>
  );
};
