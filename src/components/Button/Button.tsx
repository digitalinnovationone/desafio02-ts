import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomButtonProps = ChakraButtonProps & {
  onClick: () => void;
  children: ReactNode;
};

const Button = ({ onClick, children, ...rest }: CustomButtonProps) => {
  return (
    <ChakraButton
      onClick={onClick}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;