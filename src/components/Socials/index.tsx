import Image from 'next/image';
import React, { ReactElement } from 'react';

import ImagePreload from '../ImagePreload';
import s from './styles.module.scss';

const icons = [
  {
    icon: '/icons/socials/x.svg',
    href: '#',
  },
  {
    icon: '/icons/socials/discord.svg',
    href: '#',
  },
  {
    icon: '/icons/socials/tele.svg',
    href: '#',
  },
];

const Soicals = (): ReactElement => {
  return (
    <div className={s.socials}>
      <ImagePreload src="/icons/buttons/big.png" priority alt="text-block-wrapper" fill />
      <button className={s.socials_btn}>
        <div className={s.socials_btn__content}>
          {icons.map((item) => (
            <a key={item.icon} href={item.href} target="_blank" rel="noopener">
              <Image src={item.icon} alt={item.icon} fill />
            </a>
          ))}
        </div>
      </button>
    </div>
  );
};

export default Soicals;
