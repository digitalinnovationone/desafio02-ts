import { Box, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";

const LoginForm: React.FC = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={6} width="300px" mx="auto">
      <Heading as="h2" size="md" mb={4} textAlign="center">
        Login
      </Heading>
      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Digite seu email" />
      </FormControl>
      <FormControl id="password" mb={6}>
        <FormLabel>Senha</FormLabel>
        <Input type="password" placeholder="Digite sua senha" />
      </FormControl>
    </Box>
  );
};

export default LoginForm;
