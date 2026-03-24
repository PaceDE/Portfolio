import { Experience } from '@/types'
import { Box, Button } from '@mui/material'
import CardTitle from '../atoms/Text/CardTitle'
import Caption from '../atoms/Text/Caption'
import Body from '../atoms/Text/Body'
import Label from '../atoms/Button/Label'
import ExternalLink from './ExternalLink'

const ExperienceCard = ({ experience }: { experience: Experience }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", borderWidth: "1px 0", borderColor: "divider", paddingY: 4, width: "100%" }}>

            <Box sx={{ display:'grid', gap:2, width: { xs: '90%', md: '70%' } }}>
                {/* Title */}
                <Box>
                    <CardTitle sx={{ fontSize: '1.25rem' }} >{experience.role}</CardTitle>
                    <Caption sx={{ color: 'primary.main' }}>{experience.company}</Caption>
                    <Caption sx={{ color: 'primary.main' }}>{experience.address}</Caption><br/>
                    <Caption sx={{ color: 'primary.main' }}>Contact: {experience.contact}</Caption>
                </Box>

                {/* Description */}
                <Box>
                    {experience?.bullets.map((work, i) => (
                        <Box key={i} sx={{ display: "flex", gap: 1 }}>
                            <Body>- </Body>
                            <Body>{work}</Body>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1, marginY: 2 }}>
                    {experience?.stack.map((s, i) => (
                        <Box key={i}>
                            <Label>{s}</Label>
                        </Box>
                    ))}
                </Box>

                {/* {project.url && (
                    <Button sx={{border:'1px solid', borderColor:'divider'}}>
                        <ExternalLink label='Source code' url={project.url} />
                    </Button>
                )} */}
            </Box>

            {/* <Box>
                <Caption>
                    {project.id.toString().length > 1 ? project.id : `0${project.id}`}
                </Caption>
            </Box> */}
        </Box>
    )
}

export default ExperienceCard
