"use client"
import { Box } from "@mui/material"
import Caption from "../atoms/Text/Caption"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { ReactNode } from "react"

interface ExternalLinkProps {
    label:string,
    url:string,
    icon?: ReactNode
}

const ExternalLink = ({ label, url,icon }: ExternalLinkProps) => {
    return (
        <Box
            component="a"
            href={url}
            target="_blank" rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap:1, color:"text.secondary", '&:hover':{color:'primary.main'}}}>
            {icon && icon}
            <Caption>
                {" " + label}
            </Caption>
        </Box>
    )
}

export default ExternalLink