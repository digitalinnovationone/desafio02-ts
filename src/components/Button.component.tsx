import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonComponentProps {
  onClick: () => void;
  text: string;
  chackraProps?: ButtonProps;
}

export const ButtonComponent = ({
  onClick,
  text,
  chackraProps,
}: ButtonComponentProps) => {
  return (
    <Button className="button" onClick={onClick} {...chackraProps}>
      {text}
    </Button>
  );
};
