import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

export const login = (): string => {
  toast({
    title: 'Login Successful!',
    description: 'Bem vindo à sua conta.',
    status: 'success',
    position: 'top-left',
    colorScheme: 'green',
    duration: 2000,
    isClosable: true,
  });

  return 'Login Successful!';
};
