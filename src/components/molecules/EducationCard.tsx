import { Education } from '@/types'
import { Box } from '@mui/material'
import React from 'react'
import CardTitle from '../atoms/Text/CardTitle'
import Caption from '../atoms/Text/Caption'
import Label from '../atoms/Button/Label'

const EducationCard = ({ education }: { education: Education }) => {
    return (
        <Box sx={{ borderWidth: "1px 0", borderColor: "divider", paddingY: 4, width: "100%" }}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: "space-between", flexWrap: { xs: 'wrap', sm: 'nowrap' }, paddingTop: 1, marginBottom: 2 }}>
                <Box sx={{ flex: '1 0 400px' }}>
                    <CardTitle sx={{ marginBottom: 2, fontSize: '1.25rem' }} >{education?.degree}</CardTitle>
                    <Caption sx={{ color: 'primary.main' }}>{education?.college}</Caption>
                </Box>
                <Box sx={{ flex: '0 0 150px', textAlign: { xs: "left", sm: "right" }, }}>
                    {education.gpa ? (
                        <Box sx={{ color: 'primary.main', }}>
                            <CardTitle sx={{ fontSize: '1.5rem' }}>{education.gpa}</CardTitle>
                            <Caption>GPA</Caption>
                        </Box>

                    ) : (
                        <Box sx={{ color: 'primary.main' }}>
                            <CardTitle sx={{ fontSize: '1.5rem' }}>{education?.percentage}</CardTitle>
                            <Caption sx={{ color: 'primary.main' }}>% percentage</Caption>
                        </Box>
                    )}
                </Box>

            </Box>
            {education.semesters.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: 'wrap', gap: 1 }}>
                    {education.semesters.map((semester, i) => (
                        <Box key={i}>
                            <Label>{semester.semester} - {semester.gpa ? `${semester.gpa} GPA` : `${semester.percentage} %`}</Label>
                        </Box>

                    ))}
                </Box>

            )}
        </Box>
    )
}

export default EducationCard
