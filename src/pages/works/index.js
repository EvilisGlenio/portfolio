"use client";

import { useState } from "react";
import {
  Center,
  Container,
  Grid,
  GridItem,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import Project from "../../Components/Projects";

export default function About() {
  const { colorMode } = useColorMode();

  const projetos = [
    {
      index: 1,
      title: "NLW E-Sports",
      imageUrl:
        "https://github.com/EvilisGlenio/nlw-eSports-app/raw/gh-pages/public/preview1.png",
      alt: "Imagem de uma página onde listo alguns de meus games preferidos.",
      author: "Rocketseat",
      description:
        "Projeto construído do evento Next Level Week da Rocketseat. Nele foram usadas as seguintes tecnologias: React. Esta página possui alguns dos meus games preferidos, alguns streamers que acompanho e minhas redes sociais.",
        preview:"https://evilisglenio.github.io/nlw-eSports-app/"
    },
    {
      index: 2,
      title: "Filter Cards",
      imageUrl:
        "https://github.com/EvilisGlenio/Filter-Cards/raw/main/.github/preview.png",
      alt: "O Filter Cards é um aplicativo básico de busca de cartões.",
      author: "Rocketseat",
      description: "Este é um projeto básico de manipulação de DOM, onde o objetivo é encontrar os cartões que possuem as informações escritas pelo usuário na barra de pesquisa. O modelo pode ser facilmente adaptado para diversos projetos.",
      preview:"https://evilisglenio.github.io/Filter-Cards/"
    },
    {
      index: 3,
      title: "Player-Audio",
      imageUrl: 'https://github.com/maykbrito/boracodar/raw/main/01/.github/preview.jpg',
      alt: "",
      author: "Rocketseat",
      description: "#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB.",
      preview:"https://evilisglenio.github.io/player-audio/"
    },
    // adicione quantos projetos quiser
  ];

  return (
    <>
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
        <GridItem pl="2" area={"title"}>
          <Container
            fontSize={{ base: "3rem", md: "4rem", lg: "6rem" }}
            lineHeight={{ base: "3rem", md: "4rem", lg: "6rem" }}
            padding="90px 0"
          >
            <Text as="h1">
              Meus projetos e trabalhos desenvolvidos com amor e dedicação.
            </Text>
          </Container>
        </GridItem>

        <GridItem pl="2" area={"projects"} overflow="hidden">
          {projetos.map(function (project) {
            return (
              <Project
                index={project.index}
                imageUrl={project.imageUrl}
                alt={project.alt}
                title={project.title}
                author={project.author}
                description={project.description}
                preview={project.preview}
              />
            );
          })}
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
