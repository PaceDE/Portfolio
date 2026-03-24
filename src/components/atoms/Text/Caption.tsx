import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react'

interface CaptionProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const Caption = ({children,sx}:CaptionProps) => {
  return (
    <Typography variant="caption" sx={{...sx}}>{children}</Typography>
  )
}

export default Caption;