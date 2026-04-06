import { Box, Heading, Grid } from "@chakra-ui/react";
import { Project } from "./Project";

import { projetos } from "@/data/projects";

export function Projects() {
  return (
    <Box
      py={{ base: "0.3rem", sm: "0.5rem", md: "2rem", lg: "4rem" }}
      px={{ base: "0.6rem", sm: "1rem", md: "5rem" }}
    >
      <Heading fontSize="2xl" textAlign="center">
        Projetos
      </Heading>

      <Grid
        padding="1rem"
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "1.5rem", md: "1rem" }}
      >
        {projetos.map((projeto, index) => (
          <Project
            key={index}
            title={projeto.titulo}
            description={projeto.info}
            link={projeto.link}
            image={projeto.imagem}
            technologies={projeto.tecnologias}
          />
        ))}
      </Grid>
    </Box>
  );
}
