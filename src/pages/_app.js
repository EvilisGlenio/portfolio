import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../application/api/theme";
import { ColorModeSwitcher } from '../application/api/ColorModeSwitcher'
import Header from "../Components/Header";

function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider theme={theme}>
      <Header>
        <ColorModeSwitcher/>
      </Header>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}


export default MyApp;