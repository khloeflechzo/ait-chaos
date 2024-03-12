import LenisScroller from '@Components/Lenis';
import { ThirdwebProvider } from '@Components/ThirdwebProvider';
import { NextPage } from 'next';

import { Header } from '@/layouts/Header';
import LandingPage from '@/modules/Landing';

const Page: NextPage = () => {
  return (
    <LenisScroller>
      <ThirdwebProvider activeChain="ethereum" clientId="463378a3a14135a58b3af93e7223d0db">
        <Header />
        <LandingPage />
      </ThirdwebProvider>
    </LenisScroller>
  );
};

export default Page;
