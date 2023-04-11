"use client";
import Header from "../Header";
import {
  Box,
  Center,
  Container,
  Grid,
  GridItem,
  useColorMode,
  Image,
  Flex,
  Text,
  Heading,
  Highlight,
} from "@chakra-ui/react";
import myImageGames from "/Users/Gilherme/git/EvilisGlenio/my-portifolio/public/myGames.jpg";
import Link from "next/link";

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Header />
      <Grid
        style={{ color: colorMode === "light" ? "dark" : "light" }}
        templateAreas={`"title title"
                  "projects projects"
                  "footer footer"`}
        gridTemplateRows={"auto"}
        gridTemplateColumns={"auto"}
        gap="1"
        color="blackAlpha"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"title"} marginTop="28">
          <Container
            fontSize={{ base: "3rem", md: "4rem", lg: "6rem" }}
            lineHeight={{ base: "3rem", md: "4rem", lg: "6rem" }}
            padding="100px 0"
          >
            <Text as="h1">
              Meus projetos e trabalhos desenvolvidos com amor e dedicação.
            </Text>
          </Container>
        </GridItem>
        <GridItem pl="2" area={"projects"}>
          <Flex gap="2">
            <Box p="2" w='100%'>
              <Box h="330px">
                <Image
                  borderRadius="15px"
                  src="https://github.com/maykbrito/nlw-esports-explorer/raw/main/.github/preview.png"
                  alt="Imagem de uma página onde listo alguns de meus games preferidos."
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  objectPosition='top'
                />
              </Box>
            </Box>
            <Box p="2" w='100%' display='flex' flexDirection='column' justifyContent='center'>
              <Heading>NLW E-Sports</Heading>
              <Text fontWeight='light' as="p" mt='10px'>
                by <Link style={{fontWeight: "bold"}} href="/">Rocketseat</Link>
              </Text>
              <Text fontWeight='light' margin='20px 0' as="p">
                Projeto construído do evento Next Level Week da Rocketseat. Nele
                foram usadas as seguintes tecnologias: React. Esta página possui
                alguns dos meus games preferidos, alguns streamers que acompanho
                e minhas redes sociais.
              </Text>
              <Link href="/">Ver projeto</Link>
            </Box>
          </Flex>
          <Flex minW="100%">
            <Box></Box>
            <Box></Box>
          </Flex>
          <Flex minW="100%">
            <Box></Box>
            <Box></Box>
          </Flex>
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          <Center padding="8">
            <Text fontWeight="light">© 2023 Evilis Glenio</Text>
          </Center>
        </GridItem>
      </Grid>
    </>
  );
}
