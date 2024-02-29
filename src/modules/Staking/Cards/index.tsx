import React, { ReactElement } from 'react';

import CardItem from './Item';
import s from './styles.module.scss';

const Cards = (): ReactElement => {
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
