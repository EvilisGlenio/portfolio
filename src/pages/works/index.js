"use client"

import { useState } from "react"
import {
  Center,
  Container,
  Grid,
  GridItem,
  useColorMode,
  Text,
} from "@chakra-ui/react"
import Project from "../../Components/Projects"

export default function About() {
  const { colorMode } = useColorMode()

  const projetos = [
    {
      index: 1,
      title: "Stripe Store",
      imageUrl:
        "https://github.com/EvilisGlenio/stripe-marketplace/blob/main/.github/preview.jpeg",
      alt: "Imagem da Home do Marketplace",
      author: "Evilis Glenio",
      description:
        "A Stripe Store é um projeto em construção, que oferecerá uma plataforma de compras online para eletrônicos. Desenvolvida usando tecnologias modernas como NextJs, Tailwind, Shadcn Ui, useShopCartAPI e StripePaymentsAPI.",
      preview: "https://stripe-marketplace-one.vercel.app/",
    },
    {
      index: 2,
      title: "Filter Cards",
      imageUrl:
        "https://github.com/EvilisGlenio/Filter-Cards/raw/main/.github/preview.png",
      alt: "O Filter Cards é um aplicativo básico de busca de cartões.",
      author: "Rocketseat",
      description:
        "Este é um projeto básico de manipulação de DOM, onde o objetivo é encontrar os cartões que possuem as informações escritas pelo usuário na barra de pesquisa. O modelo pode ser facilmente adaptado para diversos projetos.",
      preview: "https://evilisglenio.github.io/Filter-Cards/",
    },
    {
      index: 3,
      title: "Player-Audio",
      imageUrl:
        "https://github.com/maykbrito/boracodar/raw/main/01/.github/preview.jpg",
      alt: "",
      author: "Rocketseat",
      description:
        "#boraCodar são desafios semanais, promovido pela Rocketseat para ensino de tecnologias WEB.",
      preview: "https://evilisglenio.github.io/player-audio/",
    },
    {
      index: 4,
      title: "Auth with Firebase",
      imageUrl:
        "https://github.com/EvilisGlenio/Auth-with-Firebase/raw/main/.github/preview.png",
      alt: "",
      author: "Evilis Glenio",
      description:
        "Este é um projeto inicialmente muito simples, onde irei aplicar meus conhecimentos mais recentes sobre Autenticações, consumo de APIs e React Hooks e o uso do Styled Components.",
      preview: "https://rad-paletas-cd1ccd.netlify.app/",
    },
    // adicione quantos projetos quiser
  ]

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
            )
          })}
        </GridItem>

        <GridItem pl="2" area={"footer"}>
          <Center padding="8">
            <Text fontWeight="light">© 2023 Evilis Glenio</Text>
          </Center>
        </GridItem>
      </Grid>
    </>
  )
}
