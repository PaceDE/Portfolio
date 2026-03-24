import { Project } from '@/types'
import { Box, Button } from '@mui/material'
import CardTitle from '../atoms/Text/CardTitle'
import Caption from '../atoms/Text/Caption'
import Body from '../atoms/Text/Body'
import Label from '../atoms/Button/Label'
import ExternalLink from './ExternalLink'

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", borderWidth: "1px 0", borderColor: "divider", paddingY: 4, width: "100%" }}>

            <Box sx={{ width: { xs: '90%', md: '70%' }, transition: 'translate 0.2s ease-in', '&:hover': { translate: '10px' } }}>
                {/* Title */}
                <Box>
                    <CardTitle sx={{ marginBottom: 2, fontSize: '1.25rem' }} >{project?.name}</CardTitle>
                </Box>

                {/* Description */}
                <Box>
                    <Body>{project?.description}</Body>
                </Box>

                <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1, marginY: 2 }}>
                    {project?.stack?.map((s, i) => (
                        <Box key={i}>
                            <Label>{s}</Label>
                        </Box>
                    ))}
                </Box>

                {project.url && (
                    <Button sx={{border:'1px solid', borderColor:'divider'}}>
                        <ExternalLink label='Source code' url={project.url} />
                    </Button>
                )}
            </Box>

            <Box>
                <Caption>
                    {project.id.toString().length > 1 ? project.id : `0${project.id}`}
                </Caption>
            </Box>
        </Box>
    )
}

export default ProjectCard
