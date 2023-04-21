"use client";

import {
  Box,
  Center,
  Container,
  Grid,
  Flex,
  GridItem,
  useColorMode,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Grid
        style={{ color: colorMode === "light" ? "dark" : "light" }}
        templateAreas={{
          base: `"title "
        "description  "
        "photo"
        "footer "`,
          md: `"title title"
        "description description"
        "photo photo"
        "footer footer"`,
        }}
        gridTemplateRows={"auto"}
        gridTemplateColumns={"auto"}
        gap="1"
        color="blackAlpha"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"title"} maxW="100%">
          <Container
            fontSize={{ base: "3rem", md: "4rem", lg: "6rem" }}
            lineHeight={{ base: "3rem", md: "4rem", lg: "6rem" }}
            padding="90px 0"
          >
            <Text as="h1">
              Conheça mais sobre mim: apaixonado por Desenvolvimento Front End e
              tecnologia.
            </Text>
          </Container>
        </GridItem>
        <GridItem pl="2" area={"description"} maxW="100%">
          <Text
            paddingBottom={{ base: "2rem", md: "4rem" }}
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="light"
          >
            Sou apaixonado por Desenvolvimento Front End e pelo impacto que a
            tecnologia pode ter na vida das pessoas. Minha missão é utilizar
            minhas habilidades e conhecimentos para criar experiências web
            inovadoras e envolventes que conectem as pessoas ao mundo ao seu
            redor. Como desenvolvedor, estou sempre aprendendo e crescendo,
            buscando sempre melhorar minha técnica e me manter atualizado com as
            últimas tendências e tecnologias.
          </Text>
          <Text
            paddingBottom={{ base: "2rem", md: "4rem" }}
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="light"
          >
            Atualmente, estou estudando ReactJs, NextJs e Chakra UI, e estou
            animado para colocar minhas habilidades em prática criando
            aplicações do mundo real que façam a diferença. Como desenvolvedor
            Front End Junior, estou ansioso para adquirir experiência em um
            ambiente profissional e trabalhar com outros desenvolvedores para
            criar projetos incríveis.
          </Text>
          <Text
            paddingBottom={{ base: "2rem", md: "4rem" }}
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight="light"
          >
            Fora do trabalho, adoro viajar, andar de moto e ouvir rock. Acredito
            que ter uma vida equilibrada é importante, e tento cuidar da minha
            saúde física e mental, mantendo-me ativo e passando tempo com as
            pessoas que amo. Estou animado para ver para onde minha carreira me
            levará e continuar aprendendo e crescendo como desenvolvedor.
          </Text>
        </GridItem>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: "2", md: "1" }}
          area={"photo"}
          maxWidth="100%"
        >
          <GridItem justifySelf="center">
            <Box boxSize={{ base: "sm", md: "md" }}>
              <Image
                borderRadius="20px"
                boxSize="sm"
                objectFit="cover"
                src="/image1.jpg"
                alt="Motociclista"
              />
            </Box>
          </GridItem>
          <GridItem
            justifySelf="center"
            display={{ base: "none", md: "none", lg: "grid" }}
          >
            <Box boxSize={{ base: "sm", md: "md" }}>
              <Image
                borderRadius="20px"
                boxSize="sm"
                objectFit="cover"
                src="/image3.jpg"
                alt="Motociclista"
              />
            </Box>
          </GridItem>
          <GridItem
            justifySelf="center"
            display={{ base: "none", md: "none", lg: "grid" }}
          >
            <Box boxSize={{ base: "sm", md: "md" }}>
              <Image
                borderRadius="20px"
                boxSize="sm"
                objectFit="cover"
                src="/image2.jpg"
                alt="Motociclista"
              />
            </Box>
          </GridItem>
          <GridItem justifySelf="center" display={{ base: "none", md: "grid" }}>
            <Box boxSize={{ base: "sm", md: "md" }}>
              <Image
                borderRadius="20px"
                boxSize="sm"
                objectFit="cover"
                src="/image6.jpg"
                alt="Motociclista"
              />
            </Box>
          </GridItem>
          <GridItem justifySelf="center" display={{ base: "none", md: "grid" }}>
            <Box boxSize={{ base: "sm", md: "md" }}>
              <Image
                borderRadius="20px"
                boxSize="sm"
                objectFit="cover"
                src="/image5.jpg"
                alt="Motociclista"
              />
            </Box>
          </GridItem>
          <GridItem justifySelf="center" display={{ base: "none", md: "grid" }}>
            <Box boxSize={{ base: "sm", md: "md" }}>
              <Image
                borderRadius="20px"
                boxSize="sm"
                objectFit="cover"
                src="/image4.jpg"
                alt="Motociclista"
              />
            </Box>
          </GridItem>
        </Grid>
        <GridItem pl="2" area={"footer"}>
          <Center padding="8">
            <Text fontWeight="light">© 2023 Evilis Glenio</Text>
          </Center>
        </GridItem>
      </Grid>
    </>
  );
}
