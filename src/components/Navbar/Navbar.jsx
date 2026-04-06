import { Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <>
      <nav>
        <Flex
          justify="center"
          gap="1em"
          lg={{ gap: "5em", padding: "1.5em" }}
          padding="1em"
          backgroundColor="rgb(70, 65, 64)"
          width="100vw"
          position="fixed"
          zIndex="10"
        >
          <Link
            href="#sobre"
            sm={{ fontSize: "16px" }}
            lg={{ fontSize: "20px" }}
          >
            Sobre
          </Link>
          <Link
            href="#habilidades"
            sm={{ fontSize: "16px" }}
            lg={{ fontSize: "20px" }}
          >
            Habilidades
          </Link>
          <Link
            href="#projetos"
            sm={{ fontSize: "16px" }}
            lg={{ fontSize: "20px" }}
          >
            Projetos
          </Link>
        </Flex>
      </nav>
    </>
  );
};

export default Navbar;
