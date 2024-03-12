'use client';

import {
  coin98Wallet,
  coinbaseWallet,
  metamaskWallet,
  useConnect,
  walletConnect,
} from '@thirdweb-dev/react';
import classNames from 'classnames';
import Image from 'next/image';
import { ReactElement } from 'react';

import { useNavbarStore } from '@/stores/useNavbarStore';
import { useWalletStore } from '@/stores/useWalletStore';

import { TypoHeading, TypoLabel, TypoParagraph } from '../Typo';
import s from './styles.module.scss';

const metamaskConfig = metamaskWallet();
const coinbaseConfig = coinbaseWallet();
const coin98Config = coin98Wallet();
const walletConfig = walletConnect();

const PopupWallet = (): ReactElement => {
  const connect = useConnect();
  const { connectWallet, setConnectWallet } = useNavbarStore();
  const { setAddress } = useWalletStore();

  const wallets = [
    {
      label: 'MetaMask',
      icon: '/icons/wallet/metamask.svg',
      call: async (): Promise<void> => {
        const wallet = await connect(metamaskConfig);
        const address = await wallet.getAddress();
        setAddress(address);
        setConnectWallet(false);
      },
    },
    {
      label: 'CoinBase Wallet',
      icon: '/icons/wallet/coinbase.svg',
      call: async (): Promise<void> => {
        const wallet = await connect(coinbaseConfig);
        const address = await wallet.getAddress();
        setAddress(address);
        setConnectWallet(false);
      },
    },
    {
      label: 'Coin98 Wallet',
      icon: '/icons/wallet/coin98.svg',
      call: async (): Promise<void> => {
        const wallet = await connect(coin98Config);
        const address = await wallet.getAddress();
        setAddress(address);
        setConnectWallet(false);
      },
    },
    {
      label: 'WalletConnect',
      icon: '/icons/wallet/walletconnect.svg',
      call: async (): Promise<void> => {
        const wallet = await connect(walletConfig);
        const address = await wallet.getAddress();
        setAddress(address);
        setConnectWallet(false);
      },
    },
  ];

  return (
    <div
      className={classNames(s.popupwallet, connectWallet ? s.active : '')}
      onClick={() => setConnectWallet(false)}
    >
      <div
        className={s.popupwallet_content}
        onClick={(e) => {
          e.stopPropagation();
          setConnectWallet(true);
        }}
      >
        <div className={s.popupwallet_content__top}>
          <TypoHeading size={24} color="white">
            Connect to a wallet
          </TypoHeading>
          <TypoParagraph size={14} color="gray">
            To continue you must connect the wallet first
          </TypoParagraph>
        </div>
        <div className={s.popupwallet_content__bottom}>
          {wallets.map((w) => (
            <button type="button" onClick={w.call} key={w.label}>
              <TypoLabel color="white" size={16}>
                {w.label}
              </TypoLabel>
              <Image src={w.icon} alt={w.label} width={40} height={40} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupWallet;
