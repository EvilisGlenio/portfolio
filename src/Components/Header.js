"use client"; // Define o tipo de ambiente, client para o lado do cliente

// Imports of the necessary packages
import { 
  Box,
  Grid,
  IconButton,
  useColorMode,
  GridItem,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonHeader from "./ButtonHeader";
import ColorModeSwitcher from "../application/api/ColorModeSwitcher";

const Header = () => { // Define o componente Header como uma função arrow
  // Cria uma variável para o modo de cor e para a função que alterna entre os modos
  const { colorMode, toggleColorMode } = useColorMode();
  // Define uma variável para verificar se o modo de cor atual é escuro
  const isDark = colorMode === "dark";
  // Cria variáveis para controlar a abertura e fechamento de um drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Cria uma variável para armazenar a posição vertical do scroll da página e define seu estado inicial como 0
  const [scrollY, setScrollY] = useState(0);
  // Cria uma variável para utilizar o router do Next.js
  const router = useRouter();

  // Cria um array de objetos para os botões do header, cada objeto contém um href, um conteúdo e um target
  const buttonsHeader = [
    {
      href: "/about",
      content: "Sobre",
      target: ""

    },
    {
      href: "/works",
      content: "Projetos",
      target: ""


    },
    {
      href: "mailto:glenio.developer@gmail.com",
      content: "Contato",
      target: "_blank"
    },
  ];

  const handleClick = (href) => {// Cria uma função para lidar com o clique em um botão do header
    router.push(href); // Navega para a página do href clicado
    onClose(); // Fecha o drawer
  };
  useEffect(() => { // Cria um efeito para lidar com o fechamento do drawer quando a rota muda
    onClose();
  }, [onClose]);

  useEffect(() => { // Cria um efeito para atualizar a posição do scroll da página
    const handleScroll = () => setScrollY(window.scrollY); // Cria uma função para lidar com a posição do scroll e atualiza a variável scrollY
    window.addEventListener("scroll", handleScroll); // Adiciona um event listener para a rolagem da página e chama a função handleScroll
    return () => window.removeEventListener("scroll", handleScroll); // Remove o event listener quando o componente é desmontado
  }, []);

  return ( // Retorna o JSX do componente
    <Box
      padding="1rem 0.3rem"
      position="sticky"
      top="0"
      left="0"
      zIndex="999"
      style={{ background: colorMode === "light" ? "dark" : "light" }}
      backdropFilter="blur(8px)"
      opacity={scrollY > 0 ? 0.9 : 1}
    >
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
        <GridItem>
          <Link href="./">
            <Text fontSize="1.5rem" display="flex" alignItems="center">
              GlenioDev
            </Text>
          </Link>
        </GridItem>
        <GridItem
          placeSelf="flex-start"
          display={["none", "none", "flex", "flex"]}
        >
          {buttonsHeader.map(function (button) {
            return (
              <Link key={button.href} href={button.href} target={button.target} passHref>
                <ButtonHeader href={button.href} content={button.content}  />
              </Link>
            );
          })}
        </GridItem>
        <GridItem justifySelf="end" alignSelf="center">
          <ColorModeSwitcher
            isChecked={isDark}
            onChange={toggleColorMode}
            display={["none", "none", "flex", "flex"]}
          />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={onOpen}
          />
          <Drawer isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Grid>
                  {buttonsHeader.map(function (button) {
                    return (
                      <Link key={button.href} href={button.href} target={button.target} passHref>
                        <ButtonHeader
                          onClose={onClose}
                          href={button.href}
                          content={button.content}
                        />
                      </Link>
                    );
                  })}
                </Grid>
                <Box position="absolute" bottom="5" right="4">
                  <ColorModeSwitcher
                    isChecked={isDark}
                    onChange={toggleColorMode}
                    display={["flex", "flex", "none", "none"]}
                  />
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </GridItem>
      </Grid>
    </Box>
  );
};

// Export the component so that it can be used in other parts of application
export default Header;
