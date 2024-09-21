import { Box, Center, FormControl, FormLabel } from '@chakra-ui/react';
import { EmailInput } from '../Forms/Email';
import { PasswordInput } from '../Forms/Password';
import { LoginButton } from '../Button/Button';

export const Card = () => {
  return (
    <Box
      minHeight="100vh"
      backgroundColor="#6a62d2"
      padding="25px"
      fontFamily="Josefin Sans, sans-serif"
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop= "-50px"
    >
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="3px"
        padding="25px"
        fontWeight="600"
        letterSpacing="0.8px"
        width="350px"
        height="350px"
        boxShadow="lg"
      >
        <Center padding="15px" color="#454545">
          <h1>SIGN IN TO YOUR ACCOUNT</h1>
        </Center>

        <Box
          padding="15px"
          display="flex"
          flexDirection="column"
          gap="10px"
          marginTop="5px"
        >
          <FormControl>
            <FormLabel fontSize="xs" color="#666666" mb="1">
              Enter Your Email
            </FormLabel>
            <EmailInput />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="xs" color="#666666" mb="1">
              Enter Your Password
            </FormLabel>
            <PasswordInput />
          </FormControl>
        </Box>

        <Box padding="15px" marginTop="5px">
          <LoginButton />
        </Box>
      </Box>
    </Box>
  );
};
