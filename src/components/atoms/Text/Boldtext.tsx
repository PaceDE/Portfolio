import { SxProps, Theme, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface BoldTextProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const Boldtext = ({children,sx}:BoldTextProps) => {
  return (
    <Typography variant="h6" sx={{...sx}}>{children}</Typography>
  )
}

export default Boldtext