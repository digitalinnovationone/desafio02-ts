import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Stack,
  Center
} from "@chakra-ui/react"
import { ButtonLogin } from "../ButtonLogin/ButtonLogin"
import { login } from "../../services/login"
import { useState } from "react"



export const CardLogin = () => {
  const [email, setEmail] = useState<string>('')

  return (
    <Card width='500px'>
      <CardHeader>
        <Center>
          <h1>Faça o login</h1>
        </Center>
      </CardHeader>
      <CardBody>
        <Stack>
          <Input placeholder='Email' type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input placeholder='Password' type='password' />
          <ButtonLogin onClick={() => login(email)} />
        </Stack>
      </CardBody>
    </Card>
  )
}