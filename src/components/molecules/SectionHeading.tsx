import React from 'react'
import Caption from '../atoms/Text/Caption'
import SectionTitle from '../atoms/Text/SectionTitle'
import { Box } from '@mui/material'

export interface Props{
    caption:string,
    title:string
}
const SectionHeading = ({caption,title}:Props) => {
    return (
        <Box>
            <Caption sx={{ textTransform: 'uppercase', color: "text.secondary" }}>{caption}</Caption>
            <SectionTitle sx={{ marginTop: 2, marginBottom: 3 }}>{title}</SectionTitle>
        </Box>
    )
}

export default SectionHeading