import Image from 'next/image';
import React, { ReactElement } from 'react';

import { StakingBoxNfts } from '@/constants/datas/contents';

import s from './style.module.scss';

const Nfts = (): ReactElement => {
  return (
    <div className={s.nfts}>
      {StakingBoxNfts?.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className={s.nfts_card} key={item.type}>
            <Image src="/icons/buttons/nft-item.svg" alt="nft-item" width={316} height={417} />
            <div className={s.nfts_card_box}>
              <div>{item.box}</div>
              {/* <div> {item.arrow} </div> */}

              <div className={s.nfts_card_box_title}>
                <div> {item.avt} </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.bridge} </p>
                </div>
              </div>
            </div>
            {/* <div className={classNames(s.asdasd, s[`asdasd${idx}`])}>{item.boder}</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Nfts;
