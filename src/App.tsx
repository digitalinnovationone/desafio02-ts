import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Layout } from './components/Layout/Layout';
import { Card } from './components/Card/Card';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Layout>
          <Card />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default App;
