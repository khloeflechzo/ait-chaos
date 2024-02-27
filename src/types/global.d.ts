import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    opera?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    grecaptcha?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ethereum?: MetaMaskInpageProvider;
  }
}
