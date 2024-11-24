import { Button } from "@chakra-ui/react"
import { jsx } from "@emotion/react"

interface Button{
    loginFunction: ()=>{} | void
}

export const LoginButton = ({loginFunction}:Button) => {
    return(
        <Button onClick={loginFunction} color='white' bg={'green.700'} size='sm' width='100%' marginTop='5px'>Entrar</Button>
    )
}