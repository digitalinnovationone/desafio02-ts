import { Button } from '@chakra-ui/react';
import { login } from '../../services/login';

export const LoginButton = () => {
  return (
    <Button
      onClick={login}
      width="100%"
      borderRadius="2px"
      bg="#746bde"
      color="#FFFFFF"
      size="md"
      fontWeight="600"
      letterSpacing="0.8px"
      _hover={{
        bg: '#6a62d2',
      }}
    >
      SIGN IN
    </Button>
  );
};
