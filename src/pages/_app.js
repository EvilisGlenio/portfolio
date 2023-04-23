// Imports of the necessary packages
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../application/api/theme";
import { ColorModeSwitcher } from '../application/api/ColorModeSwitcher'
import Header from "../Components/Header";

// Definition of the MyApp component that wraps the entire application
function MyApp({ Component, pageProps }) {
  
  // Return the application structure, using ChakraProvider like as the theme provider
  return (
    <ChakraProvider theme={theme}>
      {/* Application header that contains the ColorModeSwitcher */}
      <Header>
        <ColorModeSwitcher/>
      </Header>
      {/* Render main component passing the page props */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// Export the component so that it can be used in other parts of application
export default MyApp;