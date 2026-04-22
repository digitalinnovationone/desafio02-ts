import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react"

interface ButtonProps {
  text: string,
  onClick: () => void
}

export const CustomButton = ({ text, onClick }: ButtonProps) => {
  return(
    <ChakraProvider>
        <Box>
            <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              {text}
            </Button>
        </Box>
    </ChakraProvider>
  )
}