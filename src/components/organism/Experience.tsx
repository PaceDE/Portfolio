import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import ExperienceCard from '../molecules/ExperienceCard'
import { getExperience } from '@/lib/db'

const BASE_URL = process.env.BASE_URL
const Experience = async () => {
    const experience = await getExperience();
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