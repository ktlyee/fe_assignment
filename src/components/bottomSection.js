import { EditIcon } from "@chakra-ui/icons"
import { Box, Circle, HStack, Spacer, Stack, Text } from "@chakra-ui/react"
import TextScore from "./textScore"

const BottomSection = ({scoreType, roundSeats, minScore, maxScore, avgScore, year}) => {
    const roundColor = (amount) => {
        return amount > 0 ? 'green.300' : 'gray.200'
    }

    return (
        <Stack spacing={10} mt='20px'>
            <HStack>
                <Box mr='30px'>
                  <Text color='gray.600' fontSize='20px'>รอบที่เปิด</Text>  
                </Box>
                  {
                    roundSeats.map((round, index) => (
                        <Circle key={index} color='white' bg={roundColor(round)} size='30px'>{index+1}</Circle>
                    ))
                }  
            </HStack>
            <HStack mt='20px'>
                <Text color='red.400' fontWeight='bold'>รอบที่ 4 : {scoreType}</Text>
                <Spacer />
                <Box>
                    <Circle borderColor='red.400' borderWidth='1px' p='8px'>
                        <Text color='red.400' fontSize='xs'>แก้ไขคะแนน</Text>
                        <EditIcon color='red.400' w='30px' />
                    </Circle>
                </Box>
            </HStack>
            <HStack>
                <TextScore score={minScore} scoreType={'คะแนนต่ำสุด'} year={year} />
                <Spacer />
                <TextScore score={avgScore} scoreType={'คะแนนเฉลี่ย'} year={year} />
                <Spacer />
                <TextScore score={maxScore} scoreType={'คะแนนสูงสุด'} year={year} />
            </HStack>
        </Stack>
    )
}

export default BottomSection