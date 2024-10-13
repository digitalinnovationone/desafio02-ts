import { Box, Button } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import { showWelcomeMessage } from "./components/messange";
import LoginForm from "./components/Form";



const HomePage: React.FC = () => {
  return (
    <Box textAlign="center" p={4}>
         <Header />
         <LoginForm />
         <Button onClick={showWelcomeMessage}>Login</Button>
    </Box>
  );
};

export default HomePage;