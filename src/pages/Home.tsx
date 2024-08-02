import { Flex } from "@chakra-ui/react"
import { CardLogin } from "../components/CardLogin/CardLogin"

const Home = () => {
    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <CardLogin />
        </Flex>
    )
}

export default Home