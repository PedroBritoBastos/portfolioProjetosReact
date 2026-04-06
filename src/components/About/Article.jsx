import { Box, Heading, Text } from "@chakra-ui/react";

export function Article({ title, content }) {
  return (
    <Box
      border="md"
      rounded="md"
      borderColor="var(--mainOrange)"
      py={{ base: "1rem" }}
      px={{ base: "2rem" }}
      bg="var(--mainBackgroundLight)"
    >
      <Heading
        fontSize="1xl"
        color="var(--mainOrange)"
        textAlign="center"
        mb="1rem"
      >
        {title}
      </Heading>
      <Text textAlign={{ base: "start", sm: "justify" }}>{content}</Text>
    </Box>
  );
}
