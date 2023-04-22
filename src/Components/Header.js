"use client";

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

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

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

  const handleClick = (href) => {
    router.push(href);
    onClose();
  };
  useEffect(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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

export default Header;
