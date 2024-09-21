import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export const EmailInput = () => {
  return (
    <InputGroup size="md">
      <Input
        fontSize="xs"
        placeholder="example@ex.com"
        variant="filled"
        borderRadius="2px"
      />
      <InputRightElement width="4.5rem"></InputRightElement>
    </InputGroup>
  );
};
