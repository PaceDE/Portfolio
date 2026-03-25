import { Box } from '@mui/material'
import EducationCard from '../molecules/EducationCard'
import SectionHeading from '../molecules/SectionHeading'
import { fetchData } from '@/utils/fetchData'
import { Education as EducationType} from '@/types'

const BASE_URL = process.env.BASE_URL
const Education = async () => {
    const educations = await fetchData<EducationType[]>(`${BASE_URL}/api/education`);
    return (
        <Box>
            <SectionHeading caption="02 - Education" title="Academic Background"/>
            <Box>
                {educations?.map((education, i) => (
                    <EducationCard key={i} education={education} />
                ))}
            </Box>         
        </Box>
    )
}

export default Education