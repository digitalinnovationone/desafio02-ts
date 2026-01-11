import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./components/Layout/Layout"
import Card from './components/Card/Card';


function App() {
  return (
    <ChakraProvider>
      <Layout minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Card />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
