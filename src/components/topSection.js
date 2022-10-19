import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const TopSection = ({department, faculty, university}) => {
    return (
        <Flex>
            <Box w='150px'>
                <Image src='https://tcas-assets.skooldio.com/icons/edugroup/med.png'/>
            </Box>
            <Box w='400px' ml='30px'>
                <Text fontWeight='extrabold' fontSize='2xl' color='red.400'>
                    {faculty}
                </Text>   
                <Text fontWeight='extrabold' fontSize='20px' color='gray.500'>
                    {department}
                </Text> 
                <Text fontWeight='normal' fontSize='20px' color='gray.400' mt='10px'>
                    {university}
                </Text>
            </Box>
            <Box w='100px' pl='50px'>
                <StarIcon color='red.400' w='25px' h='25px'/>
            </Box>
        </Flex>
    )
}

export default TopSection