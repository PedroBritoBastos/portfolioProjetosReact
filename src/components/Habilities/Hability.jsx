import { Box, Text } from "@chakra-ui/react";

export function Hability({ children, name }) {
  return (
    <Box
      backgroundColor="var(--mainBackgroundLight)"
      clipPath="polygon(99% 16%, 83% 100%, 0 100%, 19% 16%)"
      borderBottom="lg"
      borderColor="var(--mainOrange)"
      display="flex"
      gap="0.5rem"
      alignItems="center"
      justifyContent="center"
      pb={"1rem"}
      pt={"2rem"}
      maxW="10rem"
      px="8rem"
    >
      <Box filter="drop-shadow(0 4px 8px rgba(255,165,0,0.3))">{children}</Box>
      <Text fontSize="lg" filter="drop-shadow(0 4px 8px rgba(255,165,0,0.3))">
        {name}
      </Text>
    </Box>
  );
}
