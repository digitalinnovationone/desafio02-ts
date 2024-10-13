import { Box, Heading } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box as="header" bg="teal.500" py={4} textAlign="center" >
      <Heading as="h1" color="white">
        Minha Aplicação
      </Heading>
    </Box>
  );
};

export default Header;
