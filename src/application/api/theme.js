// Imports of the extendTheme function of the Chakra UI
import { extendTheme } from "@chakra-ui/react";

// Definition of the custon theme
export const theme = extendTheme({
  config: {
  // Set the initial color mode to dark and don't use the system mode
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
  // Set custon colors to diferent shades of grays
    gray: {
      900: "#181823",
      800: "#1F2029",
      700: "#353646",
      600: "#4B4D63",
      500: "#616480",
      400: "#797D9A",
      300: "#9699B0",
      200: "#D1D2DC",
      100: "#EEEEF2",
    },
  },
  breakpoints: {
    // Difine custom breakpoints for different 'screen sizes'
    base: "20em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
  fonts: {
    // Set custom fonts for header and body styles
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
});
