import { ChakraProvider, Box, Text, Input, Center } from "@chakra-ui/react"
import { CustomButton } from "../Button/Button"
import { login } from "../../services/login"

export const Card = () => {
  return(
    <ChakraProvider>
        <Box backgroundColor='white' borderRadius='10px' padding='20px' width='100%' margin='0 auto' display='flex' flexDirection='column' alignItems='center'>
            <Text fontSize='2xl' fontWeight='bold' marginBottom='10px'>Login</Text>
            <Input placeholder='Digite seu nome' width='100%' marginBottom='10px' id='nameInput' />
            <Input placeholder='Digite sua senha' width='100%' marginBottom='10px' type='password' id='passwordInput' />
            <Center>
              <CustomButton text='Entrar' onClick={() => login('Giovane')} />
            </Center>
        </Box>
    </ChakraProvider>
  )
}