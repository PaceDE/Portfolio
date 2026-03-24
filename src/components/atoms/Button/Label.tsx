import { Button, SxProps, Theme, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface NavButtonProps {
    children: ReactNode;
    active?:boolean
    sx?: SxProps<Theme>;
}
const Label = ({ children, sx, active=false }: NavButtonProps) => {
    return (
        <Button sx={{
            textTransform: "none", borderRadius: '6px',
            padding: '5px 12px',
            color:'text.secondary',
            backgroundColor:'var(--bg2)',
            border:'1px solid',
            borderColor:'divider',  
            '&:hover': {
                color: 'primary.main',
                bgcolor: 'secondary.main',
                borderColor:'primary.main'
            }, ...sx
        }}>
            <Typography variant="caption">
                {children}
            </Typography>
        </Button>
    )
}

export default Label
