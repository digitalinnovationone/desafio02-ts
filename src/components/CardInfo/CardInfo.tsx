import { Box } from "@chakra-ui/react"

interface IcardInfo {
    text: string
}

const CardInfo = ({ text }: IcardInfo) => {
    return (
        <Box backgroundColor='#FFFFFF'  minHeight='120px' padding={8} borderRadius={10}>
            { text }
        </Box>
    )
}

export default CardInfo
