import LenisScroller from '@Components/Lenis';
import { NextPage } from 'next';

import LandingPage from '@/modules/Landing';

const Page: NextPage = () => {
  return (
    <LenisScroller>
      <LandingPage />
    </LenisScroller>
  );
};

export default Page;
