import { Box, Grid, Heading, Link } from "@chakra-ui/react";
import { Article } from "./Article";

import { aboutInfo } from "@/data/about";

export function About() {
  return (
    <Box
      py={{ base: "0.3rem", sm: "0.5rem", md: "2rem", lg: "4rem" }}
      px={{ base: "0.6rem", sm: "1rem", md: "4rem", lg: "8rem" }}
    >
      <Heading fontSize="2xl" textAlign="center">
        Sobre
      </Heading>
      <Grid
        padding="1rem"
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "1.5rem", md: "1rem" }}
      >
        {aboutInfo.map((info, index) => (
          <Article key={index} title={info.title} content={info.content} />
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" py="2rem">
        <Link
          href="CV Pedro Bastos.pdf"
          target="_blank"
          border="md"
          rounded="md"
          borderColor="var(--mainOrange)"
          py="0.5rem"
          px="1rem"
          bg="var(--mainBackgroundLight)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-text-icon lucide-file-text"
          >
            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
            <path d="M14 2v5a1 1 0 0 0 1 1h5" />
            <path d="M10 9H8" />
            <path d="M16 13H8" />
            <path d="M16 17H8" />
          </svg>
          Meu currículo
        </Link>
      </Box>
    </Box>
  );
}
