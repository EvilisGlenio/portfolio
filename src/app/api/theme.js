import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      900: '#181823',
      800: '#1F2029',
      700: '#353646',
      600: '#4B4D63',
      500: '#616480',
      400: '#797D9A',
      300: '#9699B0',
      200: '#D1D2DC',
      100: '#EEEEF2',
    },
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
  },
});
