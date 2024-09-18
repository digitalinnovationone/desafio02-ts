import { 
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import {login} from '../../services/login'
import { IButton } from '../Button/IButton'

export const Card = () => {

  return(
    <ChakraProvider>
    <Box minHeight='100vh' backgroundColor='#424242' padding='25px'>
      <Box minWidth="250px" maxWidth="40%" margin="auto" backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <IButton event={login}/>
        </Center>
      </Box>
    </Box>
  </ChakraProvider>
  )
}