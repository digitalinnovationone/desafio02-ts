import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import React from 'react';

export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        type={show ? 'text' : 'password'}
        placeholder="∗∗∗∗∗∗∗∗∗∗"
        fontSize="xs"
        sx={{
          '::placeholder': {
            letterSpacing: '0.2em',
          },
        }}
        variant="filled"
        borderRadius="2px"
      />
      <InputRightElement
        width="4.5rem"
        top="50%"
        left="80%"
        transform="translateY(-50%)"
      >
        <Button h="1.75rem" size="sm" onClick={handleClick} variant="link">
          {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};
