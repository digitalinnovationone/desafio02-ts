import { Box, BoxProps } from "@chakra-ui/react";
import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = BoxProps & {
  children: React.ReactNode;
};

const Layout = ({ children, ...rest }: LayoutProps) => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px" {...rest}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;