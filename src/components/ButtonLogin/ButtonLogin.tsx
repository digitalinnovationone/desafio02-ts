import { Button } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'

interface ButtonProps {
    onClick: MouseEventHandler
}

export const ButtonLogin = ({ onClick }: ButtonProps) => {
    return (
        <Button width='100%' size='md' color='#FFFFFF' onClick={onClick} bg='#4376B8' _hover={{bg: '#6097df'}}>
            Login
        </Button>
    )
}