import { Flex } from "@chakra-ui/react"
import { Header } from "./Header/Header"


export const Layout = ({ children }: any) => {
  return (
    <Flex minWidth='300px' height='100vh'  bg='linear-gradient(to right, #3698D3, #5059A1)' padding='10px' direction='column' alignItems='center'>
      <Header />
      { children }
    </Flex>
  )
}
