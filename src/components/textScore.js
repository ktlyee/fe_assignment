import { Box, Text } from "@chakra-ui/react"
const TextScore = ({score, scoreType, year}) => {
    return (
       <Box textAlign='center'>
        <Text fontWeight='medium' fontSize='20px' color='gray.500'>
            {score}
        </Text>
        <Text color='gray.500'>
            {scoreType} {year}
        </Text>
    </Box> 
    )
}

export default TextScore