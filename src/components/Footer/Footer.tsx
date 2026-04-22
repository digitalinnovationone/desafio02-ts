import {Box, ChakraProvider, Text} from "@chakra-ui/react"

export const Footer  = () => {
  return(
    <ChakraProvider>
      <Box width="100%" height="80px" backgroundColor="#FFFFFF" display="flex" alignItems="center" justifyContent="center" borderRadius="8px" marginTop="20px">
        <Text fontSize="md" color="#9413dc" padding="0 20px">
          &copy; 2024 My Bank. All rights reserved.
        </Text>
      </Box>
    </ChakraProvider>
  )
}
