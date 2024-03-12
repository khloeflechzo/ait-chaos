'use client';

import React, { ReactElement, useEffect } from 'react';

import { useNFTsStore } from '@/stores/useNFTStore';
import { fetchCollectionByAddress } from '@/utils/fetchNFTs';

import CardItem from './Item';
import s from './styles.module.scss';

const Cards = (): ReactElement => {
  const { nfts, setNFTs } = useNFTsStore();

  useEffect(() => {
    const handleFetch = async (): Promise<void> => {
      const data = await fetchCollectionByAddress('0x63092eE66F5d8d14754265aDB370D024ebFa2BcF');
      if (nfts !== null && data) setNFTs(data);
    };
    handleFetch();
  }, []);

  return (
    <div className={s.cards}>
      {Array.from({ length: 5 }).map((_, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardItem key={idx} />
      ))}
    </div>
  );
};

export default Cards;
