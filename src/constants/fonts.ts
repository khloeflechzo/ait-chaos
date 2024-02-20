import localFont from 'next/font/local';

export const goldman = localFont({
  src: [
    {
      path: '../../public/fonts/Goldman/Goldman-Bold.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Goldman/Goldman-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--goldman',
});
