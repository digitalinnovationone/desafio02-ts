import { Box, ChakraProvider, defaultSystem, Flex, Grid, Image } from '@chakra-ui/react';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Provider } from './components/ui/provider';
import { login } from './services/login';
function App() {
  return (
    <>  
        <ChakraProvider value={defaultSystem}>
          <Header/>
          <Grid height={'100vh'} width={'full'} bg={'green.400'} padding={'2em'}>
            <Flex direction={'row'} justify={'center'} spaceX={'2em'}>
              <Image rounded={'15px'} height={'90vh'} width={'150vh'} src="https://img.freepik.com/fotos-gratis/tabela-vazia-da-placa-de-madeira-na-frente-do-fundo-azul-do-mar-do-ceu-perspective-piso-de-madeira-sobre-o-mar-e-ceu-pode-ser-usado-para-exibicao-ou-montagem-seus-produtos-praia-e-conceitos-de-verao_1253-804.jpg?t=st=1732191440~exp=1732195040~hmac=b370e81c5661285930fc329674bedcabe7facdf2822d617dcc2a8e20ee426c3f&w=1380"/>
              <Card/>
            </Flex>
            
          </Grid> 
        </ChakraProvider>
          
    </>
  );
}

export default App;
