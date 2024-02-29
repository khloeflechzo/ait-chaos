import LenisScroller from '@Components/Lenis';
import { NextPage } from 'next';

import StakingPage from '@/modules/Staking';

const Page: NextPage = () => {
  return (
    <LenisScroller>
      <StakingPage />
    </LenisScroller>
  );
};

export default Page;
