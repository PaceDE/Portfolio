import { Button, SxProps, Theme, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface NavButtonProps {
    children: ReactNode;
    active?:boolean
    sx?: SxProps<Theme>;
}
const Navbutton = ({ children, sx, active=false }: NavButtonProps) => {
    return (
        <Button sx={{
            textTransform: "none", borderRadius: '6px',
            padding: '5px 12px',
            color: active ? 'primary.main' : 'text.secondary',
            bgcolor: active ? 'secondary.main' : 'transparent',
            '&:hover': {
                color: 'text.primary',
                bgcolor: 'var(--bg2)',
            }, ...sx
        }}>
            <Typography variant="caption">
                {children}
            </Typography>
        </Button>
    )
}

export default Navbutton
