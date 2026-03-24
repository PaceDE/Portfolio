import { Experience as ExperienceType } from '@/types'
import { fetchData } from '@/utils/fetchData'
import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import ExperienceCard from '../molecules/ExperienceCard'

const BASE_URL = process.env.BASE_URL
const Experience = async () => {
    const experience = await fetchData<ExperienceType[]>(`${BASE_URL}/api/experience`)
    return (
        <Box>
            <SectionHeading caption="05 - Experience" title="Where I've worked"/>
            <Box>
                {experience?.map((experience, i) => (
                    <ExperienceCard key={i} experience={experience} />
                ))}
            </Box>         
        </Box>
    )
}

export default Experience