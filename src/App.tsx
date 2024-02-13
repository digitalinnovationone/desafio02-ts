import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'
import { Header } from './components/Header';
import { Botao } from './components/Botao';

import { login } from './services/login';

function App() {
  return (
    <ChakraProvider>
      <Header title={'Dio Bank'} />
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Botao title={'Login'} event={login} />
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
