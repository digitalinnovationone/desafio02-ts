import { Box, ChakraProvider, Text } from "@chakra-ui/react"

export const Header = () => {
  return(
    <ChakraProvider>
      <Box width="100%" height="80px" backgroundColor="#FFFFFF" display="flex" alignItems="center" justifyContent="center" borderRadius="8px" marginBottom="20px">
        <Text fontSize="2xl" fontWeight="bold" color="#9413dc" padding="0 20px">
          My Bank
        </Text>
      </Box>
    </ChakraProvider>
  )
}