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

const Header = () => { // Set Header component as arrow function
  // Create a variable for the color mode and for a function that toggles between modes
  const { colorMode, toggleColorMode } = useColorMode();
  // Set a variable for verify if the current color mode is dark
  const isDark = colorMode === "dark";
  // Criate variables to control the opening end closing of a drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Create a variable for store a vertical scroll position of the page and set it's initial state as 0
  const [scrollY, setScrollY] = useState(0);
  // Create a variable to use the Next.js router
  const router = useRouter();

  // Create an array of the object for the header buttons, where each object contains an href, content and target
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

  const handleClick = (href) => {// Criate a function to handle a click on a header button
    router.push(href); // Navigate to the page od the clicked href
    onClose(); // To close the drawer
  };
  useEffect(() => { // Create an effect to handle closing the drawer when the route changes
    onClose();
  }, [onClose]);

  useEffect(() => { // Create an effect to update the scroll position of the page
    const handleScroll = () => setScrollY(window.scrollY); // Create a function to handle the scroll position and update the scrollY variable
    window.addEventListener("scroll", handleScroll); // Adiciona um event listener para a rolagem da página e chama a função handleScroll
    return () => window.removeEventListener("scroll", handleScroll); // Remove the event listener when the component is unmounted
  }, []);

  return ( // Return the JSX of the component
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
