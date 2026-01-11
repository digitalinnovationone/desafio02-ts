import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderRadius="15px"
      padding="10px"
      marginBottom="20px"
      boxShadow="md"
      minHeight="20%"
      minWidth="100%"
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="#000000"
        textAlign="center"
      >
        Dio Bank
      </Text>
    </Box>
  );
};

export default Header;