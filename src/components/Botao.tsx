import { Button } from '@chakra-ui/react'

interface IBotao {
    title: string,
    event: () => void
}

export const Botao = ({ title, event }: IBotao) => {
    return (
        <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {title}
        </Button>
    )
}