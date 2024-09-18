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
    <Box minHeight="78vh" maxWidth="100vw" padding='5px' backgroundColor='#424242'>
      <Box minWidth="250px" maxWidth="40%" margin="auto" backgroundColor='#FFFFFF' borderRadius='25px' marginTop="95px" padding='15px' >
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input margin="10px 0"placeholder="email" />
        <Input margin="10px 0" placeholder="password" />
        <Center>
          <IButton event={login}/>
        </Center>
      </Box>
      </Box>
  </ChakraProvider>
  )
}