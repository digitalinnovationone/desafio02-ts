import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { login } from '../services/login';
import { Header } from '../components/Header/Header';


export const Card = () => {
  return(
      
      <ChakraProvider>
        <Header />
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
              <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Button
              </Button>
            </Center>
          </Box>
        </Box>
    </ChakraProvider>
  )
}