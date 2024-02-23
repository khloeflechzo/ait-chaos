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

export const eightbits = localFont({
  src: [
    {
      path: '../../public/fonts/8bit/8BITWONDERNominal.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--eight-bits',
});

export const upHeavel = localFont({
  src: [
    {
      path: '../../public/fonts/Upheavel/UpheavalTT-BRK-.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--upheavel',
});
