import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import SkillCard from '../molecules/SkillCard'
import Caption from '../atoms/Text/Caption'
import { fetchData } from '@/utils/fetchData'
import { Skills as SkillType} from '@/types'

const BASE_URL = process.env.BASE_URL
const Skills = async () => {
    const skills = await fetchData<SkillType[]>(`${BASE_URL}/api/skills`);
    return (
        <Box>
            <SectionHeading caption="03 - Skills" title="What I work with"/>
            <Caption sx={{ color: 'success.main' }}>* currenlty learning</Caption>
            <Box>
                {skills?.map((skill, i) => (
                    <SkillCard key={i} skill={skill} />
                ))}
            </Box>         
        </Box>
    )
}

export default Skills