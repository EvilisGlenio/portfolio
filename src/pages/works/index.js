"use client";

import Header from "../../Components/Header";
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
        "https://github.com/maykbrito/nlw-esports-explorer/raw/main/.github/preview.png",
      alt: "Imagem de uma página onde listo alguns de meus games preferidos.",
    },
    {
      index: 2,
      title: "Projeto 2",
      imageUrl:
        "https://imgs.search.brave.com/v2JClJ68zmt9x_Z9CPbOI9_gr9g9I9dUvdXky8msiTc/rs:fit:680:402:1/g:ce/aHR0cHM6Ly9maXZl/cnItcmVzLmNsb3Vk/aW5hcnkuY29tL2lt/YWdlcy90X21haW4x/LHFfYXV0byxmX2F1/dG8vZ2lncy85OTYw/NjMzMy9vcmlnaW5h/bC9iNWY3YWMwZDcy/ZmZkNDYzYzk2NWRl/OTE1MDZjZTlkNmZi/MDFlZDRjL2Rlc2ln/bi1hbi1hdHRyYWN0/aXZlLWFuZC1tb2Rl/cm4td2Vic2l0ZS5q/cGc",
      alt: "Descrição do Projeto 2",
    },
    {
      index: 3,
      title: "Projeto 3",
      imageUrl:
        "https://github.com/maykbrito/nlw-esports-explorer/raw/main/.github/preview.png",
      alt: "Descrição do Projeto 3",
    },
    // adicione quantos projetos quiser
  ];

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
        <GridItem pl="2" area={"title"} marginTop={{base: "0", md: "28"}}>
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

        <GridItem pl="2" area={"projects"} overflow="hidden">
          {projetos.map(function (project) {
            return (
              <Project
                index={project.index}
                imageUrl={project.imageUrl}
                alt={project.alt}
                title={project.title}
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
