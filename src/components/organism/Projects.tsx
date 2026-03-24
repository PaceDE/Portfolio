import { Project as ProjectType } from '@/types'
import { fetchData } from '@/utils/fetchData'
import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import ProjectCard from '../molecules/ProjectCard'

const BASE_URL = process.env.BASE_URL
const Projects = async () => {
    const projects = await fetchData<ProjectType[]>(`${BASE_URL}/api/projects`)
    return (
        <Box>
            <SectionHeading caption="04 - Projects" title="Things I've built"/>
            <Box>
                {projects?.map((project, i) => (
                    <ProjectCard key={i} project={project} />
                ))}
            </Box>         
        </Box>
    )
}

export default Projects