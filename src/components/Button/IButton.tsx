import { Button } from '@chakra-ui/react'

interface IBtn{
    event:any
}

export const IButton = ({event}:IBtn):any => {
    return (
        <>
            <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                Button
            </Button>
        </>
    )
}