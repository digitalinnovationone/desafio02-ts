import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta' element={<Conta />} />
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
