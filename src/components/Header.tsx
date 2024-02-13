import { Box, Center, Text } from '@chakra-ui/react'

interface Props {
  title: string
}

export const Header  = ({ title }: Props) => {
  return(
    <Box padding={'25px'} boxShadow={'2xl'}>
      <Center>
        <Text fontSize={'xl'} as={'b'}>{title}</Text>
      </Center>
    </Box>
  )
}
