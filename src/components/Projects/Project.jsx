import { Card, Link, Image, Heading, Text } from "@chakra-ui/react";

export function Project({ title, description, link, image, technologies }) {
  return (
    <Card.Root bg="var(--mainBackgroundLight)" borderColor="var(--mainOrange)">
      <Card.Header>
        <Card.Title color="var(--mainOrange)" textAlign="center" mb="1rem">
          {title}
        </Card.Title>
        <Image src={image} />
      </Card.Header>
      <Card.Body>
        <Card.Description>{description}</Card.Description>
        <Heading fontSize="md" color="var(--mainOrange)" mt="1rem">
          Tecnologias usadas:
        </Heading>
        <Text fontSize="md">{technologies}</Text>
      </Card.Body>
      <Card.Footer>
        <Link
          bg="var(--mainOrange)"
          py="0.3rem"
          px="0.6rem"
          fontWeight="semibold"
          fontSize="sm"
          href={link}
        >
          Github
        </Link>
      </Card.Footer>
    </Card.Root>
  );
}
