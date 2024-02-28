import LenisScroller from '@Components/Lenis';
import { NextPage } from 'next';

// import LandingPage from '@/modules/Landing';
import Staking from '@/modules/Staking';

const Page: NextPage = () => {
  return (
    <LenisScroller>
      {/* <LandingPage /> */}
      <Staking />
    </LenisScroller>
  );
};

export default Page;
