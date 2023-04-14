import React from 'react';
import {
    Box,
    Center,
    Container,
    Grid,
    GridItem,
    useColorMode,
    Image,
    Link,
    Text,
  } from "@chakra-ui/react";
  import { Inter } from "next/font/google";
  import Header from "../Components/Header";
  import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

  const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ data }) {
    const { colorMode } = useColorMode();

  return (
    <>
      <Header />
      <Grid
        style={{ color: colorMode === "light" ? "dark" : "light" }}
        templateAreas={{
          base: `"title"
        "description"
        "photo"
        "footer"`,
          md: `"title title"
        "description photo"
        "footer footer"`,
        }}
        gridTemplateRows={"auto"}
        gridTemplateColumns={"auto"}
        gap="1"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"title"}>
          <Container
            fontSize={{ base: "3rem", md: "4rem", lg: "6rem" }}
            lineHeight={{ base: "3rem", md: "4rem", lg: "6rem" }}
            padding="90px 0"
          >
            <Text as="h1">
              Desenvolvedor Front End apaixonado por tecnologia e motociclismo.
            </Text>
          </Container>
          <Container maxW="2x1" justifyContent="flex-start">
            <Box
              marginBottom="20"
              maxW="md"
              display="flex"
              fontSize={{ base: "1.4rem", md: "1.7rem" }}
            >
              <Link
                href="https://www.linkedin.com/in/evilis-glenio/"
                target="_blank"
                marginRight="20px"
                _hover={{
                  color:
                    colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
                }}
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com/EvilisGlenio"
                target="_blank"
                marginRight="20px"
                _hover={{
                  color:
                    colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
                }}
              >
                <FaGithub />
              </Link>
              <Link
                href="/"
                target="_blank"
                marginRight="20px"
                _hover={{
                  color:
                    colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
                }}
              >
                <FaTwitter />
              </Link>
              <Link
                href="/"
                target="_blank"
                marginRight="20px"
                _hover={{
                  color:
                    colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
                }}
              >
                <FaInstagram />
              </Link>
            </Box>
          </Container>
        </GridItem>
        <GridItem pl="2" area={"description"}>
          <Text
            paddingBottom="4rem"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="light"
            noOfLines={[1, 2, 3]}
          >
            Olá! Meu nome é Evilis e sou um estudante de Front End apaixonado
            por tecnologia e motociclismo. Atualmente, estou aprendendo ReactJs,
            NextJs e Chakra UI enquanto construo meu portfólio, com o objetivo
            de conseguir minha primeira vaga de emprego como desenvolvedor Front
            End Junior.
          </Text>
          <Text
            paddingBottom="4rem"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="light"
            noOfLines={[1, 2, 3]}
          >
            Embora ainda enfrente alguns desafios, acredito que a prática é a
            melhor forma de aprender e crescer na área. Quando não estou
            programando, adoro viajar e explorar novos lugares, e também sou um
            grande fã de rock'n'roll clássico e videogames.
          </Text>
          <Text
            paddingBottom="4rem"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="light"
            noOfLines={[1, 2, 3]}
          >
            Espero poder compartilhar mais sobre mim e meu trabalho em breve!"
          </Text>
        </GridItem>
        <GridItem pl="2" area={"photo"}>
          <Box boxSize="md" w="98%">
            <Image
              borderRadius="20px"
              boxSize="100%"
              objectFit="cover"
              src="https://img.freepik.com/fotos-premium/o-motociclista-bonito-e-elegante-esta-sentado-e-relaxando-em-sua-moto-ao-ar-livre_210435-12715.jpg?w=2000"
              alt="Motociclista"
            />
          </Box>
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

export async function getStaticProps() {
  // obter dados para a página inicial
  const data = {
    title: 'Título da Página Inicial',
    description: 'Descrição da Página Inicial',
  };

  return {
    props: { data },
  };
}