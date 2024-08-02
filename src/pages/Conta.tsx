import { Center, SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../api"

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    console.log(userData)

    return (
        <Center width={'100vw'}>
            <SimpleGrid alignItems={'center'} columns={2} spacing={8} width={'100%'} minW={'380px'} maxW={'1440px'} padding={5} >
                <CardInfo text='Informações do Acesso' />
                <CardInfo text='Informações da Conta' />
            </SimpleGrid>
        </Center>
    )
}

export default Conta