"use client";

import {
  Button,
  Box,
  Grid,
  IconButton,
  useColorMode,
  Switch,
  GridItem,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaLaptopCode } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollY, setScrollY] = useState(0);

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
          <Link href="/about">
            <Button
              margin="0.5"
              size="md"
              variant="ghost"
              _hover={{
                bg: colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
              }}
            >
              About
            </Button>
          </Link>
          <Link Link href="/works">
            <Button
              margin="0.5"
              size="md"
              variant="ghost"
              _hover={{
                bg: colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
              }}
            >
              Works
            </Button>
          </Link>
          <Link Link href="/">
            <Button
              margin="0.5"
              size="md"
              variant="ghost"
              _hover={{
                bg: colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
              }}
            >
              Contact
            </Button>
          </Link>
        </GridItem>
        <GridItem justifySelf="end" alignSelf="center">
          <Switch
            color="gray.100"
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
                  <Link href="/about">
                    <Button
                      w="100%"
                      margin="0.5"
                      size="md"
                      variant="ghost"
                      _hover={{
                        bg:
                          colorMode === "light"
                            ? "blackAlpha.300"
                            : "whiteAlpha.300",
                      }}
                    >
                      About
                    </Button>
                  </Link>
                  <Link href="/works">
                    <Button
                      w="100%"
                      margin="0.5"
                      size="md"
                      variant="ghost"
                      _hover={{
                        bg:
                          colorMode === "light"
                            ? "blackAlpha.300"
                            : "whiteAlpha.300",
                      }}
                    >
                      Works
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      w="100%"
                      margin="0.5"
                      size="md"
                      variant="ghost"
                      _hover={{
                        bg:
                          colorMode === "light"
                            ? "blackAlpha.300"
                            : "whiteAlpha.300",
                      }}
                    >
                      Contact
                    </Button>
                  </Link>
                </Grid>
                <Box position="absolute" bottom="8">
                  <Switch
                    color="gray.100"
                    isChecked={isDark}
                    onChange={toggleColorMode}
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
