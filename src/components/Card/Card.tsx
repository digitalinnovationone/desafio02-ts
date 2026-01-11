import { useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import Button from "../Button/Button";
import { login } from "../../services/login";

const Card = () => {
  const [email, setEmail] = useState("");

  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="password" type="password" />
      <Center>
        <Button onClick={() => login(email)} colorScheme="teal" size="sm" width="100%" marginTop="5px">
          Entrar
        </Button>
      </Center>
    </Box>
  );
};

export default Card;