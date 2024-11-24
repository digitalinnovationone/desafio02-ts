import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Heading,
  Flex
} from '@chakra-ui/react'
// import { login } from '../../services/login';
import { Header } from '../Header/Header';
import { LoginButton } from './LoginButton';
import { login } from '../../services/login';

export const Card = () => {
  return(
    // <Box backgroundColor='green.400' padding='25px'>
        <Flex direction={'column'} spaceY={'2em'} alignItems={'center'} bg={'green.500'} h={'90vh'} w={'40vh'} padding={'2em'} rounded={'md'}>
          
          <Heading textStyle={'4xl'} color={'white'} fontWeight={'bold'}>Login</Heading>
          
          <Input padding={'1em'} placeholder='Email' bg={'white'} variant={'subtle'} required/>
          <Input padding={'1em'} placeholder='Senha' bg={'white'} variant={'subtle'} required/>

          {/* <Button fontWeight={'semibold'} color={'white'} onClick={login} bg={'green.700'} padding={'1em'}>Entrar</Button> */}
          <LoginButton loginFunction={login}/>
          
        </Flex>
    // </Box>
  
)
}