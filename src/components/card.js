import { Box, Divider, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BottomSection from './bottomSection'
import TopSection from './topSection'

const CardDetail = () => {
    const [response, setResponse] = useState([])

    const fetchData = async () => {
        const api = await fetch('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
        const data = await api.json()
        setResponse(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Stack>
            {
               response.map((res, index) => (
                <Box key={index} borderWidth='1px' borderRadius='md' w='40%'>
                    <Box m='20px'>
                        <TopSection 
                            department={res.name} 
                            faculty={res.faculty.name} 
                            university={res.faculty.university.name} 
                        />
                        <Divider />
                        <BottomSection 
                            scoreType={res.score? res.score.scoreType : '-'}
                            roundSeats={res.roundSeats}
                            minScore={res.score ? res.score.min : '-'}
                            maxScore={res.score ? res.score.max : '-'}
                            avgScore={res.score ? res.score.avg : '-'}
                            year={res.score ? res.score.year.toString().slice(-2) : '-'}
                        />
                    </Box>
                </Box> 
            )) 
            }
        </Stack>
        
    )
}

export default CardDetail
