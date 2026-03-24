import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react'

interface BodyProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const Body = ({children,sx}:BodyProps) => {
  return (
    <Typography sx={{ color:"text.description",...sx}}>{children}</Typography>
  )
}

export default Body;