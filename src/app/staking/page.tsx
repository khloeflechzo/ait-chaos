import LenisScroller from '@Components/Lenis';
import { NextPage } from 'next';

import { Header } from '@/layouts/Header';
import StakingPage from '@/modules/Staking';

const Page: NextPage = () => {
  return (
    <LenisScroller>
      <Header />
      <StakingPage />
    </LenisScroller>
  );
};

export default Page;
