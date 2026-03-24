import { Skills } from '@/types'
import { Box, Divider } from '@mui/material'
import CardTitle from '../atoms/Text/CardTitle'
import Caption from '../atoms/Text/Caption'
import Label from '../atoms/Button/Label'


const SkillCard = ({ skill }: { skill: Skills }) => {
    return (
        <Box sx={{ display: "grid", gap: 2, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Caption sx={{ color: 'text.secondary' }}>{skill?.category?.toUpperCase()}</Caption>
                <Box sx={{ width: '100%' }}>
                    <Divider sx={{ borderBottom: '2px solid', borderColor: 'divider' }} />
                </Box>
            </Box>
            <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1 }}>
                {skill?.skills?.map((s, i) => (
                    <Box key={i}>
                        <Label sx={{...(s.learning && {border:'2px dotted'})}}>{s.learning && ' * '}{s.name}</Label>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default SkillCard
