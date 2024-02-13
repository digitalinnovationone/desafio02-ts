import { ChakraProvider } from '@chakra-ui/react'
import { Header } from './components/Header';

import { login } from './services/login';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Header title={'Dio Bank'} />
      <Card event={login} />
    </ChakraProvider>
  );
}

export default App;
