import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const Heading = ({children,sx}:HeadingProps) => {
  return (
    <Typography variant="h1" sx={{ fontSize: "clamp(2.25rem, 4vw, 5rem)",...sx}}>{children}</Typography>
  )
}

export default Heading;