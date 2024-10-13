import { Button as ChakraButton } from "@chakra-ui/react";



interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <ChakraButton colorScheme="teal" onClick={onClick}>
      {label}
    </ChakraButton>
  );
};

export default Button;
