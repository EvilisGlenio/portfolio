// Importação dos arquivos necessários
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../application/api/theme";
import { ColorModeSwitcher } from '../application/api/ColorModeSwitcher'
import Header from "../Components/Header";

// Definição do componente MyApp que envolve toda a aplicação
function MyApp({ Component, pageProps }) {
  
  // Retorna a estrutura da aplicação, utilizando o ChakraProvider como provedor de tema 
  return (
    <ChakraProvider theme={theme}>
      {/* Cabeçalho da aplicação que contém o ColorModeSwitcher */}
      <Header>
        <ColorModeSwitcher/>
      </Header>
      {/* Renderiza o componente principal passando as props da página  */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

// Exporta o componente para que ele possa ser usado em outras partes da aplicação
export default MyApp;