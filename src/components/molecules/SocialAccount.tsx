"use client"
import { Box } from "@mui/material"
import Caption from "../atoms/Text/Caption"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

interface SocialAccountProps {
    text:string,
    to:string
}

const SocialAccount = ({ text,to }: SocialAccountProps) => {
    return (
        <Box
            component={'a'}
            href={to}
            target="_blank" rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap:1, color:"text.secondary", '&:hover':{color:'primary.main'}}}>
            <EmailOutlinedIcon sx={{fontSize:14}} />
            <Caption >
                {" " + text}
            </Caption>
        </Box>
    )
}

export default SocialAccount