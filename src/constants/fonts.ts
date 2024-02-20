import localFont from 'next/font/local';

export const matterSQ = localFont({
  src: [
    {
      path: '../../public/fonts/Matter/MatterSQ-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Matter/MatterSQ-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Matter/MatterSQ-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--matter-sq',
});
