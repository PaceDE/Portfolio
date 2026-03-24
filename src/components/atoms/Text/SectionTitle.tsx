import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const SectionTitle = ({children,sx}:SectionTitleProps) => {
  return (
    <Typography variant="h2" sx={{ fontSize: "clamp(1.75rem, 3vw, 4rem)",...sx}}>{children}</Typography>
  )
}

export default SectionTitle;