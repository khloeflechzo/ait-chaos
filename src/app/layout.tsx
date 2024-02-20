import '../styles/app.scss';

import type { Metadata } from 'next';
import React, { PropsWithChildren } from 'react';

import { DebugGrid } from '@/components/DebugGrid';
import { goldman } from '@/constants/fonts';
import Animate from '@/layouts/Animation';
import { Footer } from '@/layouts/Footer';
import { Header } from '@/layouts/Header';

export const metadata: Metadata = {
  title: 'Chaos',
  description:
    'Experience the unique fusion of NFTs and DeFi with CHAOS, crafted on the ERC404 protocol by PANDORA. Unveil the intrigue of CHAOS boxes—where the rarity determines the amount of Stablecoin you earn. Begin your journey by effortlessly transferring $CHAOS tokens until you acquire your desired NFTs. Start exploring the world of CHAOS now!',
};

export default function RootLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <html lang="en" className={goldman.variable}>
      <body>
        <Animate>
          <Header />
          {children}
          <Footer />
        </Animate>
        <DebugGrid />
      </body>
    </html>
  );
}
