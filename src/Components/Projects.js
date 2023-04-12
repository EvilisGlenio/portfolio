import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Project(props) {
  const [hover, setHover] = useState(false);

  const zoomEffect = {
    transition: "transform 0.3s ease-in-out",
    transform: hover ? "scale(1.03)" : "scale(1)",
    // outros estilos
  };

  return (
    <Flex
      key={props.index}
      flexDirection={{base: "column", md: props.index % 2 == 0 ? "row-reverse" : "row"}}
      gap="10"
      marginBottom="10"
      padding={{base: "0 1rem"}}
    >
      <Box
        p="2"
        w="100%"
        borderRadius="15px"
        position="relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box h="330px">
          <Image
            borderRadius="15px"
            src={props.imageUrl}
            alt={props.alt}
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="top"
            style={{ ...zoomEffect }}
          />
        </Box>
      </Box>
      <Box
        p="2"
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading>{props.title}</Heading>
        <Text fontWeight="light" as="p" mt="10px">
          by{" "}
          <Link style={{ fontWeight: "bold" }} href="/">
            Rocketseat
          </Link>
        </Text>
        <Text fontWeight="light" margin="20px 0" as="p">
          Projeto construído do evento Next Level Week da Rocketseat. Nele foram
          usadas as seguintes tecnologias: React. Esta página possui alguns dos
          meus games preferidos, alguns streamers que acompanho e minhas redes
          sociais.
        </Text>
        <Link href="/">Ver projeto</Link>
      </Box>
    </Flex>
  );
}
